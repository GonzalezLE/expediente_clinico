import React from 'react';
import { Navbar } from './components/Navbar';
import {Menu} from './components/Menu';
import {Contenido} from './components/Contenido';
import { Foother } from './components/Foother';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Menu/>
      <Contenido/>
      <Foother/>

    </>
    );
}

export default App;
