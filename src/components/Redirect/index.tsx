import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }

    timeout.current = window.setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      navigate('/about', {
        state: `This is the state: ${Math.random()}`,
      });
    }

    return () => {
      if (timeout.current !== null) {
        clearTimeout(timeout.current);
      }
    };
  }, [time, navigate]);

  return (
    <div>
      <h1>Get out of here in: {time}</h1>
    </div>
  );
};