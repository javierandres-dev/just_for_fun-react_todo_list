import { useState } from 'react';

export const useModal = (isOpen) => {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  return [isOpenModal, openModal, closeModal];
};
