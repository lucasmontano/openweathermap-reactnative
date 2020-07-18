import React, { useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';
import RNLocation from 'react-native-location';
import ForecastDetails from '~/components/ForecastDetails';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#cecece',
  },
});

const Main = () => {
  const [currentRegion, setCurrentRegion] = useState({
    latitude: null,
    longitude: null,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  useEffect(() => {
    async function loadInitialPosition() {
      const granted = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
        },
      });

      if (granted) {
        RNLocation.subscribeToLocationUpdates((locations) => {
          if (locations.length > 0) {
            const { latitude, longitude } = locations[0];
            setCurrentRegion({
              latitude,
              longitude,
              latitudeDelta: 1,
              longitudeDelta: 1,
            });
          }
        });
      }
    }

    loadInitialPosition();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {currentRegion.latitude && (
        <MapView
          initialRegion={currentRegion}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
      )}
      <ForecastDetails />
    </SafeAreaView>
  );
};

export default Main;
