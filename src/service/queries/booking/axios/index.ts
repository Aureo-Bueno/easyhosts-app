import { axiosClient } from '../../..';

export const useGet = async () => {
  try {
    const response = await axiosClient.get(`/api/easyhosts/Booking`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetId = async (id: string) => {
  const response = await axiosClient.get(`/api/easyhosts/Booking/${id}`);
  return response.data;
}
