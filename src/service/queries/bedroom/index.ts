import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useGet } from './axios';

interface BedroomDTO {
  id: number,
  name: string,
  number: number
}

export const useGetBedroom = () => useQuery<BedroomDTO[], AxiosError>('getBedrooms', useGet);
