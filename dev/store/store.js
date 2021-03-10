import {createStore, bindActionCreators} from 'redux'
import {reducer} from './reducers'

const user={
  firstName: 'Владимир',
  cheki: 50,
  prizi: 4,
  phone: '+7 888 555 6666',
  email: 'sqs@sa.ssa',
};
const initialState = {
    user: user,
    error: false,
    popupOpen: false,
  }
export const store = createStore(reducer, initialState)


