import axios from 'axios';
import { IBedroom } from './types';

const baseURL = 'https://localhost:5001/';

export async function fetchBedrooms(): Promise<IBedroom[]> {
  const { data } = await axios.get(`${baseURL}/api/easyhosts/Bedroom/getBedrooms/`);
  return data;
}
