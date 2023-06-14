import { axiosClient } from '../../';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

export interface IOrderServices {
  id: string,
  name: string,
}

export interface IOrderServicesResponse {
  id: string,
  description: string,
  userId: string,
  status: string,
}

export const useGet = async () => {
  try {
    const { data } = await axiosClient.get<IOrderServicesResponse>(`/OrderService`);
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
  useQuery<Array<IOrderServicesResponse>, AxiosError>('getOrderServiceByUserId', () => useGetId(id));
