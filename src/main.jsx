import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { triggerOneTimeChunkReload } from './utils/chunkRecovery';

// Recover seamlessly if a user has an old tab open right after a new deployment
window.addEventListener('vite:preloadError', (event) => {
  if (triggerOneTimeChunkReload()) {
    event.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
