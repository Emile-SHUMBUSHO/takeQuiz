import {store} from '.';

interface SignupData {
  phoneNumber: string;
  pin: string;
  firstName: string;
  lastName: string;
}

interface SignupResponse {
  success: boolean;
  message: string;
  error: string;
}

interface SignupState {
  loading: boolean;
  success: boolean;
  message: string;
  error: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  statusCode: number;
  message: string;
  token: string;
}

interface LoginState {
  loading: boolean;
  statusCode: number;
  message: string;
  token: string;
}

interface QuizResponse {
  statusCode: number;
  message: string;
  payload: any;
}

interface QuizState {
  loading: boolean;
  statusCode: number;
  message: string;
  payload: any;
}

interface TokenState {
  loading: boolean;
  error: string;
  route: string;
}

export enum QuetionsScreens {
  QUESTION_ONE = 'QUESTION_ONE',
  QUESTION_TWO = 'QUESTION_TWO',
  QUESTION_THREE = 'QUESTION_THREE',
  QUESTION_FOUR = 'QUESTION_FOUR',
  QUESTION_FIVE = 'QUESTION_FIVE',
  QUESTION_SIX = 'QUESTION_SIX',
  QUESTION_SEVEN = 'QUESTION_SEVEN',
  QUESTION_EIGHT = 'QUESTION_EIGHT',
  QUESTION_NINE = 'QUESTION_NINE',
  QUESTION_TEN = 'QUESTION_TEN',
  RESULT = 'RESULT',
}

interface UiState {
  currentQuestionScreen: QuetionsScreen;
}

type RootState = ReturnType<typeof store.getState>;
