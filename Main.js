import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions , Image , ActivityIndicator} from 'react-native';
import App from './App';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
let dim = Dimensions.get('window');

class Main extends Component {

componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Home'),700)
}

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('./photo/first.jpg')}
                    style={styles.photo}
                    />
                </View>
                <View style={{flex: 1,alignSelf: 'flex-end',marginBottom:30,}}>
                    <ActivityIndicator color={'#108282'} size={'large'}/>
                </View>
            </View>
        );
    }
}

const RootSwitch = createSwitchNavigator(
    {
        Main: Main,
        Home: App
    }
);


const AppContainer = createAppContainer(RootSwitch);

export default class Karim extends Component {
    render() {
        return <AppContainer/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    photo:{
        width:dim.width,
        height:dim.height,
        position:'absolute',
    }
});

