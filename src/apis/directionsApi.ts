import axios from "axios";

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: "pk.eyJ1IjoicnViZW4tc2VjbyIsImEiOiJjbHV6enFjaDcxZm40MmpsbHZiM2N2cmgyIn0.7zWMRB6BZFp_qAnRHc6O9Q",
  }
});

export default directionsApi;