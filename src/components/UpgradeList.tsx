import { useGameStore } from '../store/gameStore';
import UpgradeItem from './UpgradeItem';

const UpgradeList = () => {
  const { upgrades } = useGameStore();
  
  // Filter upgrades to only show those that are purchased or available
  const visibleUpgrades = upgrades.filter(upgrade => {
    // If it has a requirement, only show if the required upgrade is purchased
    if (upgrade.requires) {
      const requiredUpgrade = upgrades.find(u => u.id === upgrade.requires);
      return requiredUpgrade?.purchased;
    }
    return true;
  });
  
  return (
    <div className="bg-gray-900/80 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-400">
        Cat Premium Enhancements Shop
      </h2>
      <div className="space-y-3">
        {visibleUpgrades.map((upgrade) => (
          <UpgradeItem key={upgrade.id} upgrade={upgrade} />
        ))}
      </div>
    </div>
  );
};

export default UpgradeList;