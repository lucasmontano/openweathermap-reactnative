import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  tron.clear();

  // eslint-disable-next-line no-console
  console.tron = tron;
}
