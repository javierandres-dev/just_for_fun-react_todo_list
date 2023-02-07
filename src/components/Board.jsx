import './styles/Board.css';
import React, { useEffect, useState } from 'react';
import useTodosContext from '../hooks/useTodosContext';

export const Board = () => {
  const [todo, dispatchTodo, todos, dispatchTodos] = useTodosContext();
  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    const doneArr = [],
      doingArr = [],
      todoArr = [];
    for (const i of todos) {
      if (i.status === 'done') setDoneList([...doneArr, i]);
      else if (i.status === 'doing') setDoingList([...doingArr, i]);
      else setTodoList([...todoArr, i]);
    }
  }, [todos]);

  const todoItems = todoList.map((t) => (
    <li key={t.id}>
      <div>name: {t.name}</div>
      <div>description: {t.description}</div>
      <div>Edit...</div>
    </li>
  ));
  const doingItems = doingList.map((t) => (
    <li key={t.id}>
      <div>name: {t.name}</div>
      <div>description: {t.description}</div>
      <div>Edit...</div>
    </li>
  ));
  const doneItems = doneList.map((t) => (
    <li key={t.id}>
      <div>name: {t.name}</div>
      <div>description: {t.description}</div>
      <div>Edit...</div>
    </li>
  ));
  return (
    <section className='board'>
      <div>
        <h2>to to</h2>
        <ul>{todoItems}</ul>
      </div>
      <div>
        <h2>doing</h2>
        <ul>{doingItems}</ul>
      </div>
      <div>
        <h2>done</h2>
        <ul>{doneItems}</ul>
      </div>
    </section>
  );
};
