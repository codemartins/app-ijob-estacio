import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

//Segunda tela de login (aluno/nao aluno)
export default function Welcome2() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      
      <View>
        <Image 
        source={require('../../assets/LogoiJob2.png')}
        style={{width:'100%', height:250}}
        resizeMode='contain'
        />
      </View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp'>
        <Text style={styles.containerTitle}> Voce é...</Text>
        
        <TouchableOpacity style={styles.containerButton} onPress={ () => navigation.navigate('Register')}>
          <Text style={styles.buttonText}> Aluno </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButton2} onPress={ () => navigation.navigate('Register2')}>
          <Text style={styles.buttonText2}> Não aluno </Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F6F6F6',
    justifyContent:'center',
  },
  containerForm:{
    alignItems:'center',
    margin:10,
    textAlign: 'center',
    
  },
  containerTitle:{
    fontSize: 22,
    color:'#313D6F',
    marginTop:-10,
    
  },
  containerButton:{
    backgroundColor:'#313D6F',
    width:'90%',
    margin:20,
    borderRadius:20,
    paddingVertical:8,
    justifyContent:'center',
    alignItems:'center',
    top:'50%'
  },
  containerButton2:{
    backgroundColor:'#F6F6F6',
    width:'90%',
    borderRadius:20,
    borderWidth:1,
    borderColor:'#313D6F',
    paddingVertical:8,
    justifyContent:'center',
    alignItems:'center',
    top:'50%'
  },
  buttonText:{
    fontSize: 30,
    color:'#F6F6F6',
    margin:10,
    padding:4
  },
  buttonText2:{
    fontSize: 30,
    color:'#313D6F',
    margin:10,
    padding:4
  }

})