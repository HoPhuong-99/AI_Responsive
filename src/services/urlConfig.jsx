import axios from "axios";

export const https = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND,
});

// Add a request interceptor
https.interceptors.request.use(
  (config) => {
    return { ...config };
  },
  function (error) {
    // Do something with request error
    // console.log(error)
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (err.message === "Request failed with status code 401") {
      console.log(err.message);
      // window.location.href = "login"; // Assign the login page URL to window.location.href
    }
    return null;
  }
);
