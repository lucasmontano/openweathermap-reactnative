import React from 'react';

import {View, StyleSheet} from 'react-native';
import ForecastDetails from '~/components/ForecastDetails';
import ThemeSwitcher from '~/components/ThemeSwitcher';
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
    <ThemeSwitcher />
  </View>
);

export default Main;
