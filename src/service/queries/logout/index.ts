import { axiosClient } from '../..';

export const logout = async () => {
  const { data } = await axiosClient.post(`/Account/logout`, null);
  return data;
}


