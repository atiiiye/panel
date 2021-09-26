import axios from "axios";
import { errorMessage } from "../common/messages";
import { getJwt } from '../common'

axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers.common['Access-Control-Allow-Methods'] = "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE";
axios.defaults.headers.common['Access-Control-Allow-Headers'] = "Content-Type, Authorization";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    errorMessage("An unexpected error occurred, Try again");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
  axios.defaults.headers.common['Authorization'] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};


