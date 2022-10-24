import React from 'react';
import { BodyScreen } from '../../styles/backgroundImage';
import { TextRegular } from '../../styles/globalStyles';
import { Container } from './styles';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';

export const QuizGame = () => {
  const { theme, time } = useRoute<RouteProp<RootStackParamList>>()?.params;

  return (
    <Container>
      <BodyScreen />
      <TextRegular>{theme}</TextRegular>
      <TextRegular>{time}</TextRegular>
    </Container>
  );
};
