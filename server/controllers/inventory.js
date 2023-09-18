import User from "../models/User.js";
import Inventory from "../models/Inventory.js";

export const AddInventory = async (req, res) => {    
    try {
        //validate email and inventoryType
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            throw new Error('Invalid Email')
        }

        if(req.body.inventoryType === 'in' && user.userType !== 'donor') {
            throw new Error('This email is not registered as a donor');
        }

        if(req.body.inventoryType === 'out' && user.userType !== 'hospital') {
            throw new Error('This email is not registered as a hospital');
        }

        if(req.body.inventoryType === 'out'){
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
        })
    }
}

export const GetInventory =async (req, res) => {
    try {
        const inventory = await Inventory.find({organization: req.body.userId}).populate('donor hospital');
        return res.send({success: true, data: inventory});
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
}