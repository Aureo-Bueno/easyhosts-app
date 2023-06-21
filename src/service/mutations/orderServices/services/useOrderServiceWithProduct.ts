import { useMutation } from 'react-query';
import { axiosClient } from '../../..';
import { IOrderService } from '../../../@types/orderService';

export const orderServicesWithProduct = async ({description, userId, employeeId, type, productId } : IOrderService ) => {
  const { data } = await axiosClient.post<IOrderService>('/OrderService', { description, userId, employeeId, type, productId });
  return data;
}

export const useOrderServicesWithProductMutation = () => useMutation(orderServicesWithProduct);
