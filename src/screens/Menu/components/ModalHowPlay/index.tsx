import React, { Dispatch, SetStateAction } from 'react';
import { TextPresentation } from '../../../../styles/globalStyles';
import {
  BodyModal,
  Content,
  Pin,
  ContainerPin,
} from '../../../../styles/stylesModal';
import { ButtonGreen } from '../../../../components/ButtonGreen';

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalHowPlay: React.FC<Props> = ({ setOpen }) => {
  return (
    <BodyModal>
      <Content height={'70%'}>
        <ContainerPin>
          <Pin />
          <Pin />
        </ContainerPin>
        <TextPresentation>
          SERÃO FEITAS 10 PERGUNTAS, ACERTE O MÁXIMO POSSIVEL ANTES DO TEMPO OU
          SEUS CORAÇÕES ACABAREM.
        </TextPresentation>
        <TextPresentation>
          CASO ESTEJA ENCUCADO COM O SIGNIFICADO OU PALAVRA, TERÁ A CHANCE DE
          PEDIR 3 DIcAS (POR PARTIDA).
        </TextPresentation>
        <TextPresentation>
          VOCÊ COMEÇA COM 3 CORAÇÕES NO INÍCIO DE CADA PARTIDA, E A CADA ESCOLHA
          ERRADA, SERÁ PERDIDO UM CORAÇÃO, CASO PERCA TODOS, VOCÊ PERDERÁ A
          PARTIDA
        </TextPresentation>
        <ContainerPin>
          <Pin />
          <ButtonGreen textContent={'Ok'} actionFunction={setOpen} />
          <Pin />
        </ContainerPin>
      </Content>
    </BodyModal>
  );
};
