// import { axiosInstance } from './index';

// export const LoginUser = async(payload) => {
//     const response = await axiosInstance("post","/api/login", payload);
//     return response;
// }

// export const RegisterUser = async(payload) => {
//     const response = await axiosInstance("post","/api/register", payload);
//     return response;
// }

import axiosRequest from './index';

export const LoginUser = async (payload) => {
  try {
    const response = await axiosRequest("post", "/api/login", payload);
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosRequest("post", "/api/register", payload);
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};

export const GetCurrentUser = async () => {
  try {
    const response = await axiosRequest("get", "/api/users/get-current-user");
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};

export const GetAllDonorsOfOrganization = async () => {
  try {
    const response = await axiosRequest("get", "/api/users/get-all-donors");
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};

export const GetAllHospitalsOfOrganization = async () => {
  try {
    const response = await axiosRequest("get", "/api/users/get-all-hospitals");
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};