import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export const apiLink = 'http://10.0.2.2:3000/api/v1';

type IAsyncStorage = {
  key: string;
  value: any;
};

export const storeData = async ({key, value}: IAsyncStorage) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return {success: true, message: 'Data stored successfully', error: false};
  } catch (err) {
    return {success: false, message: err, error: true};
  }
};

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(key);
        setValue(storedValue !== null ? JSON.parse(storedValue) : null);
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, [key]);

  const updateStorage = async (newValue: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (error) {
      console.error('Error storing data to AsyncStorage:', error);
    }
  };

  return [value, updateStorage];
};

export const getHeaders = async () => {
  try {
    const jsonToken = await AsyncStorage.getItem('token');
    const token = jsonToken !== null ? JSON.parse(jsonToken) : null;
    return {token};
  } catch (error) {
    return {error: error};
  }
};
