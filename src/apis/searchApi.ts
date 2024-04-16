import axios from "axios";

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: "es",
    access_token: "pk.eyJ1IjoicnViZW4tc2VjbyIsImEiOiJjbHV6enFjaDcxZm40MmpsbHZiM2N2cmgyIn0.7zWMRB6BZFp_qAnRHc6O9Q",
  }
});

export default searchApi;