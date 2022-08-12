import {TouchableOpacity, View, Text, FlatList, SafeAreaView, ImageBackground, Image, Dimensions } from 'react-native';
import { styles, My_styles, text_styles } from './Styles';
import GameMatchSvg from './svgs/GameMatchSvg';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect,useState } from 'react';
import axios from 'axios';


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
                    <Text style={text_styles.Orange_Start_Text}>{"\n"}Level Up Your{"\n"}Library {"\n"} {"\n"} See What You{"\n"}Missed Out On</Text>
                </ImageBackground>
            </View>
            <View style={[]}>
                <View style={[{justifyContent:'center', alignItems:'center', flex:0}]}>
                    <TouchableOpacity
                        style={[My_styles.Button, {alignItems:'center', justifyContent:'flex-end', paddingLeft:30, paddingRight: 30, paddingTop:12, paddingBottom:12, marginBottom: 40}]}
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
        icon: require("./assets/PSIcon.png"),
        igdb: [48,167]
    },
    {
        id: 2,
        title: "Xbox",
        icon: require("./assets/XboxIcon.png"),
        igdb: [49,169]
    },
    {
        id:3,
        title: 'PC/Mac',
        icon: require("./assets/PCIcon.png"),
        igdb: [6]
    },
    {
        id:4,
        title: 'Nintendo',
        icon: require('./assets/NintendoIcon.png'),
        igdb: [130]
    }
    ];
    
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[{flex:1, margin:5, justifyContent:'flex-end',alignContent:'flex-end', height:141, borderRadius:10}, backgroundColor]}>
        
        <Image source={item.icon} style={{alignSelf:'center', flex:1, resizeMode:'contain',marginTop:20, paddingBottom:20}}/>
        <Text style={[textColor, {fontSize:24, marginLeft:15, fontFamily:'FiraSans_500Medium', marginBottom:5, marginTop:10}]}>{item.title}</Text>
    </TouchableOpacity>
    );

let user_platforms = [];

