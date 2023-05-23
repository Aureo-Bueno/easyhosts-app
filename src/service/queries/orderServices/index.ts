import { axiosClient } from '../../';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

export interface IOrderServices {
  id: string;
  name: string;
}

export interface IOrderServicesResponse {
  description: string;
}

export const useGet = async () => {
  try {
    const response = await axiosClient.get(`OrderService`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetId = async (id: string | undefined) => {
  const response = await axiosClient.get(`OrderService/getOrderServiceByUserId/${id}`);
  return response.data;
};

export const useGetOrderServiceId = (id: string | undefined) =>
  useQuery<IOrderServicesResponse[], AxiosError>('getOrderServiceByUserId', () => useGetId(id));
