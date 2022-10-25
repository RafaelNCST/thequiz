import styled from 'styled-components/native';

export const ContainerItens = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const TextWarning = styled.Text`
  color: ${({ theme }) => theme.colors.Red};
  font-family: 'VerySimpleChalk';
  font-size: 16px;
  text-align: center;
  line-height: 20px;
  z-index: 2;
`;
