import { axiosClient } from '..';

export const login = async (email: string, password: string) => {
  const response = await axiosClient.post(`/api/easyhosts/auth/login/`, {email, password});
  return response.data;
}

