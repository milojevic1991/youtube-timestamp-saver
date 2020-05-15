import React from 'react';

import './App.css';
import MainInput from './components/MainInput/mainInput';
import LickItemWrapp from './components/LickItemWrapp/lickItemWrapp';
import { deleteItem } from './store/actions/action';

function App() {
  const deleteHandler = (e) => {
    console.log('evp ga', e);
  };
  return (
    <div className="App">
      <MainInput />
      <LickItemWrapp />
    </div>
  );
}

export default App;
