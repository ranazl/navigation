import React, { Component } from 'react';
import { View, Text, StyleSheet, Image , TouchableHighlight,Animated,Easing} from 'react-native';

export default class FlatListComponent extends Component {

    constructor (props) {
        super(props);
        this.state={
            anime:new Animated.Value(0)
        }
      }
    
    componentDidMount () {
        this.animate()
      }
    
      animate () {
        Animated.timing(
          this.state.anime,
          {
            toValue: 1,
            duration: 3000,
            delay:(this.props.index + 1)*500,
            easing: Easing.linear
          }
        ).start(() => this.animate())
      }

    render() {
        return (
            <Animated.View style={{opacity:this.state.anime}} >
                <Text style={styles.comment}>{this.props.item.title}</Text>
                {this.props.item.khat && <View style={{width:300,height:1,backgroundColor:'black'}}></View>}
            </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    comment: {
        fontSize:22,
        fontWeight: 'bold',
        color:'black',
        paddingVertical: 15,
    },
});
