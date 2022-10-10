import {ACTION_CHANGE_EMAIL, ACTION_CHANGE_PASSWORD} from '../constants';

export const changeEmail = emailText => {
  return {
    type: ACTION_CHANGE_EMAIL,
    payload: emailText,
  };
};

export const changePassword = changePasswordText => {
  return {
    type: ACTION_CHANGE_PASSWORD,
    payload: changePasswordText,
  };
};
