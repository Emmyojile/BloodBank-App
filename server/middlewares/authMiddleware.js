import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("authorization").replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodedToken.userId;
    next();
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
};
