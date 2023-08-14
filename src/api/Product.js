import axios from "../utils/axiosInstance";

export const fetchProductByVideoId = async (id) => {
  return await axios.get(`/product/by-video/${id}`);
};
