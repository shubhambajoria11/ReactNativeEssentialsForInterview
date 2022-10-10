import React from 'react';
import {View, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'token_key';

export const setToken = value => {
  console.log('Token', value);
  AsyncStorage.setItem(TOKEN_KEY, value)
    .then(res => {
      console.log('success key value stored in the async storage', res);
    })
    .catch(error => {
      console.log('Something went wrong', error);
    });
};

export const getToken = async () => {
  const tokenValue = await AsyncStorage.getItem(TOKEN_KEY);
  return tokenValue;
};

export const deleteToken = (key, value) => {
  AsyncStorage.removeItem(TOKEN_KEY)
    .then(res => {
      console.log('success key value deleted in the async storage', res);
    })
    .catch(error => {
      console.log('Something went wrong', error);
    });
};
