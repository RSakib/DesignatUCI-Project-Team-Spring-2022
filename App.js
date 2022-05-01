// In App.js in a new project

import * as React from 'react';
import {StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TempHomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Take This Quiz for the App</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Quiz')}
      />
    </View>
  );
}

function QuizScreen({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
      <Text>You Like Games?</Text>

      <View style={styles.bottom}>
        <Button
          title='Nah Not really'
          onPress={() => navigation.navigate('RealHome')}
          />
      </View>
      </View>
    </View>
  );
}

function RealHome(navigation) {
  return (
    <View style = {styles.container}>
      <Text>Oh....</Text>
    </View>
  )
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 100
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
  }
});

export default App;