import styled from 'styled-components/native';
import responsive from '../../styles/themes/responsive';

interface styledProps {
  selected?: boolean;
  noSelected?: boolean;
}

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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const ContainerMarker = styled.View`
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

export const Marker = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ContainerLifes = styled.View`
  width: 150px;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubContainerHeart = styled.View`
  width: 70px;
  height: 70px;
  margin-left: -10px;
  margin-right: -10px;
`;

export const Tips = styled.TouchableOpacity`
  width: 70px;
  height: 50px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Gray};
  border: 1px solid #000;
  elevation: 10;
`;

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
  font-size: ${responsive.MG};
  padding-top: 10px;
  text-align: center;
  line-height: 20px;
  margin-bottom: 15px;
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

export const Option = styled.TouchableOpacity<styledProps>`
  height: 41%;
  width: 44%;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  elevation: 15;
  background-color: ${({ theme, selected, noSelected }) =>
    selected
      ? theme.colors.Green
      : noSelected
      ? theme.colors.White
      : theme.colors.Red};
`;
