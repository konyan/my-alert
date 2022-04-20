import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Alert from './Alert';

export const AlertContext = createContext();

const AlertManager = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_ALERT':
        return [...state, { ...action.payload, id: uuidv4() }];
      case 'REMOVE_ALERT':
        console.log('HIT ', action.payload);
        return state.filter((s) => s.id !== action.payload.id);
      default:
        return state;
    }
  }, []);

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

export default AlertManager;
