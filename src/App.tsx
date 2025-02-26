import { useEffect, useState } from 'react';
import Header from './components/Header';
import Cat from './components/Cat';
import UpgradeList from './components/UpgradeList';
import { useGameStore } from './store/gameStore';
import SpaceBackground from './components/SpaceBackground';

function App() {
  const { clicksPerSecond, processOfflineProgress, resetGame, addClicks } = useGameStore();
  const [showOfflineModal, setShowOfflineModal] = useState(false);
  const [offlineEarnings, setOfflineEarnings] = useState(0);
  
  // Set up game loop for passive income
  useEffect(() => {
    const interval = setInterval(() => {
      if (clicksPerSecond > 0) {
        addClicks(clicksPerSecond / 10);
      }
    }, 100); // Update 10 times per second for smoother increments
    
    return () => clearInterval(interval);
  }, [clicksPerSecond, addClicks]);
  
  // Process offline progress when the game loads
  useEffect(() => {
    const earnings = processOfflineProgress();
    if (earnings > 0) {
      setOfflineEarnings(earnings);
      setShowOfflineModal(true);
    }
  }, [processOfflineProgress]);
  
  return (
    <>
      <SpaceBackground />
      <div className="game-container">
        <Header />
        <Cat />
        <UpgradeList />
        
        {/* Reset button (for debugging) */}
        <div className="text-center mt-8">
          <button 
            onClick={resetGame}
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            Reset Game
          </button>
        </div>
        
        {/* Offline earnings modal */}
        {showOfflineModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md">
              <h3 className="text-xl font-bold mb-2">Welcome Back!</h3>
              <p className="mb-4">
                While you were away, your cats generated {Math.floor(offlineEarnings)} clicks for you!
              </p>
              <button 
                className="bg-pink-500 text-white px-4 py-2 rounded-lg w-full"
                onClick={() => setShowOfflineModal(false)}
              >
                Collect
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;