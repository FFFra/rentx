import React from 'react';

import { Feather } from '@expo/vector-icons';

import { Acessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  CalendarIcon,
  DataInfo,
  DateTitle,
  DateValue,
  RentalPeriod,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuote,
  RentalPriceTotal,
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails() {
  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete');
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['smth']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lambo</Brand>
            <Name>Random</Name>
          </Description>
          <Rent>
            <Period>Daily</Period>
            <Price>$098213</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380km/h" icon={SpeedSvg} />
          <Acessory name="380km/h" icon={SpeedSvg} />
          <Acessory name="380km/h" icon={SpeedSvg} />
          <Acessory name="380km/h" icon={SpeedSvg} />
          <Acessory name="380km/h" icon={SpeedSvg} />
          <Acessory name="380km/h" icon={SpeedSvg} />
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DataInfo>
            <DateTitle>From</DateTitle>
            <DateValue>18/03/2023</DateValue>
          </DataInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DataInfo>
            <DateTitle>To</DateTitle>
            <DateValue>20/03/2023</DateValue>
          </DataInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Rental Price</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuote>$580 3x daily</RentalPriceQuote>
            <RentalPriceTotal>$2900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Rent now"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
