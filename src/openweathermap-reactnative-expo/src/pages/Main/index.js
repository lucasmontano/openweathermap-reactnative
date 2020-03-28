import React from 'react';

import {View, StyleSheet} from 'react-native';
import ForecastDetails from '../../components/ForecastDetails';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#cecece',
  },
});

const Main = () => (
  <View style={styles.container}>
    <ForecastDetails />
  </View>
);

export default Main;
