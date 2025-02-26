import { Upgrade, GameState } from '../types';

export const upgrades: Upgrade[] = [
  {
    id: 'better-petting',
    name: 'Better Petting Technique',
    description: 'Get 2 cats per click',
    cost: 50,
    effect: (state: GameState) => { 
      state.clicksPerClick = 2;
    },
    purchased: false,
    level: 1,
  },
  {
    id: 'auto-petter',
    name: 'Auto Petter',
    description: 'Get 1 cat per second automatically',
    cost: 100,
    effect: (state: GameState) => { 
      state.clicksPerSecond += 1; 
    },
    purchased: false,
    level: 1,
  },
  {
    id: 'petting-glove',
    name: 'Petting Glove',
    description: 'Get 5 cats per click',
    cost: 500,
    effect: (state: GameState) => { 
      state.clicksPerClick = 5; 
    },
    purchased: false,
    requires: 'better-petting',
    level: 1,
  },
  {
    id: 'catnip',
    name: 'Premium Catnip',
    description: 'Double your current passive cat income per second',
    cost: 1000,
    effect: (state: GameState) => { 
      state.clicksPerSecond *= 2; 
    },
    purchased: false,
    requires: 'auto-petter',
    level: 1,
  },
  {
    id: 'laser-pointer',
    name: 'Laser Pointer',
    description: 'Get 10 cats per click',
    cost: 2000,
    effect: (state: GameState) => { 
      state.clicksPerClick = 10; 
    },
    purchased: false,
    requires: 'petting-glove',
    level: 1,
  },
];