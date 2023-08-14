import axios from "../utils/axiosInstance";

export const fetchAllVideo = async () => {
  return await axios.get("/video");
};

export const fetchVideoById = async (id) => {
  return await axios.get(`/video/${id}`);
};
