import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 10px;
  height: 100%;
  width: 100%;
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
  flex-direction: column;
  padding: 25px;
`;

export const Wind = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const WeatherInfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 70px 0;
`;

export const DescriptionContainer = styled.View`
  margin-right: 20px;
`;

export const Temperature = styled.Text`
  font-size: 70px;
`;

export const WeatherInfo = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Humidity = styled.View`
  margin-top: 30px;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  flex-direction: row;
`;

export const AnimationContainer = styled.View`
  flex: 1;
`;

export const Observations = styled.Text`
  font-size: 18px;
`;

export const BookmarkButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: #7159c1;
  border-radius: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const Bottom = styled.View`
  margin-top: auto;
  padding: 20px;
`;
