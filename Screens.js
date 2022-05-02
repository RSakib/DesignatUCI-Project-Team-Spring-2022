import {StyleSheet, Button, View, Text } from 'react-native';

export function StartScreen({navigation}) {
return (
    <View style={styles.container}>
        <Text>Take This Quiz for the App</Text>
        <Button
            title="Get Started"
            onPress={() => navigation.navigate('quizScreen')}
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
                onPress={() => navigation.navigate('homeScreen')}
                />
            </View>
        </View>
    </View>
);
}

export function HomeScreen(navigation) {
return (
    <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 1, backgroundColor: "red" , flexBasis:280}} />
        <View style={{ flex: 1, backgroundColor: "darkorange", flexBasis:210 }} />
        <View style={{ flex: 1, backgroundColor: "green", flexBasis:210 }} />
        <View style={{ flex: 1, backgroundColor: "darkorange", flexBasis:210 }} />
      </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    },
  });