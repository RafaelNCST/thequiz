import styled from 'styled-components/native';
import responsive from '../../styles/themes/responsive';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const TitleBar = styled.View`
  height: 55%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.White};
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

export const ContainerUtils = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
`;

export const ContainerMain = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

export const ContainerText = styled.View`
  position: absolute;
  width: 80%;
`;

export const TextMain = styled.Text`
  color: ${({ theme }) => theme.colors.SecundaryBlue};
  font-family: 'VerySimpleChalk';
  font-size: ${responsive.MG};
  padding-top: 10px;
  text-align: center;
  line-height: 20px;
`;

export const ContainerOptions = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.colors.SecundaryBlack};
  elevation: 15;
`;

export const Option = styled.TouchableOpacity`
  height: 41%;
  width: 44%;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  elevation: 15;
  background-color: ${({ theme }) => theme.colors.White};
`;
