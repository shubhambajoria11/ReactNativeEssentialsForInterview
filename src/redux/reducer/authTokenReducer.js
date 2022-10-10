import React from 'react';
import {ACTION_TOKEN} from '../constants';

const initialState = {
  authToken: null,
};

export const authTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TOKEN: {
      return {...state, authToken: action.payload};
    }
    default: {
      return state;
    }
  }
};
