import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // if you have global CSS, optional

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
