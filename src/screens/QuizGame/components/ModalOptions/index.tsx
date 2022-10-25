import React, { useState, Dispatch, SetStateAction } from 'react';
import {
  BodyModal,
  Content,
  Pin,
  ContainerPin,
} from '../../../../styles/stylesModal';
import { Modal } from 'react-native';
import {
  SoundArea,
  ContainerImage,
  ContentButtons,
  IconButton,
  TextSound,
} from './styles';
import Logo from '../../../../assets/images/logo.svg';
import { ButtonTransparent } from '../../../../components/ButtonTransparent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../routes/types';
import { ModalWarning } from '../../../../components/ModalWarning';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const ModalOptions: React.FC<Props> = ({ setModal }) => {
  const [sound, setSound] = useState<boolean>(true);
  const [showModalWarning, setShowModalWarning] = useState<boolean>(false);

  const { reset } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlerActionBack = () => {
    setModal(false);
  };

  const handlerBackMenu = () => {
    reset({
      index: 0,
      routes: [{ name: 'MenuScreen' }],
    });
  };

  const handleSound = () => {
    setSound(prev => !prev);
  };

  const handlerModalWarning = () => {
    setShowModalWarning(true);
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
            actionFunction={handlerModalWarning}
          />

          <Modal visible={showModalWarning} animationType="fade" transparent>
            <ModalWarning
              setModal={setShowModalWarning}
              actionSecondButton={handlerBackMenu}
            />
          </Modal>

          <SoundArea>
            <TextSound sound={sound}>{sound ? 'ON' : 'OFF'}</TextSound>
            <IconButton onPress={handleSound}>
              <Icon
                name={sound ? 'volume-up' : 'volume-off'}
                color={sound ? '#000' : '#C12626'}
                size={40}
              />
            </IconButton>
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
