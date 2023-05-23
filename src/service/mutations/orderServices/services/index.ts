import { useMutation } from 'react-query';
import { axiosClient } from '../../..';
import { IOrderServices } from '../@types';

export const orderServices = async ({description, userId, employeeId, status, type} : IOrderServices) => {
  const { data } = await axiosClient.post(`OrderServices`, {description, userId, employeeId, status, type});
  return data;
}

export const useOrderServicesMutation = () => useMutation(orderServices);

