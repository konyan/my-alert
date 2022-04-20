import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Alert from './Alert';

export const AlertContext = createContext();

const AlertProvider = (props) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'ADD_ALERT':
          return [...state, { ...action.payload, id: uuidv4() }];
        case 'REMOVE_ALERT':
          console.log('HIT ', action.payload);
          return state.filter((s) => s.id !== action.payload.id);
        default:
          return state;
      }
    },
    [
      {
        id: uuidv4(),
        title: 'TITLE',
        message: 'Hello World',
        type: 'success',
        timeLimit: 10,
      },
      {
        id: uuidv4(),
        title: 'ERROR',
        message: 'Hello World',
        type: 'error',
      },
      {
        id: uuidv4(),
        title: 'WARNING',
        message: 'WARNING World',
        type: 'warning',
      },
      {
        id: uuidv4(),
        title: 'INFO',
        message: 'Hello World',
        type: 'info',
      },
    ]
  );

  // dispatch({
  //   action: 'ADD_ALERT',
  //   payload: {
  //     title: 'NEW ALERT',
  //     message: 'Hello World',
  //     type: 'success',
  //     timeLimit: 10,
  //   },
  // });

  return (
    <AlertContext.Provider value={dispatch}>
      <div className='alert-wrapper'>
        {state.map((alert) => (
          <Alert {...alert} key={alert.id} dispatch={dispatch} />
        ))}
      </div>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
