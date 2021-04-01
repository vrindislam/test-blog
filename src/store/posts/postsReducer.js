import { CREATE_POST, DELETE_POST, UPDATE_POST } from './postsActionTypes'

const initialState = []

export function postsReducer(state = initialState, action) {
   switch (action.type) {
      case CREATE_POST:
         return [...state, action.payload.value]
      case DELETE_POST:
         return state.filter(post => post.id !== action.payload.id)
      case UPDATE_POST:
         return [...state, ...action.payload.updatedPosts]
      default: return state
   }
}

export default postsReducer;