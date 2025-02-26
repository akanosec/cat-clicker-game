export interface GameState {
    clicks: number;
    clicksPerClick: number;
    clicksPerSecond: number;
    lastSaved: number;
    firstClickTime: number | null;
    lifetimeClicks: number;
    isSpinning: boolean;
  }
  
  export interface Upgrade {
    id: string;
    name: string;
    description: string;
    cost: number;
    effect: (state: GameState) => void;
    purchased: boolean;
    requires?: string;
    level: number;
  }