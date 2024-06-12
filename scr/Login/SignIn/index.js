import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import supabase from '../../../services/supabase';

export default function SignIn() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const { data: users, error } = await supabase
        .from('usuario')
        .select('*')
        .or(`email.eq.${usuario},matricula.eq.${usuario}`)
        .eq('senha', senha);
  
      if (error) {
        throw new Error(error.message);
      }
  
      if (users.length === 1) {
        const user = users[0];
  
        if (user.isAdmin) {
          navigation.navigate('RoutesUsuario');
        } else {
          navigation.navigate('RoutesUsuario');
        }
      } else if (users.length === 0) {
        alert('Email/matricula ou senha incorreto');
      } else {
        alert('Vários usuários encontrados com o mesmo email/senha');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Conecte-se</Text>
      </View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp'>
        <Text style={styles.title}>Usuário</Text>
        <TextInput 
          placeholder='Digite seu email ou matrícula'
          keyboardType='email-address'
          style={styles.input}
          onChangeText={setUsuario}
          value={usuario}
          placeholderTextColor='gray'
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput 
          placeholder='Digite sua senha'
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          placeholderTextColor='gray'
        />
        <TouchableOpacity style={styles.containerButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.buttonTitle}>Não possui uma conta?</Text>

        <TouchableOpacity style={styles.containerButtonC} onPress={() => navigation.navigate('Welcome2')}>
          <Text style={styles.buttonTextC}>Cadastre-se</Text>
        </TouchableOpacity>
        
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313D6F'
  },
  header: {
    marginTop: '20%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  headerText: {
    fontSize: 36,
    color: '#F6F6F6'
  },
  containerForm: {
    backgroundColor: '#F6F6F6',
    flex: 1,
    marginTop: '10%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 35
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  containerButton: {
    backgroundColor: '#313D6F',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  containerButtonC: {
    
    width: '100%',
    borderRadius: 4,
    paddingVertical: 5,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  
    

  },
  buttonText: {
    color: '#F6F6F6',
    fontSize: 18
  },
  buttonTextC: {
    color: '#313D6F',
    fontSize: 14,
    top: 5,
  },
  buttonTitle: {
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 14
  }
});
