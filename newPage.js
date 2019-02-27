import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Image, Animated, Easing,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import texts from './data/Text'
import FlatListComponent from './FlatListComponent';
import Facebook from './Facebook';
import Menu from './Menu'

class NewPage extends Component {

    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon:({tintColor})=>(
            <Image
                source={require('./photo/1.jpg')}
                style={styles.icon}
            />
),
    }

    // toggleDrawer = () => {
    //     this.props.navigationProps.toggleDrawer();
    //   }

    render() {

        // const opacity = this.animatedValue.interpolate({
        //     inputRange: [0, 0.5, 1],
        //     outputRange: [0, 1, 0]
        //   })

        return (
            <View style={styles.container}>

               <FlatList 
               data={texts}
               keyExtractor={item => item.title}
               renderItem={({item,index}) =>(
                <FlatListComponent item={item} index={index}/>
               )}
               />

            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:30,}}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Facebook')}>
                <Image source={require('./photo/facebook.png')} style={styles.pic}/>
                </TouchableHighlight>
                <Image source={require('./photo/twitter.png')} style={styles.pic}/>
                <Image source={require('./photo/instagram.png')} style={styles.pic}/>
                <TouchableHighlight onPress={() => this.props.navigation.openDrawer('Menu')}>
                <Image source={require('./photo/whatsapp.png')} style={styles.pic}/>
                </TouchableHighlight>
            </View>

            </View>
        );
    }
}

const AppNavigator = createDrawerNavigator(

    {
        Back : NewPage,
        Facebook : Facebook,
        Menu : Menu
    },
    {
        drawerWidth : 200
    },
    {
        initialRouteName : 'Back'
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:30,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
  
    line:{
        height:1,
        width:300,
        backgroundColor:'black',
        marginVertical:30,
    },
    pic:{
        width:25,
        height:25,
        
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius:100,
}
});

export default createAppContainer(AppNavigator );

// export default newPage;
