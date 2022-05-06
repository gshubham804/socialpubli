import logo from './logo.svg';
import './App.css';
import Avatar from './Components/Avatar';
import BankAndKyc from './Components/BankAndKyc';
import Editprofilepage from './Components/Editprofilepage';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <>
    <Avatar/>
    <BankAndKyc/>
    <Editprofilepage/>
    </>
  );
}

export default App;
