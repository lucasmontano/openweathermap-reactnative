import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import LottieView from 'lottie-react-native';
import LottieAnimationJson from '~/assets/lottie-animations/sunny.json';

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
  WeatherInfoContainer,
  AnimationContainer,
  Bottom,
} from './styles';

export default function ForecastDetails() {
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
          Vreeland
        </Header>
        <Body
          style={{
            opacity: translateY.interpolate({
              inputRange: [0, 400],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}>
          <WeatherInfoContainer>
            <Wind>M7º / L5º</Wind>
            <Temperature>5º</Temperature>
            <WeatherInfo>Light rain</WeatherInfo>
            <Umidity>87 %</Umidity>
          </WeatherInfoContainer>
          <AnimationContainer>
            <LottieView source={LottieAnimationJson} autoPlay loop />
          </AnimationContainer>
        </Body>
        <Bottom>
          <Observations>
            Right now is 5ºC and feels like -1ºC outside. The wind is blowing
            around 8.7 km/h and the pressure is 1009 hPa.
          </Observations>
          <BookmarkButton>
            <ButtonText>Bookmark this location</ButtonText>
          </BookmarkButton>
        </Bottom>
      </Card>
    </PanGestureHandler>
  );
}
