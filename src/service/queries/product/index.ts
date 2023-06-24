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

export const useGetById = async (id: string | undefined) => {
  try {
    const { data } = await axiosClient.get(`/Product/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetProduct = () => useQuery<Array<IProduct>, AxiosError>('getProducts', useGet);

export const useGetProductById = (id: string | undefined) =>
  useQuery<IProduct, AxiosError>('getProductById', () => useGetById(id), { refetchInterval: 5000 });

