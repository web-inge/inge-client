import { combineReducers } from 'redux'
import LoginReducer from '../container/login/reducer'


const rootReducer = combineReducers({
  login: LoginReducer,
})

export default rootReducer
