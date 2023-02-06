import './styles/Form.css';
import React from 'react';

export const Form = ({ nameForm = 'add' }) => {
  return nameForm === 'update' ? (
    <form className='form'>
      <label htmlFor='name'></label>
      <input type='text' name='' id='name' />
      <label htmlFor='description'></label>
      <textarea name='description' id='description'></textarea>
      <button type='submit'>Update</button>
    </form>
  ) : (
    <form className='form'>
      <label htmlFor='name'>Name</label>
      <input type='text' name='' id='name' />
      <label htmlFor='description'>Description</label>
      <textarea name='description' id='description'></textarea>
      <button type='submit'>Add</button>
    </form>
  );
};
