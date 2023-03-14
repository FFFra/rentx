import React from 'react';
import loadingCar from '../../assets/loadingCar.json';

import LottieView from 'lottie-react-native';

import { Container } from './styles';

export function LoadAnimated() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        loop
        style={{ height: 200 }}
        resizeMode={'contain'}
      />
    </Container>
  );
}
