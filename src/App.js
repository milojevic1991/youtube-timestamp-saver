import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import MainInput from './components/MainInput/mainInput';
import LickItemWrapp from './components/LickItemWrapp/lickItemWrapp';
import Player from './components/Player/player';
import { deleteItem, cancelVideo } from './store/actions/action';

function App() {
  const state = useSelector((state) => state.items);

  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    console.log('evp ga', e);
  };
  return (
    <div className="App">
      <MainInput />
      <LickItemWrapp />
      <Player videoData={state} cancelPlayer={() => dispatch(cancelVideo())} />
    </div>
  );
}

export default App;
