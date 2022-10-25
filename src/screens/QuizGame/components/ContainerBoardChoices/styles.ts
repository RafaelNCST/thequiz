import styled from 'styled-components/native';

interface styledProps {
  selected?: boolean;
  noSelected?: boolean;
}

export const ContainerOptions = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 5px;
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
