// In App.js in a new project

import * as React from 'react';
import {StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StartScreen, HomeScreen, QuizScreen, SearchScreen, BrowseScreen} from "./Screens.js";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabScreen(navigation) {
  return(
      <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name='Browse' component={BrowseScreen} />
    </Tab.Navigator>
  )
}

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
          component={TabScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;