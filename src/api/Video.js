import axios from "../utils/axiosInstance";

export const fetchAllVideo = async (filterTitle) => {
  return await axios.get("/video/filtered-by-title", {
    params: {
      filterTitle,
    },
  });
};

export const fetchVideoById = async (id) => {
  return await axios.get(`/video/${id}`);
};
