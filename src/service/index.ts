import axios from 'axios';

const base = 'http://10.0.0.107:3000';

export const axiosClient = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json"
  }
});
