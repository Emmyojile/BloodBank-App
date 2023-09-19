import User from "../models/User.js";
import Inventory from "../models/Inventory.js";
import mongoose from "mongoose";


//add inventory
export const AddInventory = async (req, res) => {
  try {
    //validate email and inventoryType
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Invalid Email");
    }

    if (req.body.inventoryType === "in" && user.userType !== "donor") {
      throw new Error("This email is not registered as a donor");
    }

    if (req.body.inventoryType === "out" && user.userType !== "hospital") {
      throw new Error("This email is not registered as a hospital");
    }

    if (req.body.inventoryType === "out") {
      //check if inventory is available
      const requestedGroup = req.body.bloodGroup;
      const requestedQuantity = req.body.quantity;
      // const organization = req.body.userId;
      const organization = new mongoose.Types.ObjectId(req.body.userId);

      const totalInOfRequestedGroup = await Inventory.aggregate([
        {
          $match: {
            organization,
            inventoryType: "in",
            bloodGroup: requestedGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);

      const totalIn = totalInOfRequestedGroup[0]?.total || 0;

      const totalOutOfRequestedGroup = await Inventory.aggregate([
        {
          $match: {
            organization,
            inventoryType: "out",
            bloodGroup: requestedGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);

      const totalOut = totalOutOfRequestedGroup[0]?.total || 0;

      const availableQuantityOfRequestedGroup = totalIn - totalOut;

      if (availableQuantityOfRequestedGroup < requestedQuantity) {
        throw new Error(
            // `Requested quantity is not available`
            `Only ${availableQuantityOfRequestedGroup} units of ${requestedGroup} are available`
        );
      }

      req.body.hospital = user._id;
    } else {
      req.body.donor = user._id;
    }

    //create a new inventory
    const inventory = new Inventory(req.body);
    await inventory.save();

    return res.send({
      success: true,
      message: "Inventory added successfully",
      data: user,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
};

//get inventory
export const GetInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find({
      organization: req.body.userId,
    }).sort({createdAt: -1}).populate("donor hospital");
    return res.send({ success: true, data: inventory });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
};

//get inventory by filter
export const GetInventoryByFilters = async (req, res) => {
  try {
    const inventory = await Inventory.find(req.body.filters).sort({createdAt: -1}).populate("donor hospital organization");
    return res.send({ success: true, data: inventory });
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
};
