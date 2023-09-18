import axiosRequest from './index';

export const AddInventory = async (payload) => {
  try {
    const response = await axiosRequest("post", "/api/inventory/add", payload);
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};