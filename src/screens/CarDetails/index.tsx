import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
} from './styles';

export function CarDetails() {
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

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid
          illo iste, temporibus vero, facere dolores nam officia pariatur
          quisquam exercitationem amet unde eligendi quasi corporis nesciunt
          delectus, non autem!
        </About>
      </Content>
    </Container>
  );
}
