import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
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
  background-color: #7159c1;
  color: #fff;
`;

export const Body = styled(Animated.View)`
  flex-direction: row;
`;

export const Wind = styled.Text`
  padding: 20px 0 0 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const Temperature = styled.Text`
  padding: 0 0 0 20px;
  margin-top: 70px;
  font-size: 70px;
`;

export const WeatherInfo = styled.Text`
  padding: 0 0 0 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const WeatherInfoContainer = styled.View``;

export const Umidity = styled.Text`
  padding: 0 0 0 20px;
  margin-top: 70px;
  font-size: 20px;
  font-weight: bold;
`;

export const Observations = styled.Text`
  padding: 30px 20px 0 20px;
`;

export const BookmarkButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: #7159c1;
  margin: 30px 20px 0 20px;
  border-radius: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const AnimationContainer = styled.View`
  flex: 1;
  margin: 10px;
`;

export const Bottom = styled.View``;
