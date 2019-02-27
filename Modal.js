import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,userToken } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {AsyncStorage} from 'react-native'

class Model extends Component {

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Modal');
      };

      static navigationOptions = {
        title: 'Please sign in',
      };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sign}>
                    <Text style={styles.Account}>create Account</Text>
                    <TextInput style={styles.box}
                    placeholder={'Email'}
                    placeholderTextColor={'white'}
                    />
                       <TextInput style={styles.box}
                    placeholder={'Password'}
                    placeholderTextColor={'white'}
                    />
                    
                <Button title="Sign in" onPress={this.props.navigation.navigate(userToken ? 'App' : 'Auth')} />
               
                </View>
            </View>
        );
    }
}
const saveUserId = async userId => {
    try {
      await AsyncStorage.setItem('userId', userId);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#39394a',
    },
    sign: {
        width:330,
        height:280,
        borderColor: 'white',
        borderWidth: 3,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    Account: {
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
    box: {
        width:270,
        height:50,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        marginVertical:15,
        color:'white'
    },
});

export default Model;
