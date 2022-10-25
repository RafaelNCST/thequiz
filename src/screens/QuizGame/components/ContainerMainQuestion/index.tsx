import React from 'react';
import { Dimensions } from 'react-native';
import { Image } from '../../../../styles/globalStyles';
import { ContainerMain, ContainerText, TextMain } from './styles';

interface Props {
  textContent: string;
}

const width = Dimensions.get('screen').width;

export const ContainerMainQuestion: React.FC<Props> = ({ textContent }) => {
  return (
    <ContainerMain>
      <Image
        source={require('../../../../assets/images/paper.png')}
        width={`${width - 20}px`}
        height={'200px'}
      />
      <ContainerText>
        <TextMain>{textContent}</TextMain>
      </ContainerText>
    </ContainerMain>
  );
};
