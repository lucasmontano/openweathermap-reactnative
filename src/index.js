import React, {useState, useEffect, useCallback} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {ThemeProvider} from 'styled-components/native';

import '~/config/ReactotronConfig';

import AsyncStorageEnum from '~/enums/AsyncStorageEnum';
import {light, dark} from '~/theme';
import Routes from '~/routes';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    async function loadStoredTheme() {
      const storedTheme = await AsyncStorage.getItem(AsyncStorageEnum.THEME);
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
    loadStoredTheme();
  }, []);

  useEffect(() => {
    async function storeTheme() {
      await AsyncStorage.setItem(AsyncStorageEnum.THEME, theme);
    }
    storeTheme();
  }, [theme]);

  const toogleTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light');
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
