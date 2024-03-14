import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {
  LoginData,
  LoginResponse,
  QuestionsResponse,
  QuizResponse,
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
        const response = await axios.post(`/auth/login`, {...data});
        return response.data as LoginResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.message});
      }
    },
  );

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

  quiz = createAsyncThunk('quiz', async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(`/quiz`, {});
      return response.data as QuizResponse;
    } catch (error: AxiosError | any) {
      return rejectWithValue({error: error?.message});
    }
  });

  questionsForAquiz = createAsyncThunk('questions', async (data:{id:string}, {rejectWithValue}) => {
    try {
      const response = await axios.get(`/questions?quiz=${data.id}`, {});
      return response.data as QuestionsResponse;
    } catch (error: AxiosError | any) {
      return rejectWithValue({error: error?.message});
    }
  });
}

export const apis = new Api();
