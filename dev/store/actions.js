export const ACTION_CHANGE_USER='ACTION_CHANGE_USER'
export const ACTION_TOGGLE_ERROR='ACTION_TOGGLE_ERROR'
export const ACTION_SET_POPUP='ACTION_SET_POPUP'
export const ACTION_REGISTRATION_USER='ACTION_REGISTRATION_USER'
export const ACTION_SET_EMAIL_APPROVE_MODAL='ACTION_SET_EMAIL_APPROVE_MODAL'
export const ACTION_LOGIN_MODAL='ACTION_LOGIN_MODAL'
export const ACTION_RESET_EMAIL_APPROVE_MODAL='ACTION_RESET_EMAIL_APPROVE_MODAL'
export const ACTION_SELECT_PRIZ_MODAL='ACTION_SELECT_PRIZ_MODAL'
export const ACTION_PRIZ_SUCCESS_MODAL='ACTION_PRIZ_SUCCESS_MODAL'
export const ACTION_ADRESS_MODAL='ACTION_ADRESS_MODAL'
export const ACTION_SELECT_PRIZ='ACTION_SELECT_PRIZ'
export const ACTION_ADD_PRIZ_ROW='ACTION_ADD_PRIZ_ROW'
export const ACTION_DECREMENT_SCORE='ACTION_DECREMENT_SCORE'

export const regUser = (user)=>{
  return {
      type: ACTION_REGISTRATION_USER,
      payload: user
    }
}

export const changeUser = (user)=>{
    return {
        type: ACTION_CHANGE_USER,
        payload: user
      }
}
export const toggleError = ()=>{
    return {
        type: ACTION_TOGGLE_ERROR,
      }
}
export const setPopup = (popupOpen)=>{
  return {
      type: ACTION_SET_POPUP,
      payload: popupOpen
    }
}
export const setRegEmailApproveModal = (bool)=>{
  return {
      type: ACTION_SET_EMAIL_APPROVE_MODAL,
      payload: bool
    }
}
export const setLoginModal = (bool)=>{
  return {
      type: ACTION_LOGIN_MODAL,
      payload: bool
    }
}
export const setResetEmailApproveModal = (bool)=>{
  return {
      type: ACTION_RESET_EMAIL_APPROVE_MODAL,
      payload: bool
    }
}
export const setSelectPrizModal = (bool)=>{
  return {
      type: ACTION_SELECT_PRIZ_MODAL,
      payload: bool
    }
}
export const setPrizSuccessModal = (bool)=>{
  return {
      type: ACTION_PRIZ_SUCCESS_MODAL,
      payload: bool
}
}
export const setAdressModal = (bool)=>{
  return {
      type: ACTION_ADRESS_MODAL,
      payload: bool
}
}
export const setPriz = (bool)=>{
  return {
      type: ACTION_SELECT_PRIZ,
      payload: bool
}
}
export const setPrizRow = (name, points)=>{
  const date = new Date();

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return {
      type: ACTION_ADD_PRIZ_ROW,
      payload: [
        date.toLocaleString("ru", options), name, points
      ]
}
}

export const setDecrementScore = (val)=>{
  return {
      type: ACTION_DECREMENT_SCORE,
      payload: val
}
}