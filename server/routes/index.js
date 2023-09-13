import express from 'express';
const router = express.Router();

import userRoutes from "./users.js";


router.use('/user', userRoutes);


export default router;
