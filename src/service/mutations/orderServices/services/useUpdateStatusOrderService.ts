import { useMutation } from 'react-query';
import { axiosClient } from '../../..';
import { IUpdateStatusOrderService } from '../@types';

export const useUpdateStatus = async ({ orderServiceId, employeId } : IUpdateStatusOrderService ) => {
  const { data } = await axiosClient.patch(`/OrderService/${orderServiceId}`, { employeId });
  return data;
}

export const useUpdateStatusOrderService = () => useMutation(useUpdateStatus);
