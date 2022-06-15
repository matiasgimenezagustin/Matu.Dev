import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextLengProvider from './Context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ContextLengProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextLengProvider>
  </React.StrictMode>
);


