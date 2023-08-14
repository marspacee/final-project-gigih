import api from "../utils/axiosInstance";

export const fetchProductByVideoId = async (id) => {
  return await api.get(`/product/by-video/${id}`);
};
