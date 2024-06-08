import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Keys = () => {
  const [isLoading, setIsLoading] = useState(false);

  const clearAsyncStorage = async () => {
    try {
      setIsLoading(true);
      await AsyncStorage.clear();
      setIsLoading(false);
      Alert.alert('Success', 'AsyncStorage cleared successfully.');
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', 'Failed to clear AsyncStorage.');
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This screen will clear AsyncStorage data.</Text>
      <Button title="Clear AsyncStorage" onPress={clearAsyncStorage} disabled={isLoading} />
      {isLoading && <Text>Clearing AsyncStorage...</Text>}
    </View>
  );
};

export default Keys;
