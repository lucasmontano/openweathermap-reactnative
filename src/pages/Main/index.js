import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Container} from './styles';
import MapView, {Marker} from 'react-native-maps';
import RNLocation from 'react-native-location';


import ForecastDetails from '~/components/ForecastDetails';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function Main() {
  const [markers, setmarkers] = useState([]);
  const [showCenterPoint, setShowCenterPoint] = useState(true);
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    // TODO: get data from API and show callout
  }, [currentRegion, markers]);

  useEffect(() => {
    async function loadInitialPosition() {
      const granted = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
        },
      });

      if (granted) {
        RNLocation.subscribeToLocationUpdates(locations => {
          if (locations.length > 0) {
            const {latitude, longitude} = locations[0];
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

  function handleOnRegionChangeComplete(event) {
    setShowCenterPoint(false);
    setmarkers([event]);
  }

  function handleOnRegionChange(event) {
    setShowCenterPoint(true);
    setmarkers([]);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <MapView
          style={styles.map}
          onRegionChangeComplete={handleOnRegionChangeComplete}
          initialRegion={currentRegion}
          onTouchStart={handleOnRegionChange}>
          {markers.map((marker, key) => (
            <Marker
              key={key + 1}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
            />
          ))}
        </MapView>
        {showCenterPoint && (
          <Icon name="location-searching" size={30} color="#000" />
        )}
        <ForecastDetails />
      </Container>
    </SafeAreaView>
  );
}
