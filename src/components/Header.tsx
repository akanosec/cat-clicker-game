import { useGameStore } from '../store/gameStore';
import { useEffect, useState } from 'react';

const Header = () => {
  const { clicks, clicksPerClick, clicksPerSecond, firstClickTime, lifetimeClicks } = useGameStore();
  const [averageRate, setAverageRate] = useState<number>(0);
  
  useEffect(() => {
    const updateRate = () => {
      if (firstClickTime && lifetimeClicks > 0) {
        const elapsedSeconds = (Date.now() - firstClickTime) / 1000;
        if (elapsedSeconds >= 1) {
          setAverageRate(lifetimeClicks / elapsedSeconds);
        } else {
          setAverageRate(0);
        }
      }
    };

    updateRate();
    const interval = setInterval(updateRate, 1000);
    return () => clearInterval(interval);
  }, [lifetimeClicks, firstClickTime]);

  const formatTimePlayed = () => {
    if (!firstClickTime) return "00:00:00";
    const elapsedSeconds = Math.floor((Date.now() - firstClickTime) / 1000);
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-200">
        Cat Premium Enhancements Shop
      </h1>
      <div className="grid grid-cols-6 gap-4 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-purple-300 text-sm mb-1 h-8 flex items-center">Cats</span>
          <span className="text-purple-100 text-xl font-bold">{Math.floor(clicks)}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-purple-300 text-sm mb-1 h-8 flex items-center">Cats Per Click</span>
          <span className="text-purple-100 text-xl font-bold">{clicksPerClick}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-purple-300 text-sm mb-1 h-8 flex items-center text-center">
            Passive Cat<br />Income
          </span>
          <span className="text-purple-100 text-xl font-bold">{clicksPerSecond}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-purple-300 text-sm mb-1 h-8 flex items-center">Lifetime Cats</span>
          <span className="text-purple-100 text-xl font-bold">{Math.floor(lifetimeClicks)}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-purple-300 text-sm mb-1 h-8 flex items-center">Cats/sec (avg)</span>
          <span className="text-purple-100 text-xl font-bold">{averageRate.toFixed(1)}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-purple-300 text-sm mb-1 h-8 flex items-center">Time Elapsed</span>
          <span className="text-purple-100 text-xl font-bold">{formatTimePlayed()}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;