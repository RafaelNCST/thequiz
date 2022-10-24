import React from 'react';
import {
  ContainerAnimation,
  BodyContainerAnimation,
  ContainerLogo,
  ContainerLottie,
} from './styles';
import Logo from '../../assets/images/logo.svg';
import LottieView from 'lottie-react-native';

export const LoadingPencil = () => {
  return (
    <BodyContainerAnimation>
      <ContainerAnimation>
        <ContainerLogo>
          <Logo width={300} height={300} />
        </ContainerLogo>
        <ContainerLottie>
          <LottieView
            source={require('../../assets/lottie/pencil-writing.json')}
            autoPlay
            loop
            resizeMode="cover"
          />
        </ContainerLottie>
      </ContainerAnimation>
    </BodyContainerAnimation>
  );
};
