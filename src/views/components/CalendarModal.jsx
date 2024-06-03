import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root'); // Defina o elemento raiz para acessibilidade

const CalendarModal = ({ isOpen, onRequestClose, onSave }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSave = () => {
    onSave(selectedDate); // Chame a função de salvamento passada como prop
    onRequestClose(); // Feche o modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>Selecione uma Data</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
        />
        <button onClick={handleSave} className="close-button">Save</button>
      </div>
    </Modal>
  );
};

export default CalendarModal;
