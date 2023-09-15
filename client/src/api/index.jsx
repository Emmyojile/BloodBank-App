// import axios from 'axios'  ;


// export const axiosInstance = async (method, endpoint, payload) => {
//     try {
//         const response = await axios ({
//             method,
//             url: endpoint,
//             data: payload,
//         })
//         return response;
//     } catch (error) {
//         return error;
//     }
// }

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Set your server's base URL here
});

const axiosRequest = async (method, endpoint, payload) => {
  try {
    const response = await axiosInstance({
      method,
      url: endpoint,
      data: payload,
      headers: {
        // authorization: JSON.parse(localStorage.getItem('token') || '')
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    );
    return response.data; // Access the response data, not the entire response object
  } catch (error) {
    return error.response ? error.response.data : error.message;
  }
};

export default axiosRequest;
