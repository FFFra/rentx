import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import Car from '../../components/Car';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { useNavigation } from '@react-navigation/native';
import { LoadAnimated } from '../../components/LoadAnimated';

import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';
import { useTheme } from 'styled-components';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: positionX.value,
        },
        { translateY: positionY.value },
      ],
    };
  });

  const navigation = useNavigation();
  const theme = useTheme();

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },

    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },

    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
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

  useEffect(() => {
    // handle back button from device
    BackHandler.addEventListener('hardwareBackPress', () => true);
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
          {!loading && <TotalCars> {cars.length} cars available</TotalCars>}
        </HeaderContent>
      </Header>

      {loading ? (
        <LoadAnimated />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            { position: 'absolute', bottom: 13, right: 23 },
          ]}
        >
          <ButtonAnimated
            onPress={handleOpenMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
