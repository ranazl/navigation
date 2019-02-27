import React, { Component } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';


class Menu extends Component {

    static navigationOptions = {
        drawerLabel: 'show',
        drawerIcon:({tintColor})=>(
            <Image
                source={require('./photo/welcom.jpg')}
                style={styles.icon}
            />
),
    }
 
  render() {
 
    return (
 
      <View style={styles.container}>
 
        <View>
            <Image source={require('./photo/1.jpg')}
            style={styles.picture} />
        </View>

        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Rana</Text>
            <Text style={styles.text}>Zolfaghari</Text>
        </View>
 
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    picture:{
        width:70,
        height:70,
        borderRadius: 100,
    },
    text:{
        fontSize:16,
        color:'black',
        fontWeight: 'bold',
    }
});

export default Menu;
