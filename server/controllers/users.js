import User from "../models/User.js";
import Inventory from "../models/Inventory.js";
import mongoose from "mongoose";

//get current user
export const GetCurrentUser = async (req, res) => {    
    try {
        const user = await User.findOne({_id: req.body.userId})

        return res.send({
            success: true,
            message: "User fetched successfully",
            data: user,
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
}

//get all unique donors
export const GetAllDonorsOfOrganization = async (req, res) => {    
    try {
        //get all unique ids from inventory
        const uniqueDonorIds = await Inventory.distinct("donor", {
            organization: new mongoose.Types.ObjectId(req.body.userId)
        });

        const donors = await User.find({
            _id: {$in: uniqueDonorIds}
        });

        return res.send({
            success: true,
            message: "Donors fetched successfully",
            data: donors,
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
}

//get all unique hospitals
export const GetAllHospitalsOfOrganization = async (req, res) => {    
    try {
        //get all unique ids from inventory
        const uniqueHospitalIds = await Inventory.distinct("hospital", {
            organization: new mongoose.Types.ObjectId(req.body.userId)
        });

        const hospitals = await User.find({
            _id: {$in: uniqueHospitalIds}
        });

        return res.send({
            success: true,
            message: "Hospitals fetched successfully",
            data: hospitals,
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
}

