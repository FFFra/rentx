import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, TotalCars, HeaderContent } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';
import { Price } from '../../components/Car/styles';

const CarData = {
  brand: 'smth',
  name: 'smth',
  rent: {
    period: 'month',
    price: 123,
  },
  thumbnail: 'http://',
};

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars> 12 cars available</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={CarData} />
    </Container>
  );
}
