import {ACTION_CHANGE_USER,ACTION_RESET_EMAIL_APPROVE_MODAL, ACTION_LOGIN_MODAL, ACTION_SET_EMAIL_APPROVE_MODAL, ACTION_TOGGLE_ERROR, ACTION_SET_POPUP, ACTION_REGISTRATION_USER} from './actions'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';



const initialState = {
  // error: false,
  // popupOpen: false,
  RegEmailApproveModalOpen: false,
  LoginModalOpen: true,
  ResetEmailApproveModalOpen: true,
}
  export const rootRedducer = (state=initialState, action)=>{
      switch (action.type){
          // case ACTION_CHANGE_USER:
          //   return {...state, user: action.payload}
          // case ACTION_TOGGLE_ERROR:
          //   return {...state, error: !state.error}
          // case ACTION_SET_POPUP:
          //   console.log('popup')
          //   return {...state, popupOpen: action.payload}
          case ACTION_REGISTRATION_USER:
            console.log('userLog')
            return {...state, user: action.payload}
          case ACTION_SET_EMAIL_APPROVE_MODAL:
            return {...state, RegEmailApproveModalOpen: action.payload}
          case ACTION_LOGIN_MODAL:
            console.log('action')
            console.log(action)
            
            return {...state, LoginModalOpen: action.payload}
            case ACTION_RESET_EMAIL_APPROVE_MODAL:
              console.log('action')
              console.log(action)
              
              return {...state, ResetEmailApproveModalOpen: action.payload}
      }
      
    return state
  }

  const reducers = {
    data: rootRedducer,
    form: formReducer,
    
  };
export const reducer = combineReducers(reducers);


  