export function QuizScreen1({navigation}) {
    const [selectedId, setSelectedId] = useState([]);

    const renderItem = ({ item }) => {
        const backgroundColor = selectedId.indexOf(item.title) === -1 ? "#827397" : '#E9D5DA';
        const color = selectedId.indexOf(item.title) === -1 ? '#E9D5DA' : "#827397";
        const updatearray = (loc) => {
            let copyarray = [...selectedId];
            if (selectedId.indexOf(item.title) === -1) {
                copyarray.push(loc.title);
            }
            else
            {
                copyarray = copyarray.filter(item => item !== loc.title);
            }
            setSelectedId(copyarray);
        };
        
        return (
          <Item
            item={item}
            onPress={() => {updatearray(item)}}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        )};
    
    const handleNextButton = () => {
        for (let index = 0; index < DATA.length; index++) {
            if (selectedId.indexOf(DATA[index].title) !== -1) {
                user_platforms.push(DATA[index]);
            };
            
        }
        navigation.navigate('quizScreen2')
    }
    
    return (
        <SafeAreaView style={My_styles.AndroidSafeArea}>
            <View style={[My_styles.container, {flexDirection:'column',justifyContent:'space-between'}]}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={[{flexDirection:'row',justifyContent:'flex-start', alignContent:'center'}]}>
                        <Image source={require('./assets/Page1.png')} style={[{height:41, width:70, marginLeft:15}]}/>
                    </View>
                    <TouchableOpacity style={[{justifyContent:'flex-end', alignItems:'flex-end', marginRight:25}]} onPress={() => navigation.navigate('homeScreen')}>
                            <Text style={[text_styles.Button,{textAlign:'right', fontFamily:'FiraSans_500Medium', fontSize:25, color:'#827397'}]}>Skip</Text>
                    </TouchableOpacity>
                    
                </View>
                <Text style={[text_styles.Button, {textAlign:'center', fontSize:30, paddingBottom:20, paddingTop:10, color:'#E4842E'}]}>Where Do You Play?</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    numColumns={2}
                    contentContainerStyle={[{alignContent:'center'}]}
                    style={{marginLeft:10, marginRight:10}}
                ></FlatList>

                <TouchableOpacity
                    style={[My_styles.Button, {alignItems:'center', justifyContent:'flex-end',marginBottom:30, marginLeft:30, marginRight: 30, padding:5}]}
                    onPress={() => {selectedId.join() === '' ? navigation.navigate('quizScreen1') : handleNextButton(selectedId);}}
                    >
                        <Text style={[text_styles.Button]}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
    }



    const Tags = [
        {
            id: 1,
            title: "Single Player",
            igdb: 1,
            type: "game_mode"
        },
        {
            id: 2,
            title: "Multiplayer",
            igdb: 2,
            type: "game_mode"
        },
        {
            id:3,
            title: 'Action',
            igdb: 1,
            type: 'theme'
        },
        {
            id:4,
            title: 'Adventure',
            igdb: 31,
            type: "genre"
        },
        {
            id:5,
            title: 'RPG',
            igdb: 12,
            type: "genre"
        },
        {
            id:6,
            title: 'Horror',
            type: "theme",
            igdb: 19

        },
        {
            id:7,
            title: 'Indie',
            igdb: 32,
            type: 'genre'
        },
        {
            id:8,
            title: 'Shooter',
            igdb: 5,
            type: "genre"
        },
        {
            id:9,
            title: 'Platformer',
            igdb: 8,
            type: 'genre'
        },
        {
            id:10,
            title: 'Sports',
            igdb: 14,
            type: 'genre'
        },
        {
            id:11,
            title: 'Fighting',
            igdb: 4,
            type: 'genre'
        },
        {
            id:12,
            title: 'Racing',
            igdb: 10,
            type: 'genre'
        },
        {
            id:13,
            title: 'Strategy',
            igdb: 15,
            type: 'genre'
        },
        {
            id:14,
            title: 'Puzzle',
            igdb: 9,
            type: 'genre'
        },
        {
            id:15,
            title: ''
        }
        ];
    
    const TagItem = ({ item, onPress, backgroundColor, textColor }) => {
        if (item.title === '') {
            return(
            <TouchableOpacity onPress={onPress} style={[{flex:1, marginVertical:7, justifyContent:'flex-end',alignContent:'flex-end', paddingVertical:40}]}>
            </TouchableOpacity>
            );
        }
        else {
            return(
            <TouchableOpacity onPress={onPress} style={[{flex:1, margin:5, marginVertical:7, justifyContent:'flex-end',alignContent:'flex-end', borderRadius:20, paddingVertical:10}, backgroundColor]}>
            <Text style={[textColor, {fontSize:24, fontFamily:'FiraSans_500Medium', marginBottom:5, marginTop:5, textAlign:'center'}]}>{item.title}</Text>
            </TouchableOpacity>
            );
        }
        
    };


    let user_tags = [];


    export function QuizScreen2({navigation}) {

        let [selectedTags, setSelectedTags] = useState([]);

        const renderTagItem = ({ item }) => {
            const backgroundColor = selectedTags.indexOf(item.title) === -1 ? "#827397" : '#E9D5DA';
            const color = selectedTags.indexOf(item.title) === -1 ? '#E9D5DA' : "#827397";
            const updatearray = (loc) => {
                let copyarray = [...selectedTags];
                if (selectedTags.indexOf(loc.title) === -1) {
                    copyarray.push(loc.title);
                }
                else
                {
                    copyarray = copyarray.filter(item => item !== loc.title);
                }
                setSelectedTags(copyarray);
            };
            
            return (
              <TagItem
                item={item}
                onPress={() => {updatearray(item)}}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
              />
            )};

            const handleNextButton = () => {
                for (let index = 0; index < Tags.length; index++) {
                    if (selectedTags.indexOf(Tags[index].title) !== -1) {
                        user_tags.push(Tags[index]);
                    };
                    
                }
                navigation.navigate('quizScreen3')
            }


        return(
        <SafeAreaView style={My_styles.AndroidSafeArea}>
            <View style={[My_styles.container, {flexDirection:'column',justifyContent:'space-between'}]}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={[{flexDirection:'row',justifyContent:'flex-start', alignContent:'center'}]}>
                        <Image source={require('./assets/Page1.png')} style={[{height:41, width:70, marginLeft:15}]}/>
                    </View>
                    <TouchableOpacity style={[{justifyContent:'flex-end', alignItems:'flex-end', marginRight:25}]} onPress={() => navigation.navigate('homeScreen')}>
                            <Text style={[text_styles.Button,{textAlign:'right', fontFamily:'FiraSans_500Medium', fontSize:25, color:'#827397'}]}>Skip</Text>
                    </TouchableOpacity>
                    
                </View>
                <Text style={[text_styles.Button, {textAlign:'center', fontSize:30, paddingBottom:20, paddingTop:10, color:'#E4842E'}]}>What Do You Play?</Text>
                
                <FlatList
                    data={Tags}
                    renderItem={renderTagItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedTags}
                    numColumns={2}
                    contentContainerStyle={[{alignContent:'center'}]}
                    style={{marginHorizontal:10}}
                ></FlatList>

                <View style={[{backgroundColor: 'rgba(32, 29, 60, 0.9)', position:'absolute', bottom:0, width:Dimensions.get('window').width, flex:1}]}>
                    <TouchableOpacity
                        style={[My_styles.Button, {alignItems:'center', justifyContent:'flex-end',marginBottom:30, marginLeft:30, marginRight: 30, padding:5,marginTop:5, opacity:1}]}
                        onPress={() => {handleNextButton(selectedTags);}}
                        >
                            <Text style={[text_styles.Button]}>Next</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
        );
    }




    const GameItem = ({ item, onPress, backgroundColor }) => {
        const [imageurl, setImageUrl] = useState();
        let datatext = 'fields url; limit 1; where game=';
        datatext += item["id"];
        datatext += ";"
        
        axios({
            url: "https://api.igdb.com/v4/covers",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': 'p87mxmn6f2u82czno5rcacviov4gbv',
                'Authorization': token,
            },
            data: datatext,
            })
            .then(response => {
                setImageUrl(response.data[0]["url"].replace("t_thumb", "t_cover_big"));
            })
            .catch(err => {
                ;
            });

        
        if (item.id === -1) {
            return(
                <TouchableOpacity onPress={onPress} style={[{flex:1, margin:5, justifyContent:'flex-end',alignContent:'flex-end', height:125, borderRadius:10}]}>
                </TouchableOpacity>
                );
        }
        else {
            return(
                <TouchableOpacity onPress={onPress} style={[{flex:1, margin:5, justifyContent:'flex-end',alignContent:'flex-end', height:141, borderRadius:10}, backgroundColor]}>
                    
                    <Image source={{uri: "https:" + imageurl}} style={[{borderRadius:10, flex:1, justifyContent:'flex-start'}]} />
                </TouchableOpacity>
                );
        }
        }
    
    let user_genresids = [];
    let user_game_modeids = [];
    let user_themeids = [];
    let user_platformids = [];

    let token = 'Bearer '

    export function QuizScreen3({navigation}) {
        let genre = false;
        let game_mode = false;
        let theme = false;



        for (let index = 0; index < user_tags.length; index++) {
            if(user_tags[index].type === 'genre') {
                user_genresids.push(user_tags[index].igdb);
                if (user_genresids !== []) {
                    genre = true;
                }
            }
            else if(user_tags[index].type === 'game_mode') {
                user_game_modeids.push(user_tags[index].igdb);
                if (user_game_modeids !== []) {
                    game_mode = true;
                }
                
            }
            else if(user_tags[index].type === 'theme') {
                user_themeids.push(user_tags[index].igdb);
                if (user_themeids !== []) {
                    theme = true;
                }
            }
        }

        

        for (let index = 0; index < user_platforms.length; index++) {
            user_platformids = user_platformids.concat(user_platforms[index].igdb);
        }

        

        const [gamedata, setGameData] = useState([]);

        const getAuth = async () => {
        try {
            const authresponse = await fetch('https://id.twitch.tv/oauth2/token?client_id=p87mxmn6f2u82czno5rcacviov4gbv&client_secret=2jtympxbjru5yukxet5u0voaeogjsp&grant_type=client_credentials', {
                "method": "POST"
            });
            const authjson = await authresponse.json();
            const access_token = authjson.access_token;
            return(access_token);

        } catch (error) {
            console.error(error)
        }
        };

        const getGames = async () => {
                const access = await getAuth();
                token += access;

                let maindatatext = 'fields cover, name; limit 10; sort rating desc; where rating >= 80 ';
                maindatatext += "& platforms = (";
                maindatatext += user_platformids.join();
                maindatatext += ") ";
                console.log(user_genresids.length);
                try {
                    if (genre) {
                        maindatatext += "& genres = (";
                        maindatatext += user_genresids.join();
                        maindatatext += ") ";
                    }
                    if (game_mode) {
                        maindatatext += "& game_modes = (";
                        maindatatext += user_game_modeids.join();
                        maindatatext += ") ";
                    }
                    if (theme) {
                        maindatatext += "& themes = (";
                        maindatatext += user_themeids.join();
                        maindatatext += ") ";
                    }
                } catch (error) {
                    
                }
                
                console.log(maindatatext);

                maindatatext += ";";

            axios({
                url: "https://api.igdb.com/v4/games",
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': 'p87mxmn6f2u82czno5rcacviov4gbv',
                    'Authorization': token,
                },
                data: maindatatext,
              })
                .then(response => {
                    setGameData(response.data, {id:-1});
                })
                .catch(err => {
                });
                

        }

        useEffect(() => {
            getGames();
        }, []);

        const renderGameItem = ({ item }) => {
            const backgroundColor = '#E9D5DA';
            const color = "#827397";
            return (
                <GameItem
                  item={item}
                  onPress={() => {}}
                  backgroundColor={{ backgroundColor }}
                />
              )};

        return(
            <SafeAreaView style={My_styles.AndroidSafeArea}>
                <View style={[My_styles.container, {flexDirection:'column',justifyContent:'space-between'}]}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={[{flexDirection:'row',justifyContent:'flex-start', alignContent:'center'}]}>
                            <Image source={require('./assets/Page1.png')} style={[{height:41, width:70, marginLeft:15}]}/>
                        </View>
                        <TouchableOpacity style={[{justifyContent:'flex-end', alignItems:'flex-end', marginRight:25}]} onPress={() => navigation.navigate('homeScreen')}>
                                <Text style={[text_styles.Button,{textAlign:'right', fontFamily:'FiraSans_500Medium', fontSize:25, color:'#827397'}]}>Skip</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={[text_styles.Button, {textAlign:'center', fontSize:30, paddingBottom:20, paddingTop:10, color:'#E4842E'}]}>What Have You Played?</Text>
                    
                    <FlatList
                    data={gamedata}
                    renderItem={renderGameItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={[{alignContent:'center'}]}
                    style={{marginHorizontal:10}}
                    ></FlatList>
    
                    <View style={[{backgroundColor: 'rgba(32, 29, 60, 0.9)', position:'absolute', bottom:0, width:Dimensions.get('window').width, flex:1}]}>
                        <TouchableOpacity
                            style={[My_styles.Button, {alignItems:'center', justifyContent:'flex-end',marginBottom:30, marginLeft:30, marginRight: 30, padding:5,marginTop:5, opacity:1}]}
                            onPress={() => {navigation.navigate('homeScreen');}}
                            >
                                <Text style={[text_styles.Button]}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </SafeAreaView>
            );
    }