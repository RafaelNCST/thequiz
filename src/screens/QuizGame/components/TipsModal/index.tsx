import React, { Dispatch, SetStateAction } from 'react';
import {
  TextPresentation,
  TextPresentationDica,
} from '../../../../styles/globalStyles';
import {
  BodyModal,
  Content,
  TipsContent,
  Pin,
  ContainerPin,
  ContainerPinTips,
} from '../../../../styles/stylesModal';
import { ContentButtons } from './styles';
import { ButtonTransparent } from '../../../../components/ButtonTransparent';

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const TipsModal: React.FC<Props> = ({ setModal }) => {
  const handlerActionBack = () => {
    setModal(false);
  };

  return (
    <BodyModal>
      <TipsContent height={'25%'}>
        <ContainerPinTips>
          <Pin />
          <Pin />
        </ContainerPinTips>
        <ContentButtons>
          <TextPresentation>A dica é:</TextPresentation>
          <TextPresentationDica>Diagrama</TextPresentationDica>
          <ButtonTransparent
            textContent="Continuar"
            actionFunction={handlerActionBack}
          />
        </ContentButtons>
        <ContainerPinTips>
          <Pin />
          <Pin />
        </ContainerPinTips>
      </TipsContent>
    </BodyModal>
  );
};
