import React from 'react';
import { BodyScreen } from '../../styles/backgroundImage';
import { TextRegular } from '../../styles/globalStyles';
import { Container } from './styles';
import { BottomText } from "../../components/TextBottom";
import { InicioMenuTheQuiz } from "../../components/MenuInicialTheQuiz";
import { TheQuizLogo } from "../../components/LogoTheQuiz";

export const Menu: React.FC = () => {
  return (
    <BodyScreen>
      <Container>
        <TheQuizLogo/>
        <InicioMenuTheQuiz/>
        <BottomText/>
      </Container>
    </BodyScreen>
  );
};
