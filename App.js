import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';
import RecordResultsPage from './pages/RecordResults';
import ViewResultsPage from './pages/ViewResults';
import ResultsPage from './pages/Results';
import InformationPage from './pages/Information';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecordResults"
          component={RecordResultsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewResults"
          component={ViewResultsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Results"
          component={ResultsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Information"
          component={InformationPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
