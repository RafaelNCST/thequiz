import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const widthScreen = Dimensions.get('screen').width;

export const BodyContainerAnimation = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerAnimation = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerLottie = styled.View`
  width: ${widthScreen - 100}px;
  height: 150px;
  align-items: center;
  justify-content: center;
`;
