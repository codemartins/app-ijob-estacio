import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


//Primeira tela de login (entrar/cadastre-se)
export default function Welcome () {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      
      <View>
        <Image 
        source={require('../../assets/LogoiJob1.png')}
        style={{width:'100%', height:250}}
        resizeMode='contain'
        />
      </View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp'>
        <Text style={styles.containerTitle}> Conecte-se com a oportunidade</Text>
        
        <TouchableOpacity style={styles.containerButton} onPress={ () => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}> Entrar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButton2} onPress={ () => navigation.navigate('Welcome2')}>
          <Text style={styles.buttonText2}> Cadastre-se </Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#313D6F',
    justifyContent:'center',
  },
  containerForm:{
    alignItems:'center',
    margin:10,
    textAlign: 'center',
    
  },
  containerTitle:{
    fontSize: 22,
    color:'#F6F6F6',
    marginTop:-10,
    
  },
  containerButton:{
    backgroundColor:'#F6F6F6',
    width:'90%',
    margin:20,
    borderRadius:20,
    paddingVertical:8,
    justifyContent:'center',
    alignItems:'center',
    top:'50%'
  },
  containerButton2:{
    backgroundColor:'#313D6F',
    width:'90%',
    borderRadius:20,
    borderWidth:1,
    borderColor:'#F6F6F6',
    paddingVertical:8,
    justifyContent:'center',
    alignItems:'center',
    top:'50%'
  },
  buttonText:{
    fontSize: 30,
    color:'#313D6F',
    margin:10,
    padding:4
  },
  buttonText2:{
    fontSize: 30,
    color:'#F6F6F6',
    margin:10,
    padding:4
  }

})