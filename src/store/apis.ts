import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {
  CreateQuestionData,
  CreateQuizData,
  LoginData,
  LoginResponse,
  QuestionsResponse,
  QuizResponse,
  SignupData,
  SignupResponse,
} from './types';
import {Buffer} from 'buffer';
import axios from './axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from '../constants/config';

class Api {
  resetAll = createAction('resetAll');

  signup = createAsyncThunk(
    'signup',
    async (data: SignupData, {rejectWithValue}) => {
      try {
        const response = await axios.post(`/auth/register`, {...data});
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
        storeData({key: 'role', value:payload.role});
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

  createQuiz = createAsyncThunk(
    'createQuiz',
    async (data: CreateQuizData, {rejectWithValue}) => {
      try {
        const response = await axios.post(`/quiz`, {...data});
        return response.data as QuizResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.message});
      }
    },
  );

  deleteQuiz = createAsyncThunk(
    'deleteQuiz',
    async (data: {id: string | number}, {rejectWithValue}) => {
      try {
        const response = await axios.delete(`/quiz/${data.id}`, {});
        return response.data as QuizResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.message});
      }
    },
  );

  updateQuiz = createAsyncThunk(
    'updateQuiz',
    async (data: CreateQuizData, {rejectWithValue}) => {
      try {
        const response = await axios.patch(`/quiz/${data.id}`, {
          title: data.title,
          instructions: data.instructions,
        });
        return response.data as QuizResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.message});
      }
    },
  );

  quiz = createAsyncThunk('quiz', async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(`/quiz`, {});
      return response.data as QuizResponse;
    } catch (error: AxiosError | any) {
      return rejectWithValue({error: error?.message});
    }
  });

  createQuestion = createAsyncThunk(
    'createQuestion',
    async (data: CreateQuestionData, {rejectWithValue}) => {
      try {
        const response = await axios.post(`/questions`, {...data});
        return response.data as QuestionsResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.message});
      }
    },
  );

  questionsForAquiz = createAsyncThunk(
    'questions',
    async (data: {id: string}, {rejectWithValue}) => {
      try {
        const response = await axios.get(`/questions?quiz=${data.id}`, {});
        return response.data as QuestionsResponse;
      } catch (error: AxiosError | any) {
        return rejectWithValue({error: error?.message});
      }
    },
  );


}

export const apis = new Api();
