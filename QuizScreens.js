import {TouchableOpacity, View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import { styles, My_styles, text_styles } from './Styles';
import GameMatchSvg from './svgs/GameMatchSvg';
import CoverPageSvg from './svgs/CoverPageSvg';
import { useNavigation } from '@react-navigation/native';

export function StartScreen({navigation}) {
    return (
        <View style={My_styles.container}>
            <View style={My_styles.starttop}>
                <GameMatchSvg/>
                <CoverPageSvg/>
                <Text style={text_styles.Orange_Start_Text}>Level Up Your{"\n"}Library {"\n"} {"\n"} See What You Have Missed Out On</Text>
                
            </View>
            <View style={[]}>
                <View style={[{justifyContent:'center', alignItems:'center', flex:0}]}>
                    <TouchableOpacity
                        style={[{backgroundColor: 'rgb(77,76,126)', flex:0, alignItems:'center', justifyContent:'flex-end', paddingLeft:50, paddingRight: 50, paddingTop:12, paddingBottom:12, borderRadius:10, marginBottom: 40}]}
                        onPress={() => navigation.navigate('quizScreen')}
                        >
                            <Text style={[text_styles.Button]}>Let's Get Started</Text>
                        </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
    }

export function QuizScreen({navigation}) {

    return (
        <View style={My_styles.container}>
    
            <View style={My_styles.top}>
            <Text>You Like Games?</Text>
    
                <View style={My_styles.bottom}>
                    <TouchableOpacity
                    title='Nah Not really'
                    onPress={() => navigation.navigate('homeScreen')}
                    />
                </View>
            </View>
        </View>
    );
    }