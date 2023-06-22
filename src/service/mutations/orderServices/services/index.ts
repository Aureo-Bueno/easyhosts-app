import { useMutation } from 'react-query';
import { axiosClient } from '../../..';
import { IOrderService } from '../../../@types/orderService';

export const orderServices = async ({description, userId, employeeId, type, bedroomId } : IOrderService ) => {
  const { data } = await axiosClient.post<IOrderService>('/OrderService', { description, userId, employeeId, type, bedroomId });
  return data;
}

export const useOrderServicesMutation = () => useMutation(orderServices);
