import React, {useContext} from 'react';

import {Container} from './styles';
import {ThemeContext} from 'styled-components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ThemeSwitcher() {
  const {toogleTheme, themeName} = useContext(ThemeContext);
  return (
    <Container onPress={toogleTheme}>
      <Icon
        name={themeName === 'dark' ? 'brightness-2' : 'brightness-6'}
        size={32}
      />
    </Container>
  );
}
