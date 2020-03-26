import React, {useState} from 'react';
import {
  Container,
  Week,
  Day,
  WeekDayContainer,
  DayContainer,
  TemperatureContainer,
  MaxTemperature,
  MinTemperature,
  RainContainer,
  Title,
  Description,
  HumidtyContainer,
  ConteinerIcon,
  ContainerDescription,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function WeekDay() {
  const [dados] = useState([
    {
      id: 1,
      icon: 'weather-cloudy',
      day: 'Monday',
      maxTemperature: '30º',
      minTemperature: '27º',
      rain: '46%',
      humidty: '74%',
    },
    {
      id: 2,
      icon: 'weather-sunny',
      day: 'Tuesday',
      maxTemperature: '35º',
      minTemperature: '30º',
      rain: '46%',
      humidty: '74%',
    },
    {
      id: 3,
      icon: 'weather-lightning',
      day: 'Wednesday',
      maxTemperature: '25º',
      minTemperature: '20º',
      rain: '46%',
      humidty: '74%',
    },
    {
      id: 4,
      icon: 'weather-lightning',
      day: 'Thursday',
      maxTemperature: '30º',
      minTemperature: '27º',
      rain: '46%',
      humidty: '74%',
    },
    {
      id: 5,
      icon: 'weather-sunny',
      day: 'Friday',
      maxTemperature: '25º',
      minTemperature: '20º',
      rain: '46%',
      humidty: '74%',
    },
    {
      id: 6,
      icon: 'weather-sunny',
      day: 'Saturday',
      maxTemperature: '30º',
      minTemperature: '27º',
      rain: '46%',
      humidty: '74%',
    },
    {
      id: 7,
      icon: 'weather-lightning',
      day: 'Sunday',
      maxTemperature: '17º',
      minTemperature: '15º',
      rain: '46%',
      humidty: '74%',
    },
  ]);
  return (
    <Container>
      {dados.map(item => (
        <Week key={item.id}>
          <ConteinerIcon>
            <Icon name={item.icon} size={25} color="#aaacb0" />
            <WeekDayContainer>
              <DayContainer>
                <Day>{item.day}</Day>
                <TemperatureContainer>
                  <MaxTemperature>{item.maxTemperature}</MaxTemperature>
                  <MinTemperature>{item.minTemperature}</MinTemperature>
                </TemperatureContainer>
              </DayContainer>
            </WeekDayContainer>
          </ConteinerIcon>
          <ContainerDescription>
            <RainContainer>
              <Title>Rain</Title>
              <Description>{item.rain}</Description>
            </RainContainer>
            <HumidtyContainer>
              <Title>Humidty</Title>
              <Description>{item.humidty}</Description>
            </HumidtyContainer>
          </ContainerDescription>
        </Week>
      ))}
    </Container>
  );
}
