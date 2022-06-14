import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Components/MainContent/MainContent';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app" id='body'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainContent/>} />
      </Routes>
    </div>
  );
}

export default App;
