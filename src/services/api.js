import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org',
});

export default api;
