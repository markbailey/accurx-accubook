import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { StoreProvider } from './context/store';
import App from './App';
import './assets/stylesheets/global.scss';

const element = document.getElementById('root') as HTMLElement;
const root = createRoot(element);

root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
