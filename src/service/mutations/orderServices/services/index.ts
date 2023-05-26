import { useMutation } from 'react-query';
import { axiosClient } from '../../..';
import { IOrderService } from '../../../@types/orderService';

export const orderServices = async ({description, userId, employeeId, status, service} : IOrderService ) => {
  const { data } = await axiosClient.post('/OrderService', {description, userId, employeeId, status, service});
  return data;
}

export const useOrderServicesMutation = () => useMutation(orderServices);

