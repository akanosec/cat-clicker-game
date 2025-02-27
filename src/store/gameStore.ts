import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, Upgrade } from '../types';
import { upgrades as upgradeDefinitions } from '../utils/upgrades';

// Audio setup
const clickSound = new Audio('/cat-clicker-game/assets/sounds/click.mp3');
clickSound.loop = true;
let stopSoundTimeout: number | null = null;

interface GameStore extends GameState {
  upgrades: Upgrade[];
  incrementClicks: () => void;
  purchaseUpgrade: (upgradeId: string) => void;
  processOfflineProgress: () => number;
  resetGame: () => void;
  addClicks: (amount: number) => void;
}

const handleEffects = (set: any) => {
  // Clear existing timeout
  if (stopSoundTimeout) {
    clearTimeout(stopSoundTimeout);
  }

  // Start sound and spinning
  if (clickSound.paused) {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.error('Audio error:', e));
  }
  set((state: GameState) => ({ ...state, isSpinning: true }));

  // Set timeout to stop both effects
  stopSoundTimeout = window.setTimeout(() => {
    clickSound.pause();
    clickSound.currentTime = 0;
    set((state: GameState) => ({ ...state, isSpinning: false }));
    stopSoundTimeout = null;
  }, 2000);
};

// Initial game state
const initialState: GameState = {
  clicks: 0,
  clicksPerClick: 1,
  clicksPerSecond: 0,
  lastSaved: Date.now(),
  firstClickTime: null,
  lifetimeClicks: 0,
  isSpinning: false,
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      // Initialize upgrades by merging definitions with any persisted state
      upgrades: upgradeDefinitions,
      
      incrementClicks: () => {
        set((state) => {
          handleEffects(set);
          const now = Date.now();
          const clickAmount = state.clicksPerClick;
          return {
            clicks: state.clicks + clickAmount,
            lifetimeClicks: state.lifetimeClicks + clickAmount,
            firstClickTime: state.firstClickTime === null && state.clicks === 0 ? now : state.firstClickTime,
          };
        });
      },
      
      purchaseUpgrade: (upgradeId: string) => {
        const state = get();
        console.log('Attempting purchase:', upgradeId);
        console.log('Current state:', state);
        
        // Find the upgrade from the original definitions to ensure we have the effect function
        const upgradeDefinition = upgradeDefinitions.find(u => u.id === upgradeId);
        const upgradeIndex = state.upgrades.findIndex(u => u.id === upgradeId);
        
        console.log('Upgrade index:', upgradeIndex);
        
        if (upgradeIndex === -1 || !upgradeDefinition) {
          console.log('Upgrade not found');
          return;
        }
        
        const upgrade = state.upgrades[upgradeIndex];
        console.log('Upgrade:', upgrade);
        console.log('Current clicks:', state.clicks);
        console.log('Upgrade cost:', upgrade.cost);
        
        // Check if already purchased or not enough clicks
        if (upgrade.purchased || state.clicks < upgrade.cost) {
          console.log('Cannot purchase:', upgrade.purchased ? 'already purchased' : 'not enough clicks');
          return;
        }
        
        // Create a new state object and apply the effect using the original definition
        const newState = { ...state };
        upgradeDefinition.effect(newState);
        console.log('State after effect:', newState);
        
        // Update state with new values and mark upgrade as purchased
        set({
          ...state,
          clicks: state.clicks - upgrade.cost,
          clicksPerClick: newState.clicksPerClick,
          clicksPerSecond: newState.clicksPerSecond,
          upgrades: state.upgrades.map((u, index) => 
            index === upgradeIndex ? { ...u, purchased: true } : u
          ),
          lastSaved: Date.now(),
        });
        
        console.log('Purchase completed');
      },
      
      processOfflineProgress: () => {
        const { lastSaved, clicksPerSecond } = get();
        const now = Date.now();
        const secondsOffline = Math.floor((now - lastSaved) / 1000);
        
        if (secondsOffline > 0 && clicksPerSecond > 0) {
          const offlineClicks = secondsOffline * clicksPerSecond;
          
          set((state) => ({
            clicks: state.clicks + offlineClicks,
            lastSaved: now,
          }));
          
          return offlineClicks;
        }
        
        set({ lastSaved: now });
        return 0;
      },
      
      resetGame: () => {
        set({
          ...initialState,
          upgrades: upgradeDefinitions.map(u => ({ ...u, purchased: false })),
          lastSaved: Date.now(),
          firstClickTime: null,
          lifetimeClicks: 0,  // Reset lifetime clicks on game reset
        });
      },
      
      addClicks: (amount: number) => {
        set((state) => {
          handleEffects(set);
          const now = Date.now();
          return {
            clicks: state.clicks + amount,
            lifetimeClicks: state.lifetimeClicks + amount,
            lastSaved: Date.now(),
            firstClickTime: state.firstClickTime === null && state.clicks === 0 ? now : state.firstClickTime,
          };
        });
      },
    }),
    {
      name: 'cat-clicker-storage',
      partialize: (state) => ({
        clicks: state.clicks,
        clicksPerClick: state.clicksPerClick,
        clicksPerSecond: state.clicksPerSecond,
        lastSaved: state.lastSaved,
        firstClickTime: state.firstClickTime,
        lifetimeClicks: state.lifetimeClicks,
        upgrades: state.upgrades.map(upgrade => ({
          ...upgrade,
          effect: undefined, // Don't persist effect functions
        })),
      }),
    }
  )
);