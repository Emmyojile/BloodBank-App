import { axiosInstance } from './index';

export const LoginUser = async(payload) => {
    const response = await axiosInstance("post","/api/login", payload);
    return response;
}

export const RegisterUser = async(payload) => {
    const response = await axiosInstance("post","/api/register", payload);
    return response;
}