import React, { useState } from 'react';
import { BodyScreen } from '../../styles/backgroundImage';
import { TextRegular, TextSubTitle } from '../../styles/globalStyles';
import {
  Container,
  ContainerTitle,
  ContainerUtils,
  TitleBar,
  Tips,
} from './styles';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import { ContainerLifes } from './components/ContainerLifes';
import { ContainerBoardChoices } from './components/ContainerBoardChoices';
import { ContainerMainQuestion } from './components/ContainerMainQuestion';
import { Marker } from './components/Marker';

export const QuizGame = () => {
  const textContent: string =
    'O batata é um cara muito bobão, ele gosta do gordinho, mas o gordinho não sabe, e agora o que batata fará.';

  const { theme, time } =
    useRoute<RouteProp<RootStackParamList>>()?.params || {};

  const [endRound, setEndRound] = useState<boolean>(false);

  return (
    <Container>
      <BodyScreen />
      <ContainerTitle>
        <TitleBar>
          <TextRegular>Tema</TextRegular>
          <TextSubTitle>{theme}</TextSubTitle>
        </TitleBar>
      </ContainerTitle>
      <ContainerUtils>
        <Marker time={time} />

        <ContainerLifes />

        <Tips>
          <TextRegular>DICA</TextRegular>
        </Tips>
      </ContainerUtils>
      <ContainerMainQuestion textContent={textContent} />

      <ContainerBoardChoices endRound={endRound} />
    </Container>
  );
};
