import './styles/Form.css';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useTodosContext from '../hooks/useTodosContext';

export const Form = ({ nameForm = 'add', openModal, closeModal }) => {
  const [todo, dispatchTodo, todos, dispatchTodos] = useTodosContext();
  const [submission, setSubmission] = useState(null);

  const labelRef = useRef();

  useEffect(() => {
    openModal();
  }, []);

  useEffect(() => {
    if (submission === 'add') dispatchTodos({ type: 'ADD_TODO', value: todo });
    if (submission === 'update') console.log('update...');
    return () => {
      dispatchTodo({ type: 'RESET' });
      setSubmission(null);
      closeModal();
    };
  }, [submission]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log('handle submit...');
    if (!todo.name || !todo.description) {
      labelRef.current.classList.add('danger');
      return;
    }
    dispatchTodo({ type: 'SET_ID', value: uuidv4() });
    setSubmission('add');
  };

  return nameForm === 'update' ? (
    <p>update...</p>
  ) : (
    <form className='form' onSubmit={handleAddTodo}>
      <label htmlFor='name'>
        Name<span>*</span>
      </label>
      <input
        type='text'
        name=''
        id='name'
        value={todo.name}
        onInput={(e) =>
          dispatchTodo({ type: 'SET_NAME', value: e.target.value })
        }
      />
      <label htmlFor='description'>
        Description<span>*</span>
      </label>
      <textarea
        name='description'
        id='description'
        value={todo.description}
        onChange={(e) =>
          dispatchTodo({ type: 'SET_DESCRIPTION', value: e.target.value })
        }
      ></textarea>
      <button type='submit'>Add</button>
      <label ref={labelRef}>
        <span>*</span>All fields are mandatory.
      </label>
    </form>
  );
};
