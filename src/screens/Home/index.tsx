import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { useNavigation } from '@react-navigation/native';
import { Load } from '../../components/Load';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </Container>
  );
}
