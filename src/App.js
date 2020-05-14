import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainInput from './components/MainInput/mainInput';
import LickItemWrapp from './components/LickItemWrapp/lickItemWrapp';

function App() {
  return (
    <div className="App">
      <MainInput />
      <LickItemWrapp />
    </div>
  );
}

export default App;
