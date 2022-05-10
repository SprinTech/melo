import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

// require('dotenv').config();

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab="home" />);