import { useQuery } from 'react-query';
import { useGet } from '..';

interface BedroomDTO {
  id: string,
  name: string,
  number: number
}

export const useGetBedroom = () => useQuery<BedroomDTO[], Error>('getBedrooms', useGet);
