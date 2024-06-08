import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Tela de menu (Vagas)

const Card = ({ job, salary, description, onDelete, local }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardJob}>{job}</Text>
      <Text style={styles.cardLocal}>{local}</Text>
      <Text style={styles.cardSalary}>{salary}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddCardButton = ({ onAdd }) => {
  const [job, setJob] = useState('');
  const [local, setLocal] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    onAdd({ job, salary, description, local });
    setJob('');
    setLocal('');
    setSalary('');
    setDescription('');
  };

  return (
    <View style={styles.containerForm2}>
      <TextInput
        style={styles.inputForm}
        placeholder="Job"
        value={job}
        onChangeText={text => setJob(text)}
        placeholderTextColor= 'gray'
      />
      <TextInput
        style={styles.inputForm}
        placeholder="Local"
        value={local}
        onChangeText={text => setLocal(text)}
        placeholderTextColor= 'gray'
      />
      <TextInput
        style={styles.inputForm}
        placeholder="Salário"
        value={salary}
        onChangeText={text => setSalary(text)}
        placeholderTextColor= 'gray'
      />
      <TextInput
        style={[styles.inputForm, styles.descriptionInput]}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={text => setDescription(text)}
        placeholderTextColor= 'gray'
        keyboardType='default'
      />
      <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar Job</Text>
      </TouchableOpacity>
    </View>
  );
};

const VagasAdmin = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cards').then((storedCards) => {
      if (storedCards) {
        setCards(JSON.parse(storedCards));
      }
    });
  }, []);

  const saveCards = async (updatedCards) => {
    await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  const handleAddCard = (newCard) => {
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    saveCards(updatedCards);
  };

  const handleDeleteCard = async (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
    saveCards(updatedCards);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerInput}>
          <View style={styles.input}>
            <Icon name='search' size={20}/>
            <TextInput placeholder='Pesquisar'/>
          </View>
        </View>
      </View>
      <ScrollView style={styles.containerForm}>
        <AddCardButton onAdd={handleAddCard} />
        {cards.map((card, index) => (
          <Card
            key={index}
            job={card.job}
            local={card.local}
            salary={card.salary}
            description={card.description}
            onDelete={() => handleDeleteCard(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};






const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#313D6F',
    
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
  containerForm2:{
    flex:1,
    backgroundColor:'#F6F6F6',
    marginBottom: '5%',
    marginTop: '5%',
  },
  inputForm: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  descriptionInput: {
    height: 100,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  card: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginTop: 5
  },
  cardJob: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardLocal: {
    fontSize: 16,
    color: 'gray',
  },
  cardSalary: {
    fontSize: 16,
    color: 'gray',
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
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
    paddingStart:'2%',
    borderWidth:1
  },
  
})
export default VagasAdmin;