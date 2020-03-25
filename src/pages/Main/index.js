import React, {useEffect, useState} from 'react';

import {Container} from './styles';
import ForecastDetails from '~/components/ForecastDetails';

import * as api from '../../services/api';

// MOCK GEOLOCATION
const geolocation = {
  lat: -29.9349425,
  lon: -51.2152553,
};

export default function Main() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    (async function() {
      const weatherResponse = await api.getWeatherByGeolocation(geolocation);

      if (weatherResponse) {
        setWeather(weatherResponse);
      }
    })();
  }, []);

  return (
    <Container>
      <ForecastDetails data={weather} />
    </Container>
  );
}
