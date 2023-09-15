import User from "../models/User.js";

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

