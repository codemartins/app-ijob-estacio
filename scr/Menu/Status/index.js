import React, { useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';



//Tela de menu (Status)
export default function Status () {
  return(
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.containerInput}>
            <View style={styles.input}>
              <Icon name='search' size={20}/>
              <TextInput placeholder='Pesquisar'/>
            </View>
          </View>
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.text}>tela status</Text>
        </View>
      </View>

    );
};

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
  containerForm:{
    flex:1,
    backgroundColor:'#F6F6F6',
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    paddingStart: '5%',
    paddingEnd:'5%',

  },
  text:{
    fontSize:'30',
    
  },
  containerInput:{
    backgroundColor:'#F6F6F6',
    borderRadius:10,
    marginTop:10,
    fontSize:16,
    
  },
  input:{
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop:5,
    paddingStart:'2%'

  },


})
