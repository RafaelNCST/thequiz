import React from 'react';
import { BodyScreen } from '../../styles/backgroundImage';
import { TextRegular } from '../../styles/globalStyles';
import { Container } from './styles';
import { BottomText } from "../../components/TextBottom";

export const Menu: React.FC = () => {
  return (
    <BodyScreen>
      <Container>
        <BottomText/>
      </Container>
    </BodyScreen>
  );
};
