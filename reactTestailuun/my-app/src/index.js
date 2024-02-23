import React from 'react';
import { createRoot } from 'react-dom'; // Importing createRoot from react-dom
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')); // Creating a root for Concurrent Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
