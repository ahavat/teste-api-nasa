import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=3XIaMWfxniNXrKU4El6uSRkb5OWWtfULUo6sBBhI'
})

export default api;
