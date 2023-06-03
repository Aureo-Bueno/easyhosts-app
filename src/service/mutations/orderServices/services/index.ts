import { useMutation } from 'react-query';
import { axiosClient } from '../../..';
import { IOrderService } from '../../../@types/orderService';

export const orderServices = async ({description, userId, employeeId, typeService} : IOrderService ) => {
  const { data } = await axiosClient.post('/OrderService', {description, userId, employeeId, typeService});
  return data;
}

export const useOrderServicesMutation = () => useMutation(orderServices);

