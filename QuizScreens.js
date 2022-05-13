import {StyleSheet, Button, View, Text, FlatList, SafeAreaView } from 'react-native';
import { styles, My_styles } from './Styles';
import SvgTest from './svgs/SvgTest';
import { useNavigation } from '@react-navigation/native';

export function StartScreen({navigation}) {
    return (
        <View style={My_styles.container}>
            <View style={My_styles.top}>
                <SvgTest/>
            </View>
            <View style={My_styles.bottom}>
                <Button
                    title="Get Started"
                    onPress={() => navigation.navigate('quizScreen')}
                />
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
                    <Button
                    title='Nah Not really'
                    onPress={() => navigation.navigate('homeScreen')}
                    />
                </View>
            </View>
        </View>
    );
    }