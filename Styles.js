import {StyleSheet} from 'react-native';

export const My_styles = StyleSheet.create({
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
      alignItems: 'center',
      marginBottom: 36
    },
    center: {
        flex:1,
        alignItems: "center",
        justifyContent: 'center',
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
    }
  });