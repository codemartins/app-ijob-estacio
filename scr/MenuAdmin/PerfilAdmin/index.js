import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';


//Tela de menu (Perfil)
export default function Perfil () {
  const navigation = useNavigation()

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerPhoto}>
          <Icon 
          name='account-circle' 
          size={200}
          color='#F6F6F6'
          />
        </View>
      </View>

      <ScrollView>  
          <View style={styles.containerForm}>
            <Text style={styles.text}>Dados pessoais</Text>
          </View>

          <View style={styles.containerForm2}>
            <Text style={styles.text}>curriculo</Text>
          </View>

          <View style={styles.logout}>
            <Icon.Button
              name='logout'
              size='30'
              color='red'
              backgroundColor='#313D6F'
              onPress={ () => navigation.navigate('Welcome')}
            >Logout</Icon.Button>
          </View>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#313D6F'
  },
  header:{
    marginTop:'20%',
    marginBottom:'5%',
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  containerPhoto:{
    marginTop:10,
    alignItems:'center'
    
  },
  containerForm:{
    backgroundColor:'#F6F6F6',
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    paddingStart: '5%',
    paddingEnd:'5%',
    height:'90%',
    marginBottom:20

  },
  containerForm2:{
    backgroundColor:'#F6F6F6',
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    paddingStart: '5%',
    paddingEnd:'5%',
    height:'90%',
    marginBottom:20
  },
  text:{
    fontSize:'30',
  },
  logout:{
    alignItems:'center',
  },
  
});