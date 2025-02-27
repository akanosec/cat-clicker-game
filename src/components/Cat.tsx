import { useGameStore } from '../store/gameStore';

const Cat = () => {
  const { incrementClicks, isSpinning } = useGameStore();
  
  const handleClick = () => {
    incrementClicks();
  };

  const catImage = isSpinning ? "/cat-clicker-game/assets/gifs/spin-loop.gif" : "/cat-clicker-game/assets/gifs/cat.gif";

  return (
    <div className="flex justify-center my-8">
      <div 
        className={`cursor-pointer transition-transform ${
          isSpinning ? 'animate-spin-slow scale-110' : 'hover:scale-105'
        }`}
        onClick={handleClick}
      >
        <img
          src={catImage}
          alt="Clickable Cat"
          className={`w-48 h-48 ${isSpinning ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' : ''}`}
        />
      </div>
    </div>
  );
};

export default Cat;