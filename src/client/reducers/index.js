import { combineReducers } from 'redux';
import userReducer from './usersReducer';
import authReducer from './authReducer';
import adminsreducer from './adminsreducer';

export default combineReducers({
  users:userReducer,
  auth:authReducer,
  admins: adminsreducer
})
