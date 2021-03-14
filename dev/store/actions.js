export const ACTION_CHANGE_USER='ACTION_CHANGE_USER'
export const ACTION_TOGGLE_ERROR='ACTION_TOGGLE_ERROR'
export const ACTION_SET_POPUP='ACTION_SET_POPUP'
export const ACTION_REGISTRATION_USER='ACTION_REGISTRATION_USER'
export const ACTION_SET_EMAIL_APPROVE_MODAL='ACTION_SET_EMAIL_APPROVE_MODAL'
export const ACTION_LOGIN_MODAL='ACTION_LOGIN_MODAL'
export const ACTION_RESET_EMAIL_APPROVE_MODAL='ACTION_RESET_EMAIL_APPROVE_MODAL'

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