import styled from 'styled-components/native';
import responsive from './themes/responsive';

interface PropsImage {
  width?: string;
  height?: string;
  color?: string;
}

export const TextSuperTitle = styled.Text`
  color: ${({ theme }) => theme.colors.Text};
  font-family: 'Inter-ExtraBold';
  font-size: ${responsive.G};
  text-align: center;
  line-height: 20px;
`;

export const TextTitle = styled.Text<PropsImage>`
  color: ${({ color }) => color};
  font-family: 'VerySimpleChalk';
  font-size: ${responsive.UEG};
  text-align: center;
  line-height: 20px;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TextSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.Black};
  font-family: 'VerySimpleChalk';
  font-size: ${responsive.MG};
  text-align: center;
  line-height: 20px;
`;

export const TextRegular = styled.Text`
  color: ${({ theme }) => theme.colors.Black};
  font-family: 'VerySimpleChalk';
  font-size: ${responsive.M};
  text-align: center;
  line-height: 20px;
`;

export const Image = styled.Image<PropsImage>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
