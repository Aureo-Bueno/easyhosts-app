import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { axiosClient } from '../../';

export interface IBedroom {
  id: number,
  name: string,
  number: number
}

export const useGet = async () => {
  try {
    const response = await axiosClient.get(`/api/easyhosts/Bedroom`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const usePost = async (name: string, number: number) => {
  const response = await axiosClient.post(`/api/easyhosts/Bedroom`, {name, number});
  return response.data;
}

export const useGetId = async (id: string) => {
  const response = await axiosClient.get(`/api/easyhosts/Bedroom/${id}`);
  return response.data;
}

export const useUpdate = async (name: string, number: number) => {
  const response = await axiosClient.put(`/api/easyhosts/Bedroom/`, {name, number});
  return response.data;
}

export const useDelete = async (id: string) => {
  const response = await axiosClient.delete(`/api/easyhosts/Bedroom/${id}`);
  return response.data;
}


export const useGetBedroom = () => useQuery<IBedroom[], AxiosError>('getBedrooms', useGet);
