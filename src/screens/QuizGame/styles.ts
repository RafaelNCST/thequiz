import styled from 'styled-components/native';

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
