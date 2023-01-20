import axios from 'axios';

const baseURL = 'http://localhost:8080';

const instance = axios.create({ baseURL });

instance.interceptors.request.use(
  function setConfig(parameter) {
    const config = parameter;

    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('loginToken')}`,
    };

    return config;
  },
  function getError(error) {
    return Promise.reject(error);
  }
);

export default instance;
