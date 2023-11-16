import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuScreen from './components/MenuScreen/MenuScreen';
import GameScreen from './components/GameScreen/GameScreen';
import PrivacyPolicyScreen from './components/PrivacyPolicyScreen/PrivacyPolicyScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MenuScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/privacy" element={<PrivacyPolicyScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
