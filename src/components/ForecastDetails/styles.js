import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(Animated.View)`
  flex: 1;
  background: ${props => props.theme.primary.background};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100%;
  margin: 30px 20px;
  width: 90%;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
`;

export const Header = styled(Animated.Text)`
  font-size: 30px;
  font-weight: bold;
  padding: 10px 10px 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${props => props.theme.secondary.background};
  color: ${props => props.theme.secondary.fontColor};
`;

export const Body = styled(Animated.View)`
  flex-direction: row;
`;

export const Wind = styled.Text`
  padding: 20px 0 0 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.primary.fontColor};
`;

export const Temperature = styled.Text`
  padding: 0 0 0 20px;
  margin-top: 70px;
  font-size: 70px;
  color: ${props => props.theme.primary.fontColor};
`;

export const WeatherInfo = styled.Text`
  padding: 0 0 0 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.primary.fontColor};
`;

export const WeatherInfoContainer = styled.View``;

export const Umidity = styled.Text`
  padding: 0 0 0 20px;
  margin-top: 70px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.primary.fontColor};
`;

export const Observations = styled.Text`
  padding: 30px 20px 0 20px;
  color: ${props => props.theme.primary.fontColor};
`;

export const BookmarkButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${props => props.theme.secondary.background};
  margin: 30px 20px 0 20px;
  border-radius: 10px;
  align-items: center;
  color: ${props => props.theme.secondary.fontColor};
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.secondary.fontColor};
  font-weight: bold;
`;

export const AnimationContainer = styled.View`
  flex: 1;
  margin: 10px;
`;

export const Bottom = styled.View``;
