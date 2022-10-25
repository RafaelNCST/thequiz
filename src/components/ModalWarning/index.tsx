import React, { Dispatch, SetStateAction } from 'react';
import { TextPresentation, TextTitle } from '../../styles/globalStyles';
import {
  BodyModal,
  Pin,
  ContainerPin,
  Content,
} from '../../styles/stylesModal';
import { ContainerButtons, ContainerItens, TextWarning } from './styles';
import { ButtonGreen } from '../ButtonGreen';
import { ButtonRed } from '../ButtonRed';

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>;
  actionSecondButton: () => void;
}

export const ModalWarning: React.FC<Props> = ({
  setModal,
  actionSecondButton,
}) => {
  return (
    <BodyModal>
      <Content height={'50%'}>
        <ContainerPin>
          <Pin />
          <Pin />
        </ContainerPin>
        <ContainerItens>
          <TextTitle>ATENÇÃO</TextTitle>
          <TextPresentation>VOCÊ DESEJA RETORNAR AO MENU?</TextPresentation>
          <TextWarning>(VOCÊ PERDERÁ TODO SEU PROGRESSO)</TextWarning>
          <ContainerButtons>
            <ButtonGreen
              textContent="CANCELAR"
              actionFunction={() => setModal(false)}
            />
            <ButtonRed
              textContent="VOLTAR"
              actionFunction={actionSecondButton}
            />
          </ContainerButtons>
        </ContainerItens>
        <ContainerPin>
          <Pin />
          <Pin />
        </ContainerPin>
      </Content>
    </BodyModal>
  );
};
