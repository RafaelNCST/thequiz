import styled from 'styled-components/native';

export const ContainerMarker = styled.View`
  margin-top: 10px;
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const ConfigButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.Gray};
  z-index: 2;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  margin-top: 10px;
`;

export const MarkerStyled = styled.Image`
  width: 120px;
  height: 120px;
  position: absolute;
`;

export const TextMarker = styled.Text`
  color: ${({ theme }) => theme.colors.Black};
  font-family: 'VerySimpleChalk';
  font-size: 15px;
  text-align: center;
  line-height: 20px;
  z-index: 2;
`;
