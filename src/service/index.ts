import axios from 'axios';

const base = 'http://192.168.0.19:3000/api/easyhosts';

export const axiosClient = axios.create({
  baseURL: base,
  headers: {
    'Content-Type': 'application/json',
  },
});
