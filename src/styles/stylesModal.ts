import styled from 'styled-components/native';

interface styledProps {
  height: string;
}

export const BodyModal = styled.View`
  flex: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;
export const Content = styled.View<styledProps>`
  height: ${({ height }) => height};
  width: 80%;
  background-color: ${({ theme }) => theme.colors.SecundaryWhite};
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ContainerPin = styled.View`
  width: 100%;
  height: 15%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Pin = styled.View`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.Gray};
  height: 15px;
  width: 15px;
  elevation: 5;
`;
