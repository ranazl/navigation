import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Image, Animated, Easing} from 'react-native';
import texts from './data/Text'
import FlatListComponent from './FlatListComponent';

export default class newPage extends Component {

   

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
                <Image source={require('./photo/facebook.png')} style={styles.pic}/>
                <Image source={require('./photo/twitter.png')} style={styles.pic}/>
                <Image source={require('./photo/instagram.png')} style={styles.pic}/>
                <Image source={require('./photo/whatsapp.png')} style={styles.pic}/>
            </View>

            </View>
        );
    }
}

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
        
    }
});

// export default newPage;
