import { CREATE_POST, DELETE_POST, UPDATE_POST, CHANGE_POST } from './postsActionTypes'

import Ajax from '../../services/Ajax'
const { post, deleteRequest, put } = Ajax

export const createPost = value => {
  post('/posts', value)
  return { type: CREATE_POST, payload: { value } };
}

export const updatePosts = (updatedPosts) => {

  return {
    type: UPDATE_POST,
    payload: { updatedPosts }
  }
}

export const changePost = (id, updatedObject) => {
  put('/posts', id, updatedObject)
  return { type: CHANGE_POST, payload: { updatedObject } };
}

export const deletePost = id => {
  deleteRequest('/posts', id)
  return { type: DELETE_POST, payload: { id } };
}