import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const getHeaders = async () => {
  try {
    const jsonToken = await AsyncStorage.getItem('token');
    const token = jsonToken !== null ? JSON.parse(jsonToken) : null;
    return {token};
  } catch (error) {
    return {error: error};
  }
};
