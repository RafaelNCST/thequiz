import React from 'react';
import { BackGround } from './styles';

interface Props {
  children: unknown;
}

export const BodyScreen: React.FC<Props> = ({ children }) => {
  return (
    <BackGround
      source={require('../../assets/images/layer1.png')}
      resizeMode="cover">
      {children}
    </BackGround>
  );
};
