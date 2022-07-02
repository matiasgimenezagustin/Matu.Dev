import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Components/MainContent/MainContent';
import Presentation from './Components/Presentation/Presentation';
import Works from './Components/Works/Works';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app" id='body'>
      <Navbar/>
      <MainContent/>
      <Presentation/>
      <Works/>
    </div>
  );
}

export default App;
