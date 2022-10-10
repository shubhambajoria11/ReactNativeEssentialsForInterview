import {ACTION_TOKEN} from '../constants';

export const tokenAction = tokenValue => {
  return {
    type: ACTION_TOKEN,
    payload: tokenValue,
  };
};
