import axios from 'axios'  ;

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