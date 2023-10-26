import axiosRequest from "./index";

export const AddInventory = async (payload) => {
  try {
    const response = await axiosRequest("post", "/api/inventory/add", payload);
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};

export const GetInventory = async () => {
  try {
    const response = await axiosRequest("get", "/api/inventory");
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};

export const GetInventoryByFilters = async (filters, limit) => {
  try {
    const response = await axiosRequest("post", "/api/inventory/filters", {
      filters,
      limit,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};
