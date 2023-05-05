import { useQuery } from 'react-query';
import { useGet } from '..';
import { AxiosError } from 'axios';

interface BedroomDTO {
  id: number,
  name: string,
  number: number
}

export const useGetBedroom = () => useQuery<BedroomDTO[], AxiosError>('getBedrooms', useGet);
