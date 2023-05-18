import { useMutation } from 'react-query';
import { axiosClient } from '../../..';
import { IUser } from '../../../@types/user';

export const login = async ({ email, password} : IUser) => {
  const { data } = await axiosClient.post(`/api/easyhosts/Account/login`, {email, password});
  return data;
}

export const useLoginMutation = () => useMutation(login);

