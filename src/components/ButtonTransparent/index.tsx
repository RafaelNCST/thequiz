import React, { Dispatch, SetStateAction } from 'react';
import { TextPresentation } from '../../styles/globalStyles';
import { ButtonContainer } from './styles';

interface Props {
  textContent: string;
  actionFunction: Dispatch<SetStateAction<boolean>>;
}

export const ButtonTransparent: React.FC<Props> = ({
  textContent,
  actionFunction,
}) => {
  return (
    <ButtonContainer onPress={() => actionFunction(false)}>
      <TextPresentation>{textContent}</TextPresentation>
    </ButtonContainer>
  );
};
