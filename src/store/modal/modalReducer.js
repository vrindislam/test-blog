import { SHOW_MODAL, HIDE_MODAL } from "./modalActionTypes";

const initialState = {
  isModal: false,
}

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModal: true
      }
    case HIDE_MODAL:
      return initialState;

    default: return state
  }
}

export default modalReducer;