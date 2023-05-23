import { axiosClient } from '../../';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

export interface IBooking {
  id: string;
  name: string;
}

export interface IBookingResponse {
  codeBooking: string;
  checkin: string;
  checkout: string;
  userId: string;
}

export const useGet = async () => {
  try {
    const response = await axiosClient.get(`Booking`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetId = async (id: string | undefined) => {
  const response = await axiosClient.get(`Booking/getBookingByUserId/${id}`);
  return response.data;
};

export const useGetBookingId = (id: string | undefined) =>
  useQuery<IBookingResponse[], AxiosError>('getBookingByUserId', () => useGetId(id));
