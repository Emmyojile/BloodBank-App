import axios from 'axios'  ;

axios.defaults.baseURL = import.meta.env.VITE_API_LOCAL_URL;
axios.defaults.withCredentials = true;

export const axiosInstance = async (method, endpoint, payload) => {
    try {
        const response = await axios ({
            method,
            url: endpoint,
            data: payload,
        })
        return response;
    } catch (error) {
        return error;
    }
}