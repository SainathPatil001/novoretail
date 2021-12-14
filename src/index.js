import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IsAuthState from "./components/context/isAuthState"


ReactDOM.render(
  <React.StrictMode>
    <IsAuthState>
    <App />
    </IsAuthState>
  </React.StrictMode>,
  document.getElementById('root')
);

