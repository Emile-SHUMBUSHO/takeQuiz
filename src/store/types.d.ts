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
  phoneNumber: string;
  pin: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  error: string;
}

interface LoginState {
  loading: boolean;
  success: boolean;
  message: string;
  error: boolean;
  token: string;
}

interface ProfileState {
  loading: boolean;
  message: string;
  error: boolean;
  ProfileData: any;
}

interface ProfileResponse {
  error: boolean;
  message: string;
  data: any;
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
}

interface UiState {
  currentQuestionScreen: QuetionsScreen;
}

type RootState = ReturnType<typeof store.getState>;
