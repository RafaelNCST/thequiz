import styled from 'styled-components/native';
import responsive from '../../../../styles/themes/responsive';

interface styledProps {
  sound?: boolean;
}

export const SoundArea = styled.View`
  width: 60%;
  height: 50px;
  border: 1px solid #000;
  border-radius: 12px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerImage = styled.View`
  margin-top: -50px;
`;

export const ContentButtons = styled.View`
  margin-top: -20px;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity``;

export const TextSound = styled.Text<styledProps>`
  color: ${({ theme, sound }) =>
    sound ? theme.colors.Green : theme.colors.Red};
  font-family: 'VerySimpleChalk';
  padding-top: 10px;
  font-size: ${responsive.G};
  text-align: center;
  line-height: 20px;
`;
