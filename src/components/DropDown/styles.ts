import styled from 'styled-components/native';
import responsive from '../../styles/themes/responsive';
import { Animated } from 'react-native';

interface StyledProps {
  sizeBorderRadius?: string;
  color?: string;
  zIndex?: number;
  borderRadius?: string;
  border?: string;
}

export const DropDownContainer = styled.View<StyledProps>`
  width: 80%;
  background-color: white;
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
  border-radius: 12px;
`;

export const DropDownSubContainer = styled(Animated.View)<StyledProps>`
  position: absolute;
  background-color: white;
  top: 40px;
  width: 100%;
  border: ${({ border }) => border} solid #000;
  border-top-width: 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  max-height: 160px;
`;

export const Selected = styled.TouchableHighlight<StyledProps>`
  height: 40px;
  background-color: white;
  border: 1px solid #000;
  border-bottom-width: 0px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-bottom-left-radius: ${({ borderRadius }) => borderRadius};
  border-bottom-right-radius: ${({ borderRadius }) => borderRadius};
`;

export const ContainerSelected = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  align-items: center;
`;

export const TextSelected = styled.Text<StyledProps>`
  color: ${({ color }) => color};
  font-family: 'Inter-SemiBold';
  font-size: ${responsive.PM};
  text-align: center;
  line-height: 20px;
`;

export const Option = styled.TouchableHighlight<StyledProps>`
  height: 40px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  border-bottom-left-radius: ${({ sizeBorderRadius }) => sizeBorderRadius};
  border-bottom-right-radius: ${({ sizeBorderRadius }) => sizeBorderRadius};
`;

export const TextDropDown = styled.Text`
  color: #000;
  font-family: 'Inter-SemiBold';
  font-size: ${responsive.PM};
  text-align: center;
  line-height: 20px;
`;
