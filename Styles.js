import {StyleSheet, StatusBar} from 'react-native';

export const My_styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(32,29,60)'
    },
    top: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'red'
    },
    bottom: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: 'center',
      marginBottom: 36
    },
    center: {
        flex:1,
        alignItems: "center",
        justifyContent: 'center',
    },
    starttop: {
      flex: 1,
      alignContent:'center',
      justifyContent:'space-between'
    },
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "rgb(32,29,60)",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
    Button: {
      backgroundColor: 'rgb(77,76,126)',
      borderRadius:10,
      justifyContent:'center',
      alignContent:'center'
    }
  });

export const styles = StyleSheet.create({
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
    },
    image: {
      flex:1,
      justifyContent:'center'
    },
    Gradient: {
      position:'absolute',
      left:0,
      right:0,
      bottom:0,
      height:'175%'
    }
  });

  export const text_styles = StyleSheet.create({
    Button: {
      color: "#E9D5DA",
      fontSize: 34,
      justifyContent: 'center',
      alignContent:'center',
      flexWrap:'nowrap',
      fontFamily:'FiraSans_600SemiBold'
    },
    Orange_Start_Text: {
      flex:2,
      color: "#E4842E",
      fontSize: 34,
      textAlign:'center',
      fontFamily:'FiraSans_600SemiBold',
      alignContent: 'flex-end',
      justifyContent:'flex-end',
      marginTop:100
    },
  })