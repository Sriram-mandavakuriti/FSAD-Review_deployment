import React from 'react';
import { Toaster } from "react-hot-toast";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WebinarProvider } from "./context/WebinarContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WebinarProvider>
      <App />
      <Toaster position="top-right" />
    </WebinarProvider>
  </React.StrictMode>
);

reportWebVitals();