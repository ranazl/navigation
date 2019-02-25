import React, { Component } from 'react';
import { View, Text, StyleSheet, Image , TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';
import newPage from './NewPage'

export default class HeaderNavi extends Component {
    render() {
        return (
            // <View style={styles.container}>
                 <View style={styles.header}>
          <View style={styles.header1}>
            <View style={styles.circle}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>fizy</Text>
            </View>
            <TouchableHighlight
            onPress={() => this.props.navigation.popToTop()}
            >
               <Image source={require('./photo/menu.png')}/>
            </TouchableHighlight>
          </View>
        </View>
            // </View>
        );
    }
}

// const AppNavigator  = createStackNavigator(
//     {
//       Home : HeaderNavi,
//       NewPage : newPage,
//     },
//     {
//       initialRouteName: 'Home',
//     }
//   );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    header: {
        flex:1,
        backgroundColor:'#f1c918',
        justifyContent:'center'
      },
      header1: {
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal:15,
        marginTop:15
      },
      circle:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
});




// export default createAppContainer(AppNavigator );
