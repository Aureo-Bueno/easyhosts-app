import { axiosClient } from '..';

export const useGet = async () => {
  const response = await axiosClient.get(`/api/easyhosts/Bedroom/getBedrooms`);
  return response.data;
}

export const usePost = async (name: string, number: number) => {
  const response = await axiosClient.post(`/api/easyhosts/Bedroom/insertBedroom`, {name, number});
  return response.data;
}

export const useGetId = async (id: string) => {
  const response = await axiosClient.get(`/api/easyhosts/Bedroom/${id}`);
  return response.data;
}

export const useUpdate = async (name: string, number: number) => {
  const response = await axiosClient.put(`/api/easyhosts/Bedroom/`, {name, number});
  return response.data;
}

export const useDelete = async (id: string) => {
  const response = await axiosClient.delete(`/api/easyhosts/Bedroom/${id}`);
  return response.data;
}
