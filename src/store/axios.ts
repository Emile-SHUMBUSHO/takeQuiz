import axios from 'axios';
import {apiLink } from '../constants/config';

const axiosInstance = axios.create({
  baseURL: apiLink,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
