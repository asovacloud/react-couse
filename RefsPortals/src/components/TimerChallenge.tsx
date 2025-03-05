import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef(null);
  const dialog = useRef(null);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = 0 < timeRemaining && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        remainingTime={timeRemaining}
        ref={dialog}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{`${targetTime} second${
          targetTime > 1 ? 's' : ''
        }`}</p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : ''}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
