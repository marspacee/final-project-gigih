import api from "../utils/axiosInstance";

export const fetchAllVideo = async () => {
  return await api.get("/video");
};

export const fetchVideoById = async (id) => {
  return await api.get(`/video/${id}`);
};
