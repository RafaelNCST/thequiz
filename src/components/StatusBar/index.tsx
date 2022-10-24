import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

export const StatusBarApp = () => {
  const theme = useTheme();

  return (
    <StatusBar
      backgroundColor={theme.colors.SecundaryBlack}
      barStyle="light-content"
    />
  );
};
