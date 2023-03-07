import React from 'react';

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
  About,
  Acessories,
  Footer,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
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
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid
          illo iste, temporibus vero, facere dolores nam officia pariatur
          quisquam exercitationem amet unde eligendi quasi corporis nesciunt
          delectus, non autem!
        </About>
      </Content>
      <Footer>
        <Button title="Choose rent period" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
