import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Facebook extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop:20}}>
                    <Text style={styles.textHeader}>Show</Text>
                </View>
                     <Text style={styles.text}>{this.props.navigation.getParam('text')}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text:{
        color:'black',
        fontSize: 18,
    },
    textHeader:{
        color:'black',
        fontSize: 22,
        fontWeight:'bold',
        paddingVertical:20 ,
    }
});



export default Facebook;
