import React from 'react';
import { Link } from 'react-router-dom';
import BackBtn from '../../buttons/BackBtn/BackBtn';
import './PrivacyPolicyScreen.css';

function PrivacyPolicyScreen() {
  return (
    <div className="privacy-container">

      <Link to="/">
        <BackBtn className="BackBtn"/>
      </Link>

    </div>
  );
}

export default PrivacyPolicyScreen;