import jwt from 'jsonwebtoken';

// export const authMiddleware = (req, res, next) => {
//     try {
//         const token = req.header("authorization").replace("Bearer ", "");
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = decodedToken.userId;
//         next();
//     } catch (error) {
//         return res.send({
//             status: false,
//             message: error.message
//         })
//     }
// }

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.header("authorization").replace("Bearer ", "");
        console.log("Received token:", token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decodedToken);
        req.body.userId = decodedToken.userId;
        next();
    } catch (error) {
        return res.send({
            status: false,
            message: error.message
        })
    }
}
