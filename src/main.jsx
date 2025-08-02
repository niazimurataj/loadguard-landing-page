import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './data/aws-exports';

Amplify.configure(awsConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
