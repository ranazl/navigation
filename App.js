import React, {Component} from 'react';
import {StyleSheet, Text, View , Image , ScrollView , FlatList , TouchableHighlight, Button,TouchableOpacity,TextInput} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation'
import persons from './data/pic'
import NewPage from './NewPage'
import HeaderNavi from './HeaderNavi'
import Facebook from './Facebook'
import Modal from './Modal'
import Menu from './Menu'



class App extends Component {

constructor(props){
  super(props);

  this.state={
    text:'',
    count:0
  }
}

newText=(text)=>{
  this.setState({
    text:text
  })
}

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={()=> navigation.navigate('Left')}
          title="Sign in"
          color="#c2a216"
        />
      ),

      headerRight: (
        <TouchableHighlight
        onPress={() => this.props.navigation.openDrawer()}
        >
           <Image source={require('./photo/menu.png')}/>
        </TouchableHighlight>
      ),
      
      // headerRight: (
      //   <Button
      //     onPress={navigation.getParam('increaseCount')}
      //     title="Press"
      //     color="#c2a216"
      //   />
      // ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }



  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.header1}>
            <View style={styles.circle}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>fizy</Text>
            {/* <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>{this.state.count}</Text> */}
            </View>
            <TouchableHighlight
            onPress={() => this.props.navigation.navigate('NewPage')}
            >
               <Image source={require('./photo/menu.png')}/>
            </TouchableHighlight>
          </View>
        </View>
    <View style={styles.main}>
        
        <Text style={styles.mainText}>Millions of songs</Text>
        <Text style={styles.mainText}>video clips,</Text>
        <Text style={styles.mainText}>curated playlists</Text>
        <Text style={styles.mainText}>and more!</Text>

      <View style={styles.mainText2}>
        <Text style={styles.mainText3}>the easiest way to discover and listen to music</Text>
        <Text style={styles.mainText3}>is fizy! Search the artists you like,</Text>
        <Text style={styles.mainText3}>listen to your favorit songs or watch video clips</Text>
      </View>  

      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Facebook',{text:this.state.text})}>
      
       <Text style={styles.buttonText}>Get  Started</Text>
     
      </TouchableOpacity>

      <TextInput style={styles.buttonText} 
        placeholder={'Learn more'}
        onChangeText={this.newText.bind(this)}
        />

    </View>

        <View style={styles.footer}>


        <FlatList
                data={persons}
                keyExtractor={item => item.title}
                horizontal={true}
                renderItem={({ item }) => (
                    <Image
                      source={item.image}
                      style={styles.box}
                    />
                )}
              />

<FlatList
                data={persons}
                keyExtractor={item => item.title}
                horizontal={true}
                renderItem={({ item }) => (
                    <Image
                      source={item.image}
                      style={styles.box}
                    />
                )}
              />

        </View>

        </ScrollView>
      </View>
    );
  }
}

const AppNavigator  = createDrawerNavigator(
  {
    Home : App,
    NewPage : NewPage,
    Facebook : Facebook,
    Left : Modal
  },
  {
    drawerWidth : 200,
    contentComponent:Menu
  },
  {
    mode : 'modal'
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
  main: {
    flex:5,
    backgroundColor:'#f1c918',
    justifyContent:'flex-start',
    alignItems: 'center',
  },
  mainText: {
    fontSize:25,
    color:'black',
    fontWeight:'bold',
  },
  mainText2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:18,
  },
  mainText3: {
   color:'black'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    width:220,
    height:45,
    backgroundColor:'black'
  },
  more:{
    color:'black',
    fontSize:18,
    marginTop:18,
    fontWeight:'bold',
  },
  buttonText:{
    color:'#fff',
    fontSize:18,
  },
  footer: {
    flex:2,
    backgroundColor:'#f1c918'
  },
  flati:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal:20,
    width:150,
    height:150,
    backgroundColor:'black'
  },
  box: {
    width: 170, 
    height: 170, 
    marginHorizontal:15,
    marginVertical:15,
  },
});

export default createAppContainer(AppNavigator );

