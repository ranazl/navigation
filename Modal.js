import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Model extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sign}>
                    <Text style={styles.Account}>create Account</Text>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
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
        backgroundColor: '#050550',
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
    },
});

export default Model;
