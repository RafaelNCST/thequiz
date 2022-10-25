import React, { useState } from 'react';
import { Modal } from 'react-native';
import { ModalOptions } from '../../components/ModalOptions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  MarkerStyled,
  ContainerMarker,
  ConfigButton,
  TextMarker,
} from './styles';

interface Props {
  time: string | undefined;
}

export const Marker: React.FC<Props> = ({ time }) => {
  const [showModalOption, setShowModalOptions] = useState<boolean>(false);

  const handlerModalOptions = () => {
    setShowModalOptions(true);
  };

  return (
    <ContainerMarker>
      <TextMarker>TEMPO: 01:00</TextMarker>

      <Modal visible={showModalOption} animationType="fade" transparent>
        <ModalOptions setModal={setShowModalOptions} />
      </Modal>

      <ConfigButton onPress={handlerModalOptions}>
        <Icon name="settings" size={25} color="#000" />
      </ConfigButton>
      <MarkerStyled source={require('../../../../assets/images/marker.png')} />
    </ContainerMarker>
  );
};
