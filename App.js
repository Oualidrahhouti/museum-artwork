import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import ArtworkDetails from './components/ArtworkDetails'; // Corrected component name
import Writer from './components/Writer';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Writer" component={Writer} />
        <Stack.Screen name="ArtworkDetails" component={ArtworkDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
