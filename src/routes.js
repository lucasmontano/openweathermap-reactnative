import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '~/pages/Main';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={Main}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default AppNavigator;
