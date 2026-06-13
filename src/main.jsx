/** Application entry point. */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { UIPreferencesProvider } from './context/UIPreferencesContext';
import App from './App';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UIPreferencesProvider><AppProvider><App /></AppProvider></UIPreferencesProvider>
    </BrowserRouter>
  </StrictMode>,
);
