import styled from 'styled-components/native';

export const ContainerMenssager = styled.View`
  position: absolute;
  background-color: white;
  width: 92%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  bottom: 2%;
  elevation: 10;
  z-index: -1;
`;

export const ContainerText = styled.Text`
  font-size: 15px;
  font-family: 'VerySimpleChalk';
  color: ${({ theme }) => theme.colors.Black};
`;
