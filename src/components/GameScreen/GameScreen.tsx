import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MenuBtn from '../../buttons/MenuBtn/MenuBtn';
import ModalScore from '../../modals/ModalScore/ModalScore';
import ScoreDisplay from '../../game/inGameScore/inGameScore';
import './GameScreen.css';

function GameScreen() {
  const navigate = useNavigate(); 
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentUserScore] = useState(0);
  const [bestUserScore] = useState(0);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleYesClick = () => {
    handleCloseModal(); 
    navigate('/'); 
  };

  return (
    <div className="game-container">
      <ScoreDisplay className='current-score' score={currentUserScore} />
      <ScoreDisplay className='best-score' label="Best Score" score={bestUserScore} />

      <ModalScore isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className='modal-menu-title'>Exit to menu?</h2>
        <div className='menubtns-container'>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleCloseModal}>No</button>
        </div>
      </ModalScore>

      <MenuBtn onClick={() => handleOpenModal()} className="MenuBtn" />
    </div>
  );
}

export default GameScreen;
