import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text>Hello World!</Text>
  </View>
);

export default Main;
