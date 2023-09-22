import User from "../models/User.js";
import Inventory from "../models/Inventory.js";
import mongoose from "mongoose";

//get all blood groups totalIn, totalOut, available data from inventory
export const AllBloodGroupsData = async (req, res) => {
  try {
    const allBloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const bloodGroupsData = [];
    const organization = new mongoose.Types.ObjectId(req.body.userId);

    await Promise.all(
      allBloodGroups.map(async (bloodGroup) => {
        const totalIn = await Inventory.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "in",
              organization,
            },
          },
          {
            $group: {
              _id: null,
              total: {
                $sum: "$quantity",
              },
            },
          },
        ]);

        const totalOut = await Inventory.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "out",
              organization,
            },
          },
          {
            $group: {
              _id: null,
              total: {
                $sum: "$quantity",
              },
            },
          },
        ]);

        const available = (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

        bloodGroupsData.push({
          bloodGroup,
          totalIn: totalIn[0]?.total || 0,
          totalOut: totalOut[0]?.total || 0,
          available,
        });
      })
    );

    return res.send({
      success: true,
      message: "Blood Groups Data",
      data: bloodGroupsData,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
};
