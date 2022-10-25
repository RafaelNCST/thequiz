import styled from 'styled-components/native';
import responsive from '../../../../styles/themes/responsive';

export const ContainerMain = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  width: 97%;
  height: 200px;
`;

export const ContainerText = styled.View`
  position: absolute;
  width: 80%;
`;

export const TextMain = styled.Text`
  color: ${({ theme }) => theme.colors.SecundaryBlue};
  font-family: 'VerySimpleChalk';
  font-size: ${responsive.M};
  padding-top: 10px;
  text-align: center;
  line-height: 20px;
  margin-bottom: 15px;
`;
