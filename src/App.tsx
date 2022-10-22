import React from 'react';
import { Route } from './routes';
import { ThemeProvider } from 'styled-components/native';
import theme from './styles/themes/theme';
import { StatusBarApp } from './components/StatusBar';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Route />
      <StatusBarApp />
    </ThemeProvider>
  );
};
