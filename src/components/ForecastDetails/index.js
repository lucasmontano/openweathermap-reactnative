import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import {
  Card,
  Header,
  Body,
  Wind,
  Temperature,
  WeatherInfo,
  Umidity,
  Observations,
  BookmarkButton,
  ButtonText,
} from './styles';

export default function ForecastDetails({data = {}}) {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = event.nativeEvent;
      let opened = false;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 500 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 500 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}>
      <Card
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-300, 0, 500],
                outputRange: [-30, 0, 620],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Header
          style={{
            opacity: translateY.interpolate({
              inputRange: [0, 400],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}>
          {data.city}
        </Header>
        <Body
          style={{
            opacity: translateY.interpolate({
              inputRange: [0, 400],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}>
          <Wind>{`M ${data.tempMax || 0}º / L ${data.tempMin || 0}º`}</Wind>
          <Temperature>{`${data.temperature || 0}º`}</Temperature>
          <WeatherInfo>{data.weatherInfo || ''}</WeatherInfo>
          <Umidity>{data.humidity || 0} %</Umidity>
          <Observations>
            {`Right now is ${data.temperature || 0}ºC and feels like` +
              ` ${data.feelsLike || 0}ºC outside. The wind` +
              `is blowing around ${data.speed || 0} km/h and` +
              `the pressure is ${data.pressure || 0} hPa.`}
          </Observations>
          <BookmarkButton>
            <ButtonText>Bookmark this location</ButtonText>
          </BookmarkButton>
        </Body>
      </Card>
    </PanGestureHandler>
  );
}
