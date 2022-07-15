import axios from "axios";
const API = axios.create({ baseURL: process.env.REACT__DATABASE_API });
// retrieve our data function
export const getPost = () => API.get("/post");
export const createPost = (post) => API.post("/post", post);
export const updatePost = (id, updatedPost) =>
  API.put(`/posts/${id}`, updatedPost);
export const deletePoste = (id) => API.delete(`/posts/${id}`);
