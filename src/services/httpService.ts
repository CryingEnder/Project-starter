import axios from "axios";

// axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error("An unexpected error has occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.put,
  delete: axios.delete,
};
