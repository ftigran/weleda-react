import {ACTION_CHANGE_USER, ACTION_TOGGLE_ERROR, ACTION_SET_POPUP, ACTION_REGISTRATION_USER} from './actions'
import { reducer as reduxFormReducer } from 'redux-form';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';

const reducers = {
  rootRedducer,
  form: formReducer
};
const reducer = combineReducers(reducers);

  export const rootRedducer = (state, action)=>{
    console.log('stas.payload')

      switch (action.type){
          case ACTION_CHANGE_USER:
            return {...state, user: action.payload}
          case ACTION_TOGGLE_ERROR:
            return {...state, error: !state.error}
          case ACTION_SET_POPUP:
            console.log('popup')
            return {...state, popupOpen: action.payload}
          case ACTION_REGISTRATION_USER:
            console.log('userLog')
            return {...state, user: action.payload}
      }
      console.log('stasadate.payload')
      
    return state
  }


  