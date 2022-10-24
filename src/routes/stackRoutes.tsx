import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu } from '../screens/Menu';
import { QuizGame } from '../screens/QuizGame';
import { RootStackParamList } from './types';

export const HomeRoute: React.FC = () => {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MenuScreen" component={Menu} />
      <RootStack.Screen name="QuizGameScreen" component={QuizGame} />
    </RootStack.Navigator>
  );
};
