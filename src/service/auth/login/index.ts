import { useMutation } from 'react-query';
import { axiosClient } from '../..';

interface ILogin {
  email: string,
  password: string
}

export const login = async ({ email, password} : ILogin) => {
  const { data } = await axiosClient.post(`/api/easyhosts/Account/login`, {email, password});
  return data;
}

export const useLoginMutation = () => useMutation(login);

