import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div id='login-nav'>

      <button className="loginmodal-button"onClick={() => setShowModal(true)}>
        <strong>Sign In</strong>
        <span>for FREE Shipping 🚚</span>
      </button>
    </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm closeLogin={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;

