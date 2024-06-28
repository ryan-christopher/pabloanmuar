import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import i18n (needs to be bundled ;))
import './i18n';

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

