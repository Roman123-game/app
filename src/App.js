import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Table from './pages/Table';
import Charts from './pages/Charts';

function App() {
  return (
    
  <BrowserRouter>
  <Routes>
<Route element={<Table/>} path=""/>
<Route element={<Charts/>} path="/charts"/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
