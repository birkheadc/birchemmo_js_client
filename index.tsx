import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './src/App';



const container = document.getElementById('react-root');
if (container != null) {
  const root = createRoot(container);
  root.render(<App />);
}