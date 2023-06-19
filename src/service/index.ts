import axios from 'axios';

const base = 'http://10.0.0.111:3000/api/easyhosts';

export const axiosClient = axios.create({
  baseURL: base,
  headers: {
    'Content-Type': 'application/json',
  },
});
