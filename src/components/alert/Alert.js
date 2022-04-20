import React, { useEffect, useState } from 'react';

const Alert = (props) => {
  const [width, setWidth] = useState(0);
  const [exit, setExit] = useState(false);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, (props.timeLimit * 1000) / 200);
    console.log('ITER', id);
    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseAlert = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        action: 'REMOVE_ALERT',
        payload: {
          id: props.id,
        },
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      handleCloseAlert();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`alert-item ${props.type} ${exit ? 'exit' : ''}`}
    >
      <span onClick={handleCloseAlert} className='close'>
        X
      </span>
      <h3>{props.title || 'default title'}</h3>
      <p>{props.message || 'default message'}</p>
      <div className='bar' style={{ width: `${width}%` }}></div>
    </div>
  );
};
export default Alert;
