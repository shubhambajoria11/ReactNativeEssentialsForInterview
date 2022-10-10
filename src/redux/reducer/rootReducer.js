import {combineReducers} from 'redux';
import {authTokenReducer} from './authTokenReducer';
import {signupReducer} from './signupReducer';
export const rootReducer = combineReducers({
  signupRed: signupReducer,
  authToken: authTokenReducer,
});
