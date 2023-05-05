import axios from 'axios';

const base = 'https://10.0.0.105:5001';

export const axiosClient = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json"
  }
});
