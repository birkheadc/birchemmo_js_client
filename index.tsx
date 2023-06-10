import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import DEV_CONFIG from './src/config/config.dev';
import App from './src/components/app/App';

const container = document.getElementById('react-root');
if (container != null) {
  const root = createRoot(container);
  root.render(<App config={DEV_CONFIG} />);
}