import { useState } from 'react';
import Modal from '../Modal/Modal';
import EditContact from '../EditContact/EditContact';

import EditIcon from '@mui/icons-material/Edit';
// import { Fab } from '@mui/material';

export default function EditButton({ id, name, number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      
        <EditIcon onClick={openModal} size={36} style={{ color: 'white' }}/>
    
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditContact onClose={closeModal} id={id} name={name} number={number} />
      </Modal>
    </>
  );
}
