import './App.css';
import { useState } from 'react';
import { useModal } from './hooks/useModal';
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { Board } from './components/Board';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

const App = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [modal, setModal] = useState(null);

  const handleModalAddTodo = () => {
    setModal('add to do...');
    openModal();
  };

  return (
    <>
      <Title />
      <Button
        styles={'btn add-todo-btn'}
        content={'Add task'}
        handleClick={handleModalAddTodo}
      />
      <Board />
      <Footer />
      <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
        {modal}
      </Modal>
    </>
  );
};

export default App;
