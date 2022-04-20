import { useContext } from 'react';
import { AlertContext } from '../alert/AlertProvider';

const Button = () => {
  const dispatch = useContext(AlertContext);
  console.log('CONTEXT', dispatch);

  const addAlert = (type) => {
    dispatch({
      type: 'ADD_ALERT',
      payload: {
        title: 'TITLE',
        message: 'Hello World',
        type: type,
        timeLimit: 10,
      },
    });
  };
  return (
    <div>
      <button onClick={(e) => addAlert('success')} className='btn btn-success'>
        Click Me Alert
      </button>
      <button onClick={(e) => addAlert('error')} className='btn btn-error'>
        Click Me Alert
      </button>
      <button onClick={(e) => addAlert('info')} className='btn btn-info'>
        Click Me Alert
      </button>
      <button onClick={(e) => addAlert('warning')} className='btn btn-warning'>
        Click Me Alert
      </button>
    </div>
  );
};

export default Button;
