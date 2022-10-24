import React, { Dispatch, SetStateAction } from 'react';
import { TextSubTitle } from '../../../../styles/globalStyles';
import { BodyModal, Content, Pin, ContainerPin } from './styles';
import { ButtonGreen } from '../../../../components/ButtonGreen';

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalHowPlay: React.FC<Props> = ({ setOpen }) => {
  return (
    <BodyModal>
      <Content>
        <ContainerPin>
          <Pin />
          <Pin />
        </ContainerPin>
        <TextSubTitle>
          SERÃO FEITAS 10 PERGUNTAS, ACERTE O MÁXIMO POSSIVEL ANTES DO TEMPO OU
          SEUS CORAÇÕES ACABAREM.
        </TextSubTitle>
        <TextSubTitle>
          CASO ESTEJA ENCUCADO COM O SIGNIFICADO OU PALAVRA, TERÁ A CHANCE DE
          PEDIR 3 DIcAS (POR PARTIDA).
        </TextSubTitle>
        <TextSubTitle>
          VOCÊ COMEÇA COM 3 CORAÇÕES NO INÍCIO DE CADA PARTIDA, E A CADA ESCOLHA
          ERRADA, SERÁ PERDIDO UM CORAÇÃO, CASO PERCA TODOS, VOCÊ PERDERÁ A
          PARTIDA
        </TextSubTitle>
        <ContainerPin>
          <Pin />
          <ButtonGreen textContent={'Ok'} actionFunction={setOpen} />
          <Pin />
        </ContainerPin>
      </Content>
    </BodyModal>
  );
};
