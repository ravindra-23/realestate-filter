import React from 'react';
import ReactDOM from 'react-dom/client';
import HouseContextProvider from './ContextApi/houseContext';
// import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HouseContextProvider>
);