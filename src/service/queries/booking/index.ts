import { axiosClient } from '../../';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { IUser } from '../../@types/user';

export interface IBooking {
  id: string,
  name: string,
}
export interface IBedroomResponse {
  id: string,
  name: string,
  number: number,
}

export interface IBookingResponse {
  codeBooking: string,
  checkin: string,
  checkout: string,
  userId: string,
  user: IUser,
  bedroomId: string,
  bedroom: IBedroomResponse,
}

export const useGet = async () => {
  try {
    const { data } = await axiosClient.get<IBookingResponse>(`/Booking`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetId = async (id: string | undefined) => {
  const { data } = await axiosClient.get(`/Booking/getBookingByUserId/${id}`);
  return data;
};

export const useGetBookingId = (id: string | undefined) =>
  useQuery<Array<IBookingResponse>, AxiosError>('getBookingByUserId', () => useGetId(id), { refetchInterval: 5000 });
