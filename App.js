// In App.js in a new project

import * as React from 'react';
import {StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StartScreen, HomeScreen, QuizScreen} from "./Screens.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen">
        <Stack.Screen 
          name="startScreen" 
          component={StartScreen}  
          options={{
            headerShown: false
          }}
          />
        <Stack.Screen   
          name="quizScreen" 
          component={QuizScreen} 
          />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;