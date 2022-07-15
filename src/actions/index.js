import {
  CREATE__POST,
  DELETE__POST,
  GET__POST,
  UPDATE__POST,
} from "../constansts";
import * as api from "./../api/index";

export const getPosts = () => async (dispatch) => {
  const { data } = await api.getPost();
  try {
    dispatch({ type: GET__POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  const { data } = await api.createPost(post);
  try {
    dispatch({ type: CREATE__POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  const { data } = await api.updatePost(id, updatedPost);
  try {
    dispatch({ type: UPDATE__POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  const { data } = await api.deletePoste(id);
  try {
    dispatch({ type: DELETE__POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
