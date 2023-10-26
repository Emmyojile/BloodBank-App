import axiosRequest from "./index";

export const GetAllBloodGroupsData = async (payload) => {
  try {
    const response = await axiosRequest(
      "get",
      "/api/dashboard/blood-groups-data",
      payload
    );
    return response;
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};
