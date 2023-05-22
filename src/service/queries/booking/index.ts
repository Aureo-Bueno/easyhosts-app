import { axiosClient } from '../../';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

export interface IBooking {
  id: number,
  name: string
}

export const useGet = async () => {
  try {
    const response = await axiosClient.get(`/api/easyhosts/Booking`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetId = async (id: string) => {
  const response = await axiosClient.get(`/api/easyhosts/Booking/${id}`);
  return response.data;
}

export const useGetBookingId = (id: string) => useQuery<IBooking[], AxiosError>('getBooking', () => useGetId(id));
