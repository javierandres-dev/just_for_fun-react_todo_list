import './App.css';
import { useEffect, useReducer, useState } from 'react';
import { TodosContext } from './contexts/TodosContext';
import { initialTodo, todoReducer } from './reducers/todoReducer';
import { initialTodos, todosReducer } from './reducers/todosReducer';
import { useModal } from './hooks/useModal';
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { Board } from './components/Board';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { Form } from './components/Form';

const App = () => {
  const [todo, dispatchTodo] = useReducer(todoReducer, initialTodo);
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('To-do list')) console.log('previous list...');
  }, []);

  useEffect(() => {
    console.log('todo:', todo);
    console.log('todos:', todos);
  }, [todo, todos]);

  const handleModalAddTodo = () => {
    setModal(<Form openModal={openModal} closeModal={closeModal} />);
  };

  return (
    <TodosContext.Provider value={[todo, dispatchTodo, todos, dispatchTodos]}>
      <Title />
      <Button
        type='button'
        styles={'btn add-todo-btn'}
        content={'Add task'}
        handleClick={handleModalAddTodo}
      />
      <Board />
      <Footer />
      <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
        {modal}
      </Modal>
    </TodosContext.Provider>
  );
};

export default App;
