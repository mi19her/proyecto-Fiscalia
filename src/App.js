import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from './components/Login/Login';
import Inicio from './components/Inicio';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Inicio" element={<Inicio/>}/>
    </Routes>
  );
}

export default App;
