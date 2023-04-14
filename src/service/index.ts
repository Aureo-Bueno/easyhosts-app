import Axios from 'axios';

const base = 'https://localhost:5001/';

export const axiosClient = Axios.create({
  baseURL: base,
});
