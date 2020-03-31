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

function factoryResponseData({name, wind, main, weather, geolocation}) {
  return {
    city: name,
    tempMin: main.temp_min,
    tempMax: main.temp_max,
    temperature: main.temp,
    weatherInfo: weather && weather.length ? weather[0].description : '',
    humidity: main.humidity,
    feelsLike: main.feels_like,
    speed: wind.speed,
    pressure: main.pressure,
    geolocation: geolocation,
  };
}

export async function getWeatherByGeolocation({lat, lon}) {
  try {
    const response = await api.get('weather', {
      params: {lat, lon},
    });

    if (response.status !== 200) {
      throw Error('Error request to api');
    }

    const data = factoryResponseData({
      ...response.data,
      geolocation: {lat, lon},
    });

    return data;
  } catch (err) {
    console.warn('[ERROR - API]', err.message);

    return null;
  }
}

export default api;
