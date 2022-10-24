import React from 'react';
import BackGroundImage from '../../assets/images/Background.svg';
import { Dimensions } from 'react-native';
import { ContainerBackground } from './styles';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const viewBox = '123 10 ' + width + ' ' + height;

export const BodyScreen: React.FC = () => {
  return (
    <ContainerBackground>
      <BackGroundImage viewBox={viewBox} width={width} height={height} />
    </ContainerBackground>
  );
};
