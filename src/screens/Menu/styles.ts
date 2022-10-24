import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerMenu = styled.View`
  width: 80%;
  height: 320px;
  background-color: ${({ theme }) => theme.colors.Black};
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

export const DropDownContainer = styled.View`
  width: 80%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.White};
`;

export const ContainerButtons = styled.View`
  width: 80%;
  height: 40px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const ButtonMenu = styled.TouchableOpacity`
  width: 110px;
  height: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.White};
`;
