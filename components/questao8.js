import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao9 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;
var song3 = null;
var song4 = null;
var song5 = null;

class questao8 extends Component{
  static navigationOptions = {
    title:'questao8',
  }
  constructor(props){
    super(props)
    this.state = { pause: false }
  }

  componentWillMount(){
    song = new SoundPlayer('questaoconta2.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    });
    song3 = new SoundPlayer('erro3.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    });

    song4 = new SoundPlayer('erro4.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    });

    song5 = new SoundPlayer('erro5.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    });
  }

  onPressButtonPlay() {
    if (song != null) {
      song.play((success) =>{
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
      });
    }
  }

  erro1() {
    if (song3 != null) {
      song3.play((success) =>{
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT); 
      });
    }
  }

  erro2() {
    if (song4 != null) {
      song4.play((success) =>{
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT); 
      });
    }
  }

  erro3() {
    if (song5 != null) {
      song5.play((success) =>{
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT); 
      });
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]} onLoad={this.onPressButtonPlay.bind(this)}>
          <TouchableOpacity style={styles.play} onPress={this.onPressButtonPlay.bind(this)}>
          <Image  style={styles.player} source={require('../img/player.png')} />
        </TouchableOpacity>
          <View  style={styles.conta}>
            <Image source={require('../img/atividades-6-7/atividade8/p2.jpg')} style={styles.contaimg}/>
          </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={this.erro1.bind(this)}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade8/dd.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={this.erro3.bind(this)}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade8/ee.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={this.erro2.bind(this)}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade8/ff.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao9', {numero8:this.state.numero8 + 1})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade8/gg.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 35,
    textAlign: "center",
    color:'purple',
  },
  icones: {
    width: "40%",
    height: "90%",
    borderStyle:"solid",
  },
  imagem: {
    width: "100%",
    height: "100%",
    borderRadius: 45,
    borderWidth:4,
    borderColor:"purple",
  },
  alternativas: {
    marginLeft: "10%",
    marginRight: "10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  player: {
    width:"100%",
    height:"100%"
  },
  play: {
    width:"39%",
    height:"39%",
    flex: 1,
    flexDirection: "row",
    marginLeft:"28%"
   },
   conta: {
    width:"40%",
    marginLeft:"16%",
   },
   contaimg: {
    borderRadius: 16,
   }
});
