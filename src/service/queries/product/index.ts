import { useQuery } from 'react-query';
import { axiosClient } from '../..'
import { AxiosError } from 'axios';
import { IProduct } from './types';

export const useGet = async () => {
  try {
    const { data } = await axiosClient.get(`/Product`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetProduct = () => useQuery<Array<IProduct>, AxiosError>('getProducts', useGet);
