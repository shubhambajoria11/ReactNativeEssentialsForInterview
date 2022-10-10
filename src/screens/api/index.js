// 200 success=> response object
// expect 200 ==> failure ==> reponse object
// expect 401 ==> failure ==> Authentication failed
// callApi (url,methodName,data,header)
//return promise==> data:{object}

import axios from 'axios';
import {getResponse} from './constants';

/*
@url: data
@methodname: the name of the method get or post
@data : input for sending in api call
@returns : Promise<response>
*/

export const HTTP_METHOD = {
  get: 'get',
  post: 'post',
};
export const BASE_URL = 'https://reqres.in/api/';
export const callApi = (endPoint, methodName, data, header, fullUrl = '') => {
  const url = fullUrl === '' ? `${BASE_URL}${endPoint}` : fullUrl;
  let options = {
    method: methodName,
    url: url,
    data: data,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(getResponse(res.status, res.data));
      })
      .catch(err => {
        resolve(getResponse(err.response.status, err));
      });
  });
};
