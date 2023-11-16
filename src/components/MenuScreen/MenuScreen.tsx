import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StartBtn from '../../buttons/StartBtn/StartBtn';
import PrivacyPolicyBtn from '../../buttons/PrivacyPolicyBtn/PrivacyPolicyBtn';
import SkinChangeBtn from '../../buttons/SkinChangeBtn/SkinChangeBtn';
import BestScoreBtn from '../../buttons/BestScoreBtn/BestScoreBtn';
import VolumeBtn from '../../buttons/VolumeBtn/VolumeBtn';
import ModalScore from '../../modals/ModalScore/ModalScore'
import './MenuScreen.css';

function MenuScreen() {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="menu-container">
    
      <VolumeBtn className="VolumeBtn" />

      <BestScoreBtn onClick={() => handleOpenModal()} className="BestScoreBtn" />


      <ModalScore isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Best score</h2>
        <p>999</p>
      </ModalScore>

      <Link to="/game">
      <StartBtn className="StartBtn"/>
      </Link>

      <SkinChangeBtn className="SkinChangeBtn"/>

      <Link to="/privacy">
        <PrivacyPolicyBtn className="PrivacyPolicyBtn"/>
      </Link>

    </div>
  );
}

export default MenuScreen;
