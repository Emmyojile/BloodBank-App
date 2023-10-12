import axios from "axios";
const axiosInstance = axios.create({
  // Set your server's base URL here
  // baseURL: "http://localhost:8000",
  baseURL: "https://bloodbank-server.onrender.com/",
});

const axiosRequest = async (method, endpoint, payload) => {
  try {
    const response = await axiosInstance({
      method,
      url: endpoint,
      data: payload,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // Access the response data, not the entire response object
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error.message;
  }
};

export default axiosRequest;
