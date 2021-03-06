import axios from "axios";
import browserHistory from "../common/browser-history";
import {AppRoute} from "../common/constants";

const BASE_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};

const createApi = () => {

  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {

    const {response} = err;

    if (response.status === HttpCode.NOT_FOUND) {
      browserHistory.push(AppRoute.PAGE_NOT_FOUND);
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createApi};
export default createApi();
