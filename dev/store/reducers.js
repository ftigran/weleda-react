import {ACTION_PRIZ_SUCCESS_MODAL,ACTION_ADRESS_MODAL,ACTION_SELECT_PRIZ_MODAL,ACTION_RESET_EMAIL_APPROVE_MODAL, ACTION_LOGIN_MODAL, ACTION_SET_EMAIL_APPROVE_MODAL, ACTION_TOGGLE_ERROR, ACTION_SET_POPUP, ACTION_REGISTRATION_USER} from './actions'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';
import {rowsPrizi, rowsTasks, ColumnsPrizi, ColumnsTasks} from './defStore'


const initialState = {
  // error: false,
  // popupOpen: false,
  RegEmailApproveModalOpen: false,
  LoginModalOpen: false,
  ResetEmailApproveModalOpen: false,
  selectPrizModalOpen: true,
  prizSuccessModalOpen: true,
  adressModalOpen: true,

  rowsPrizi,
  rowsTasks,
  ColumnsPrizi,
  ColumnsTasks,
  score: 12
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
            case ACTION_SELECT_PRIZ_MODAL:
              console.log('action')
              console.log(action)
              return {...state, selectPrizModalOpen: action.payload}
            case ACTION_PRIZ_SUCCESS_MODAL:
              console.log('action')
              console.log(action)
              return {...state, prizSuccessModalOpen: action.payload}
            case ACTION_ADRESS_MODAL:
              console.log('action')
              console.log(action)
              return {...state, adressModalOpen: action.payload}
      }
      
    return state
  }

  const reducers = {
    data: rootRedducer,
    form: formReducer,
    
  };
export const reducer = combineReducers(reducers);


  