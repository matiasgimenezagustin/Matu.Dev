import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Components/MainContent/MainContent';
import Presentation from './Components/Presentation/Presentation';
import Works from './Components/Works/Works';
import EmailForm from './Components/EmailForm/EmailForm';
import Footer from './Components/Foooter/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app" id='body'>
      <Navbar/>
      <MainContent/>
      <Presentation/>
      <Works/>
      <EmailForm/>
      <Footer/>
    </div>
  );
}

export default App;
