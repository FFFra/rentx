import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, TotalCars, HeaderContent } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

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
    </Container>
  );
}
