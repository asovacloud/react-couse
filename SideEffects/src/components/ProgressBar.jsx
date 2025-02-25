import { useState, useEffect } from 'react';

const ProgressBar = ({ maxTime }) => {
  const [ramainingTime, setRemainingTime] = useState(maxTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={ramainingTime} max={maxTime} />;
};

export default ProgressBar;
