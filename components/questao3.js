/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import questao4 from './questao4.js';


type Props = {};
export default class questao3 extends Component<Props> {
  static navigationOptions = {
    title:'questao3',
  }
    constructor(props){
    super(props)
    this.state = {numero3:this.props.navigation.state.params.numero2}
}
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')}
                    style={[styles.container,{width:"100%", height:"100%"}]}>
      <View style={styles.pergunta}>
        <Text style={styles.texto}>
          Toque nas uvas verdes.
        </Text>
      </View>
      <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao4', {numero3:this.state.numero3 + 0})}>
                <Image  style={styles.imagem} source={require('../img/atividade3/i.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao4', {numero3:this.state.numero3 + 0})}>
                <Image style={styles.imagem} source={require('../img/atividade3/j.jpg')} />
          </TouchableOpacity>
      </View>

      <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao4', {numero3:this.state.numero3 + 1})}>
                <Image style={styles.imagem} source={require('../img/atividade3/k.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao4', {numero3:this.state.numero3 + 0})}>
                <Image style={styles.imagem} source={require('../img/atividade3/l.jpg')} />
          </TouchableOpacity>
      </View>
      </ImageBackground>  
    );
  }
}

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
    },
    texto: {
      fontSize: 35,
      textAlign: "center",
      color:"purple",
    },
    icones: {
      width: "48%",
      height: "65%",
      borderStyle:"solid",
    },
    imagem: {
      width: "100%",
      height: "100%",
      borderRadius: 65,
      borderWidth:4,
      borderColor:"purple",
    },
    alternativas: {
      marginLeft: "10%",
      marginRight: "10%",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    }
    
});