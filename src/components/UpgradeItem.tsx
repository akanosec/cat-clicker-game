import { useRef } from 'react';
import { Upgrade } from '../types';
import { useGameStore } from '../store/gameStore';

interface UpgradeItemProps {
  upgrade: Upgrade;
}

const UpgradeItem = ({ upgrade }: UpgradeItemProps) => {
  const { clicks, purchaseUpgrade } = useGameStore();
  const purrSoundRef = useRef<HTMLAudioElement | null>(null);
  
  if (!purrSoundRef.current) {
    purrSoundRef.current = new Audio('/assets/sounds/purr.mp3');
  }
  
  const isDisabled = upgrade.purchased || clicks < upgrade.cost;
  
  const handlePurchase = () => {
    if (isDisabled) return;
    
    // Play purchase sound
    if (purrSoundRef.current) {
      purrSoundRef.current.currentTime = 0;
      purrSoundRef.current.play().catch(e => console.error('Audio error:', e));
    }
    
    purchaseUpgrade(upgrade.id);
  };
  
  return (
    <div 
      className={`p-4 rounded-lg transition-all duration-200 ${
        upgrade.purchased
          ? 'bg-green-900/50 cursor-default'
          : !isDisabled 
            ? 'bg-purple-900/50 hover:bg-purple-800/50 cursor-pointer'
            : 'bg-gray-800/50 opacity-75 cursor-not-allowed'
      } mb-2 border border-purple-500/30`}
      onClick={handlePurchase}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-purple-200">{upgrade.name}</h3>
          <p className="text-sm text-purple-300/75">Level: {upgrade.level}</p>
        </div>
        <div className="text-right">
          <p className={`text-lg font-semibold ${
            upgrade.purchased 
              ? 'text-green-400'
              : !isDisabled 
                ? 'text-green-400' 
                : 'text-red-400'
          }`}>
            {upgrade.purchased ? 'Purchased' : `${upgrade.cost} cats`}
          </p>
        </div>
      </div>
      <p className="text-sm text-purple-400/90 mt-1">{upgrade.description}</p>
    </div>
  );
};

export default UpgradeItem;