import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Table from './pages/Table';
import Charts from './pages/Charts';
import {useState} from "react";
import MainContext from "../src/Context/MainContext";

function App() {
 const [showBitcoin, setShowBitcoin]=  useState(false);
 const [showEtherium, setShowEtherium]=  useState(false);
 const [showTheter, setShowTheter]=  useState(false);

  return (

    <MainContext.Provider
          value={{
            showBitcoin, setShowBitcoin,
            showEtherium, setShowEtherium,
            showTheter, setShowTheter

          }}
        >
  <BrowserRouter>

  <Routes>
<Route element={<Table/>} path=""/>
<Route element={<Charts/>} path="/charts"/>
  </Routes>
  </BrowserRouter>
  </MainContext.Provider>
  );
}

export default App;
