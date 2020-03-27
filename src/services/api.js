import axios from 'axios';

import {OPEN_WEATHER_MAP_APP_ID} from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

api.interceptors.request.use(config => {
  config.params = config.params || {};

  config.params.APPID = OPEN_WEATHER_MAP_APP_ID;
  config.params.units = config.params.units || 'metric';

  return config;
});

export default api;
