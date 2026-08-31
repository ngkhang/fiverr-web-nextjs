import { serverEnv } from '@/config/env.server';
import axios from 'axios';

// Creating SERVER-ONLY axios instance
export const axiosServer = axios.create({
  baseURL: serverEnv.ACADEMY_API_BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    tokenCybersoft: serverEnv.ACADEMY_TOKEN,
  },
});

// Add a request interceptor

// Add a response interceptor
