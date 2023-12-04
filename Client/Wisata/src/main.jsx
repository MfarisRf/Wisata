import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import axios from 'axios';
axios.defaults.withCredentials = false;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)