import {TouchableOpacity, View, Text, FlatList, SafeAreaView, ImageBackground, Image } from 'react-native';
import { styles, My_styles, text_styles } from './Styles';
import GameMatchSvg from './svgs/GameMatchSvg';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function StartScreen({navigation}) {
    return (
        <View style={My_styles.container}>
            <View style={My_styles.starttop}>
                <ImageBackground source={require('./assets/Coverpage.png')} resizeMode='cover' style={styles.image} imageStyle={{opacity:0.6}}>
                    <LinearGradient
                        colors={['transparent', '#201D3C']}
                        style={styles.Gradient}>
                    </LinearGradient>
                    <GameMatchSvg/>
                    <Text style={text_styles.Orange_Start_Text}>{"\n"}Level Up Your{"\n"}Library {"\n"} {"\n"} See What You Have Missed Out On</Text>
                </ImageBackground>
            </View>
            <View style={[]}>
                <View style={[{justifyContent:'center', alignItems:'center', flex:0}]}>
                    <TouchableOpacity
                        style={[My_styles.Button, {alignItems:'center', justifyContent:'flex-end', paddingLeft:50, paddingRight: 50, paddingTop:12, paddingBottom:12, marginBottom: 40}]}
                        onPress={() => navigation.navigate('quizScreen1')}
                        >
                            <Text style={[text_styles.Button]}>Let's Get Started</Text>
                        </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
    }

    const DATA = [
        {
            id: 1,
            title: "Playstation",
            icon: require("./assets/PSIcon.png")
        },
        {
            id: 2,
            title: "Xbox",
            icon: require("./assets/XboxIcon.png")
        }
      ];
      
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[{flex:1, margin:5, justifyContent:'flex-end',alignContent:'flex-end', height:141, borderRadius:10}, backgroundColor]}>
            
            <Image source={item.icon} style={{alignSelf:'center', flex:1, resizeMode:'contain'}}/>
            <Text style={[textColor, {fontSize:20, marginLeft:15, fontFamily:'FiraSans_500Medium', marginBottom:5, marginTop:10}]}>{item.title}</Text>
        </TouchableOpacity>
      );

    

export function QuizScreen1({navigation}) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#E9D5DA' : "#827397";
        const color = item.id === selectedId ? "#827397" : '#E9D5DA';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        )};
    
    return (
        <SafeAreaView style={My_styles.AndroidSafeArea}>
            <View style={[My_styles.container, {backgroundColor:'red',flexDirection:'column',justifyContent:'space-between'}]}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={[{flexDirection:'row',justifyContent:'flex-start', alignContent:'center'}]}>
                        <Image source={require('./assets/Page1.png')} style={[{height:41, width:70, marginLeft:15}]}/>
                    </View>
                    <TouchableOpacity style={[{justifyContent:'flex-end', alignItems:'flex-end', marginRight:25}]} onPress={() => navigation.navigate('homeScreen')}>
                            <Text style={[text_styles.Button,{textAlign:'right', fontFamily:'FiraSans_500Medium', fontSize:25, color:'#827397'}]}>Skip</Text>
                    </TouchableOpacity>
                    
                </View>
                <Text style={[text_styles.Button, {textAlign:'center', fontSize:32, paddingBottom:20, paddingTop:10, color:'#E4842E'}]}>Where Do You Play?</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    numColumns={2}
                    contentContainerStyle={[{alignContent:'center'}]}
                ></FlatList>

                <TouchableOpacity
                    style={[My_styles.Button, {alignItems:'center', justifyContent:'flex-end',marginBottom:30, marginLeft:30, marginRight: 30, padding:5}]}
                    onPress={() => navigation.navigate('quizScreen1')}
                    >
                        <Text style={[text_styles.Button]}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
    }