import { combineReducers } from "redux";
import modalReducer from './modal/modalReducer'
import { postsReducer } from "./posts/postsReducer";

const rootReducer = combineReducers({
   modal: modalReducer,
   posts: postsReducer
})

export default rootReducer;