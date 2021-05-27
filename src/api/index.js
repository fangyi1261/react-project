import axios from 'axios';
import { mock } from '../api/common/mock';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://m-stg1.health.pingan.com' : window.location.origin;

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  headers: {},
  withCredentials: false
});

let exOptions = {
  mock: true,
  encryption: false
};

const getHttp = (url, params={}, context={}) => {
  exOptions = Object.assign({}, context, exOptions);
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'development' && exOptions.mock) {
      const result = mock.emit(url, params);

      resolve(result.data);
    } else {
      instance.get(url, params).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    }
  });
}

const postHttp = (url, params={}, context={}) => {
  exOptions = Object.assign({}, context, exOptions);
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'development' && exOptions.mock) {
      const result = mock.emit(url, params);

      resolve(result.data);
    } else {
      instance.post(url, params).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    }
  });
}

export default { get: getHttp, post: postHttp };