import styled from 'styled-components/native';
import responsive from './themes/responsive';

interface styledProps {
  width?: string;
  height?: string;
  color?: string;
  paddingTOP?: string;
}

export const TextSuperTitle = styled.Text`
  color: ${({ theme }) => theme.colors.Black};
  font-family: 'Inter-ExtraBold';
  font-size: ${responsive.G};
  text-align: center;
  line-height: 20px;
`;

export const TextTitle = styled.Text<styledProps>`
  color: ${({ color, theme }) => color || theme.colors.Black};
  font-family: 'VerySimpleChalk';
  font-size: ${responsive.UEG};
  text-align: center;
  line-height: 20px;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TextSubTitle = styled.Text<styledProps>`
  color: ${({ theme }) => theme.colors.Black};
  font-family: 'VerySimpleChalk';
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: ${responsive.EG};
  text-align: center;
  line-height: 20px;
`;

export const TextPresentation = styled.Text<styledProps>`
  color: ${({ theme }) => theme.colors.Black};
  font-family: 'VerySimpleChalk';
  font-size: 16px;
  text-align: center;
  line-height: 20px;
  z-index: 2;
`;

export const TextRegular = styled.Text`
  color: ${({ theme }) => theme.colors.Black};
  font-family: 'VerySimpleChalk';
  font-size: ${responsive.M};
  text-align: center;
  line-height: 20px;
`;

export const Image = styled.Image<styledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
