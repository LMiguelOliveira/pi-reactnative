import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao56 from '.';

var SoundPlayer = require('react-native-sound');
var song3 = null;
var song4 = null;
var song5 = null;


class questao55 extends Component{
  static navigationOptions = {
    title:'questao55',
  }
  constructor(props){
    super(props)
    this.state = { pause: false }
  }

  componentWillMount(){

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
      <ImageBackground  source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Qual o nome desse monumento?
          </Text>
          <Image style={styles.img_questao} source={require('../img/atividades-8-9/coliseu.jpeg')} />
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={this.erro3.bind(this)} >
            <View style={styles.imagem}>
              <Text style={styles.opcoes}>Torre Eiffel</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={this.erro1.bind(this)} >
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >Cristo Redentor</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={this.erro2.bind(this)} >
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >Panteão</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones}onPress={()=> navigate('questao56')}>
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >Coliseu</Text>

            </View>

          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao55;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pergunta: {
    marginBottom: "10%",
    alignItems:"center",
    backgroundColor:"white",
    borderRadius: 16,
    marginTop: "8%",
    marginRight: "8%",
    marginLeft: "8%",
    borderWidth:4,
    borderColor:"purple",
    padding:10
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    color:"purple",
  },
  icones: {
    width: "48%",
    //backgroundColor:'#fff',
    height: "65%",
    borderStyle:"solid",
    alignItems:"center",
  
  },
  imagem: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"center",
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
   img_questao:{
     width: 250,
     borderRadius: 5,
   },
   opcoes:{
     fontWeight:"bold",
     fontSize:20,
     color:"#0b44f5"
      
   }

});
