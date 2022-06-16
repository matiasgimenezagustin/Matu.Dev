import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Components/MainContent/MainContent';
import Presentation from './Components/Presentation/Presentation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app" id='body'>
      <Navbar/>
      <MainContent/>
      <Presentation/>
    </div>
  );
}

export default App;
