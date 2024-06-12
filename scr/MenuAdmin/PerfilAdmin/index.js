import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import supabase from '../../../services/supabase';

export default function Perfil() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const { data, error } = await supabase.from('usuario').select('*').limit(1).single();
        if (error) {
          throw new Error('Failed to fetch user data');
        }
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerPhoto}>
          <Icon name='account-circle' size={200} color='#F6F6F6' />
        </View>
      </View>

      <ScrollView>
        <View style={styles.containerForm}>
          <Text style={styles.text}>Dados pessoais</Text>
          {loading ? (
            <ActivityIndicator size='large' color='#0000ff' />
          ) : error ? (
            <Text style={styles.errorText}>Erro ao carregar dados do usuário</Text>
          ) : (
            <View>
              <Text style={styles.infoUser}>ID: {userData?.id_usuario}</Text>
              <Text style={styles.infoUser}>Nome: {userData?.nome}</Text>
              <Text style={styles.infoUser}>CPF: {userData?.cpf}</Text>
              <Text style={styles.infoUser}>E-mail: {userData?.email}</Text>
              <Text style={styles.infoUser}>Matrícula: {userData?.matricula}</Text>
            </View>
          )}
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.text}>Perfil Administrador</Text>
          <Text>Anuncie já as vagas disponíveis na aba "Jobs". </Text>
          {/* Add your resume-related components here */}
        </View>

        <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Welcome')}>
          <Icon name='logout' size={30} color='red' />
          <Text style={{ color: 'red', marginLeft: 10 }}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313D6F'
  },
  infoUser: {
    fontSize: 18,
    color: '#000'
  },
  header: {
    marginTop: '20%',
    marginBottom: '5%',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerPhoto: {
    marginTop: 10,
    alignItems: 'center'
  },
  containerForm: {
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
    padding: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 30,
    marginBottom: 10
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});
