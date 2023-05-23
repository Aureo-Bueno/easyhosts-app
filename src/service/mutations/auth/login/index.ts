import { useMutation } from 'react-query';
import { axiosClient } from '../../..';
import { ILogin } from '../@types';

export const login = async ({ email, password } : ILogin) => {
  const { data } = await axiosClient.post(`Account/login`, {email, password});
  return data;
}

export const useLoginMutation = () => useMutation(login);

