import axios from "../utils/axiosInstance";

export const fetchCommentsByVideoId = async (id) => {
  return await axios.get(`/comment/by-video/${id}`);
};

export const postCommentByVideoId = async (data) => {
  return await axios.post(`/comment/by-video`, data);
};
