// In App.js in a new project

import * as React from 'react';
import {StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TempHomeScreen, RealHome, QuizScreen} from "./Screens.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="TempHome" 
          component={TempHomeScreen}  
          options={{
            headerShown: false
          }}
          />
        <Stack.Screen   
          name="Quiz" 
          component={QuizScreen} 
          />
        <Stack.Screen
          name="RealHome"
          component={RealHome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;