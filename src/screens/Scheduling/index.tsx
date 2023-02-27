import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateValue,
  DateTitle,
  DateBorder,
  Content,
  Footer,
} from './styles';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>Lorem ipsum, dolor sit amet</Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>FROM</DateTitle>
            <DateBorder selected={false}>
              <DateValue>9879831</DateValue>
            </DateBorder>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>TO</DateTitle>
            <DateBorder selected={false}>
              <DateValue>9879831</DateValue>
            </DateBorder>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="confirm" />
      </Footer>
    </Container>
  );
}
