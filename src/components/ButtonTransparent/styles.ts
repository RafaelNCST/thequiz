import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  elevation: 10;
  background-color: ${({ theme }) => theme.colors.SecundaryWhite};
  margin-bottom: 20px;
  /* shadow-color: rgba(0, 0, 0, 0.4); // IOS
  shadow-offset: {
    height: 1px;
    width: 1px;
  } // IOS
  shadow-opacity: 1px; // IOS
  shadow-radius: 1px; // IOS */
`;
