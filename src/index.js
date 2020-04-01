import React, {useState, useEffect, useCallback} from 'react';

import {ThemeProvider} from 'styled-components/native';

import '~/config/ReactotronConfig';

import AsyncStorage from '@react-native-community/async-storage';

import {light, dark} from '~/theme';
import Routes from '~/routes';

const App = () => {
  const [theme, setTheme] = useState('ligth');

  useEffect(() => {
    async function loadStoredTheme() {
      const storedTheme = await AsyncStorage.getItem('@theme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
    loadStoredTheme();
  }, []);

  useEffect(() => {
    async function storeTheme() {
      await AsyncStorage.setItem('@theme', theme);
    }
    storeTheme();
  }, [theme]);

  const toogleTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('ligth');
    } else {
      setTheme('dark');
    }
  }, [theme]);

  return (
    <ThemeProvider
      theme={{
        toogleTheme,
        themeName: theme,
        ...(theme === 'dark' ? dark : light),
      }}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
