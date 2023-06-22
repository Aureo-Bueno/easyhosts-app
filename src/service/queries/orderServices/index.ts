import { axiosClient } from '../../';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { IOrderServicesResponse } from './@types';

export const useGet = async () => {
  try {
    const { data } = await axiosClient.get(`/OrderService`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetId = async (id: string | undefined) => {
  const { data } = await axiosClient.get(`/OrderService/getOrderServiceByUserId/${id}`);
  return data;
};

export const useGetOrderServiceById = (id: string | undefined) =>
  useQuery<Array<IOrderServicesResponse>, AxiosError>('getOrderServiceByUserId', () => useGetId(id), { refetchInterval: 5000 });

export const useGetOrderServiceAll = () => useQuery<Array<IOrderServicesResponse>, AxiosError>('getOrderServices', useGet, { refetchInterval: 5000 });
