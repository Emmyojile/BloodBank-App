import User from "../models/User.js";
import Inventory from "../models/Inventory.js";
import mongoose from "mongoose";

//get all blood groups totalIn, totalOut, available data from inventory
export const AllBloodGroupsData = async (req, res) => {
  try {
    
    return res.send({ success: true,
        message: "Blood Groups Data", 
        data: []
     });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
};
