import {StyleSheet, Button, View, Text } from 'react-native';

export function TempHomeScreen({navigation}) {
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

export function QuizScreen({navigation}) {
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

export function RealHome(navigation) {
return (
    <View style = {styles.container}>
    <Text>Oh....</Text>
    </View>
)
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