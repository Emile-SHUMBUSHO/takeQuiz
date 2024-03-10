import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {
  LoginData,
  LoginResponse,
  ProfileResponse,
  SignupData,
  SignupResponse,
} from './types';
import {getHeaders} from '../constants/config';
import {Buffer} from 'buffer';
import axios from './axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Api {
  resetAll = createAction('resetAll');

  signup = createAsyncThunk(
    'signup',
    async (data: SignupData, {rejectWithValue}) => {
      try {
        const response = await axios.post(`/users/signup`, {...data});
        return response?.data as SignupResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.response?.data?.message});
      }
    },
  );

  login = createAsyncThunk(
    'login',
    async (data: LoginData, {rejectWithValue}) => {
      try {
        const response = await axios.post(`/users/login`, {...data});
        return response.data as LoginResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.response?.data?.message});
      }
    },
  );

  profile = createAsyncThunk('profile', async (_, {rejectWithValue}) => {
    try {
      const {token} = await getHeaders();
      const response = await axios.post(
        `/users/profile`,
        {},
        {
          headers: {
            'x-auth': token,
          },
        },
      );
      return response.data as ProfileResponse;
    } catch (error: AxiosError | any) {
      return rejectWithValue({error: error?.response?.data?.message});
    }
  });

  authInit = createAsyncThunk('init', async (_, {rejectWithValue}) => {
    try {
      const jsonToken = await AsyncStorage.getItem('token');
      const token = jsonToken !== null ? JSON.parse(jsonToken) : null;
      if (token) {
        const parts = token
          .split('.')
          .map((part: string) =>
            Buffer.from(
              part.replace(/-/g, '+').replace(/_/g, '/'),
              'base64',
            ).toString(),
          );
        const payload = JSON.parse(parts[1]);
        const today = new Date();
        return payload.exp * 1000 > today.getTime();
      } else return false;
    } catch (error: any) {
      return rejectWithValue({error: error});
    }
  });

  logout = createAsyncThunk('init', async (_, {rejectWithValue}) => {
    try {
      const response = await AsyncStorage.removeItem('token');
      return response;
    } catch (error: any) {
      return rejectWithValue({error: error});
    }
  });
}

export const apis = new Api();
