import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW4tc2VjbyIsImEiOiJjbHV6enFjaDcxZm40MmpsbHZiM2N2cmgyIn0.7zWMRB6BZFp_qAnRHc6O9Q';

if (!navigator.geolocation) {
  alert('Tu navegador no soporta geolocalizacion');
  throw new Error('Tu navegador no soporta geolocalizacion');
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp/>
  </React.StrictMode>
);

