import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import resultados2 from '.';

class questao43 extends Component{
  static navigationOptions = {
    title:'questao43',
  }
  constructor(props){
    super(props)
    this.state = {numero43:this.props.navigation.state.params.numero42}
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground  source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Complete a palavra:
          </Text>
          <Text style={styles.texto}>
            DE__NVOL_IM_NTO
          </Text>
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('resultados2')}>
            <Text>
              S - R - F - D
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('resultados2')}>
            <Text>
              I - U - O - A
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('resultados2')}>
            <Text>
              U - P - O - A
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('resultados2')}>
            <Text>
              S - E - V - E
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao43;
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
    backgroundColor:'#fff',
    height: "65%",
    borderStyle:"solid",
  },
  imagem: {
    width: "100%",
    height: "100%",

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

});
