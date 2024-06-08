import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import supabase from '../../../services/supabase';

const Card = ({ job, salary, description, local, onSubscribe }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardJob}>{job}</Text>
      <Text style={styles.cardLocal}>{local}</Text>
      <Text style={styles.cardSalary}>{salary}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity onPress={onSubscribe} style={styles.subscribeButton}>
        <Text style={styles.subscribeButtonText}>Inscrever</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddCardButton = ({ onAdd }) => {
  const [job, setJob] = useState('');
  const [local, setLocal] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCard = () => {
    if (!job || !local || !salary || !description) return;
    const newCard = { job, local, salary, description };
    onAdd(newCard);
    setJob('');
    setLocal('');
    setSalary('');
    setDescription('');
  };

  return (
    <View style={styles.addCardContainer}>
      <TextInput
        style={styles.input}
        placeholder="Cargo"
        value={job}
        onChangeText={setJob}
      />
      <TextInput
        style={styles.input}
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
      />
      <TextInput
        style={styles.input}
        placeholder="Salário"
        value={salary}
        onChangeText={setSalary}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const Vagas = () => {
  const [cards, setCards] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchCards() {
      const { data, error } = await supabase.from('cards').select('*');
      if (error) {
        console.error('Error fetching cards:', error.message);
      } else {
        setCards(data);
      }
    }

    fetchCards();
  }, []);

  const handleSubscribeCard = async (index) => {
    // Implemente a lógica de inscrição no card aqui
    // Por exemplo, redirecionar para uma tela de detalhes do card
    navigation.navigate('DetalhesVaga', { cardIndex: index });
  };

  const handleAddCard = async (newCard) => {
    const { data, error } = await supabase.from('cards').insert([newCard]);
    if (error) {
      console.error('Error adding card:', error.message);
    } else {
      setCards([...cards, data[0]]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name='search' size={20} color='gray'/>
          <TextInput placeholder='Pesquisar' style={styles.searchInput} />
        </View>
      </View>

      <ScrollView style={styles.cardsContainer}>
        <AddCardButton onAdd={handleAddCard} />
        {cards.map((card, index) => (
          <Card
            key={index}
            job={card.job}
            local={card.local}
            salary={card.salary}
            description={card.description}
            onSubscribe={() => handleSubscribeCard(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313D6F'
  },
  header: {
    marginTop: '20%',
    marginBottom: '5%',
    padding: '5%',
  },
  searchContainer: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  cardsContainer: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: '5%',
  },
  card: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginTop: 5,
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
  subscribeButton: {
    backgroundColor: 'green',
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  subscribeButtonText: {
    color: 'white',
    fontSize: 14,
  },
  addCardContainer: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Vagas;