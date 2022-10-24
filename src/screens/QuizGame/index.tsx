import React from 'react';
import { BodyScreen } from '../../styles/backgroundImage';
import {
  TextRegular,
  TextSubTitle,
  Image,
  TextButton,
} from '../../styles/globalStyles';
import {
  Container,
  ContainerTitle,
  ContainerUtils,
  ContainerMain,
  ContainerOptions,
  TitleBar,
  ContainerText,
  TextMain,
  Option,
} from './styles';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';

const DATA = ['GANTT', 'GUSTAVO', 'GRANTT', 'GANT'];

export const QuizGame = () => {
  const { theme, time } =
    useRoute<RouteProp<RootStackParamList>>()?.params || {};

  return (
    <Container>
      <BodyScreen />
      <ContainerTitle>
        <TitleBar>
          <TextRegular>Tema</TextRegular>
          <TextSubTitle>{theme}</TextSubTitle>
        </TitleBar>
      </ContainerTitle>
      <ContainerUtils></ContainerUtils>
      <ContainerMain>
        <Image
          source={require('../../assets/images/paper.png')}
          width={'100%'}
          height={'200px'}
        />
        <ContainerText>
          <TextMain>
            O batata é um cara muito bobão, ele gosta do gordinho, mas o
            gordinho não sabe, e agora o que batata fará.
          </TextMain>
        </ContainerText>
      </ContainerMain>
      <ContainerOptions>
        {DATA.map((item, index) => {
          return (
            <Option key={index}>
              <TextSubTitle>{item}</TextSubTitle>
            </Option>
          );
        })}
      </ContainerOptions>
    </Container>
  );
};
