import {StyleSheet, Button, View, Text, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function StartScreen({navigation}) {
return (
    <View style={My_styles.container}>
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
    <View style={My_styles.container}>

        <View style={My_styles.top}>
        <Text>You Like Games?</Text>

            <View style={My_styles.bottom}>
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
    <SafeAreaView style={[My_styles.container, {flexDirection: "column"}]}>
      <List/>
    </SafeAreaView>
)
}

export function SearchScreen(navigation) {
    return (
        <View style={[My_styles.container, {flexDirection: "column"}]}>
            <View style={[My_styles.center]}>
                <Text>Searching for some sanity here</Text>
            </View>
        </View>
    )
}

export function BrowseScreen(navigation) {
    return (
        <View style={[My_styles.container, {flexDirection: "column"}]}>
            <View style={[My_styles.center]}>
                <Text>Browsing for some sanity, idk man its a Sunday</Text>
            </View>
        </View>
    )
}


const My_styles = StyleSheet.create({
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
    center: {
        flex:1,
        alignItems: "center",
        justifyContent: 'center',
    }
  });

  const data = [
    {id:0, text: 'Empty'},
    {id:1, text: 'One'},
    {id:2, text: 'Cool'},
    {id:3, text: 'lit'},
    {id:4, text: 'One'},
    {id:5, text: 'Cool'},
    {id:6, text: 'lit'},
    {id:7, text: 'One'},
    {id:8, text: 'Cool'},
    {id:9, text: 'lit'},
    {id:10, text: 'One'},
    {id:11, text: 'Cool'},
    {id:12, text: 'lit'}
  ]

  function Slide_Deck() {
    const navigation = useNavigation();
      return(
        <View style={styles.red_item}>
        <Button
        title='Nah Not really'
        onPress={() => navigation.navigate('quizScreen')}
        />
        </View>
      )
    
  }
  
  const Item = ({item}) => {
      if (item.id == 0) {
        return (
            <Slide_Deck/>
          )
      }
      else {
        return (
            <View style={[styles.item, styles.shadow]}>
              <Text>{item.text}</Text>
            </View>
          );
      }
    
  }

  function List(props) {
    return(
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={Item}
      keyExtractor={item => item.id}
      />
  )}
  

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginHorizontal: 10,
      marginBottom: 3.5,
      flexDirection: 'row'
    },
    red_item: {
        backgroundColor: 'red',
        padding: 150
      },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.47,
      shadowRadius: 9,
    }
  });