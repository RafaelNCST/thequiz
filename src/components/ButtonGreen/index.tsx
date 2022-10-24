import React, { Dispatch, SetStateAction } from 'react';
import { TextSubTitle } from '../../styles/globalStyles';
import { ButtonContainer } from './styles';

interface Props {
  textContent: string;
  actionFunction: Dispatch<SetStateAction<boolean>>;
}

export const ButtonGreen: React.FC<Props> = ({
  textContent,
  actionFunction,
}) => {
  return (
    <ButtonContainer onPress={() => actionFunction(false)}>
      <TextSubTitle>{textContent}</TextSubTitle>
    </ButtonContainer>
  );
};
