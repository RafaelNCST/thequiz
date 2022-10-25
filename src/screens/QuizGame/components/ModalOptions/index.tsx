import React, { Dispatch, SetStateAction } from 'react';
import {
  BodyModal,
  Content,
  Pin,
  ContainerPin,
} from '../../../../styles/stylesModal';
import { SoundArea, ContainerImage, ContentButtons } from './styles';
import Logo from '../../../../assets/images/logo.svg';
import { ButtonTransparent } from '../../../../components/ButtonTransparent';
import { TextSubTitle } from '../../../../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalOptions: React.FC<Props> = ({ setModal }) => {
  const handlerActionBack = () => {
    setModal(false);
  };

  return (
    <BodyModal>
      <Content height={'50%'}>
        <ContainerPin>
          <Pin />
          <Pin />
        </ContainerPin>
        <ContainerImage>
          <Logo width={150} height={150} />
        </ContainerImage>
        <ContentButtons>
          <ButtonTransparent
            textContent="VOLTAR"
            actionFunction={handlerActionBack}
          />
          <ButtonTransparent
            textContent="MENU"
            actionFunction={() => console.log('rusbé')}
          />
          <SoundArea>
            <TextSubTitle>ON</TextSubTitle>
            <Icon name="volume-up" color="#000" size={40} />
          </SoundArea>
        </ContentButtons>
        <ContainerPin>
          <Pin />
          <Pin />
        </ContainerPin>
      </Content>
    </BodyModal>
  );
};
