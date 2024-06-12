import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import supabase from '../../../services/supabase';


export default function Register() {
  const navigation = useNavigation();
  
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [matricula, setMatricula] = useState('Não aluno');
  const [aluno, setAluno] = useState('naoaluno');
  
  const handleRegister = async () => {
    
    try {
      // Verifique se todos os campos estão preenchidos
      if (!nome || !cpf || !usuario || !senha || !matricula) {
        console.error('Por favor, preencha todos os campos.');
        return;
        
      }
      
  
      // Registre o usuário no Supabase
      const { user, error } = await supabase.auth.signUp({
        email: usuario,
        password: senha,

      });
      
  
      if (error) {
        console.error('Erro ao registrar:', error.message);
      } else {
        console.log('Usuário registrado com sucesso:', user);
  
        // Insira os detalhes adicionais do usuário na tabela do banco de dados
        const { data, error: insertError } = await supabase
          .from('usuario')
          .insert([
            {
              nome: nome,
              cpf: cpf,
              matricula: matricula,
              email: usuario,
              senha: senha,
              aluno: aluno,
              // Se houver outras colunas, insira-as aqui
            }
          ]);
  
        if (insertError) {
          console.error('Erro ao inserir usuário no banco de dados:', insertError.message);
        } else {
          console.log('Usuário inserido no banco de dados com sucesso:', data);
          navigation.navigate('SignIn');
        }
      }
    } catch (error) {
      console.error('Erro ao registrar:', error.message);
    }
  };
  
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem vindo(a)</Text>
      </View>
    <ScrollView>
      <Animatable.View style={styles.containerForm} animation='fadeInUp'>
        <Text style={styles.title}>Nome completo</Text>
        <TextInput
          placeholder='Digite seu nome'
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          placeholderTextColor='gray'
          />
        <Text style={styles.title}>CPF</Text>
        <TextInput
          placeholder='Digite seu CPF'
          keyboardType='number-pad'
          style={styles.input}
          onChangeText={setCpf}
          value={cpf}
          placeholderTextColor='gray'
          />

        
          <Text style={styles.title}>E-mail</Text>
          <TextInput
          placeholder='Digite seu e-mail'
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
        <TouchableOpacity style={styles.containerBotton} onPress={handleRegister}>
          <Text style={styles.bottonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <Text style={styles.bottonTitle}>Já possui uma conta?
          <TouchableOpacity style={styles.containerBotton2} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.bottonText2}> Entrar</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity style={styles.containerBotton3} onPress={() => navigation.navigate('Welcome2')}>
          <Text style={styles.bottonText}>Voltar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
    </View>
  )
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
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  containerBotton: {
    backgroundColor: '#313D6F',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottonText: {
    color: '#F6F6F6',
    fontSize: 18
  },
  bottonTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16
  },
  containerBotton2: {
    borderBottomWidth: 1,
    borderColor: '#0a147d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottonText2: {
    color: '#0a147d',
    top: 4
  },
  containerBotton3: {
    backgroundColor: '#313D6F',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: '34%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});