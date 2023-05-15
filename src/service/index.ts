import axios from 'axios';

const base = 'http://172.20.10.2:3000';

export const axiosClient = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json"
  }
});
