// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, BrowseScreen} from "./Screens.js";
import { StartScreen, QuizScreen } from './QuizScreens.js';
import AppLoading from 'expo-app-loading';
import { useFonts, FiraSans_600SemiBold } from '@expo-google-fonts/fira-sans';

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
  let [fontsLoaded] = useFonts({
    FiraSans_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="startScreen">
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