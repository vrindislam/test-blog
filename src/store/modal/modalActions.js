import { SHOW_MODAL, HIDE_MODAL } from "./modalActionTypes";

export const showModal = () => {
  return { type: SHOW_MODAL }
}
export const hideModal = () => {
  return { type: HIDE_MODAL }
}