import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import ForecastDetails from '~/components/ForecastDetails';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#cecece',
  },
});

const Main = () => (
  <>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >

    </MapView>
    <ForecastDetails />
  </>

);

export default Main;
