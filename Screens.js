import {Button, View, Text, FlatList, SafeAreaView } from 'react-native';
import { styles, My_styles } from './Styles';
import { useNavigation } from '@react-navigation/native';

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

  function List(props) {
    const navigation = useNavigation();
    return(
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        if (item.id == 0) {
          return (
              <View style={styles.red_item}>
              <Button
              title={item.text}
              onPress={() => navigation.navigate('quizScreen')}
              />
              </View>
            )
        }
        else {
          return (
              <View style={[styles.item, styles.shadow]}>
                <Text>{item.text}</Text>
              </View>
            );
        }}}
      />
  )}
  

  