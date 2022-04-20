import { useContext, useReducer, useState } from 'react';
import { AlertContext } from '../alert/AlertManager';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Button = () => {
  const dispatch = useContext(AlertContext);
  const [formData, setFormData] = useReducer(formReducer, {
    type: 'success',
    timeLimit: 4,
  });

  console.log('CONTEXT', dispatch);

  const addAlert = (type) => {
    console.log('FORM DATA', formData);

    dispatch({
      type: 'ADD_ALERT',
      payload: { ...formData },
    });
  };

  return (
    <div>
      <label htmlFor='title'>Enter Title</label>
      <input
        type='text'
        value={formData.title || ''}
        name='title'
        className='input'
        onChange={setFormData}
      />
      <label htmlFor='message'>Enter Message</label>
      <input
        type='text'
        value={formData.message || ''}
        name='message'
        className='input'
        onChange={setFormData}
      />
      <label htmlFor='type'>Alert Type</label>
      <br />
      <select
        name='type'
        id='type'
        className='select'
        value={formData.type || ''}
        onChange={setFormData}
      >
        <option value='error'>Error</option>
        <option value='info'>Info</option>
        <option value='warning'>Warning</option>
        <option value='success'>Success</option>
      </select>
      <br />
      <label htmlFor='timeLimit'>Alert Seconds</label>
      <br />
      <select
        name='timeLimit'
        id='timeLimit'
        className='select'
        onChange={setFormData}
        value={formData.timeLimit || ''}
      >
        <option value='4'>4 seconds</option>
        <option value='5'>5 seconds</option>
        <option value='6'>6 seconds</option>
        <option value='8'>8 seconds</option>
        <option value='10'>10 seconds</option>
      </select>
      <button onClick={(e) => addAlert()} className='btn btn-success'>
        Click Me Alert
      </button>
    </div>
  );
};

export default Button;
