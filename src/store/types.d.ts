import {store} from '.';
import {Option} from './helper';

interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface SignupResponse {
  statusCode: number;
  message: string;
}

interface SignupState {
  loading: boolean;
  statusCode: number;
  message: string;
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

interface CreateQuizData {
  title: string;
  instructions: string;
  id?: string | number;
}

interface CreateQuestionData {
  questionText: string;
  quiz: string | number;
  options: Option[];
}

interface QuestionResponse {
  statusCode: number;
  message: string;
  payload: any;
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

interface CreateQuizState {
  createQuizLoading: boolean;
  createQuizStatusCode: number;
  createQuizMessage: string;
}

interface DeleteQuizState {
  deleteQuizLoading: boolean;
  deleteQuizStatusCode: number;
  deleteQuizMessage: string;
}

interface UpdateQuizState {
  updateQuizLoading: boolean;
  updateQuizStatusCode: number;
  updateQuizMessage: string;
}

interface QuestionsResponse {
  statusCode: number;
  message: string;
  payload: any;
}

interface CreateQuestionState {
  createQuestionLoading: boolean;
  createQuestionStatusCode: number;
  createQuestionMessage: string;
}

interface QuestionsState {
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
