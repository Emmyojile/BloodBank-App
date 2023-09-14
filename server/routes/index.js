import express from 'express';
const router = express.Router();

import authRoutes from "./auth.js";
import userRoutes from "./users.js";


router.use('/', authRoutes);
router.use('/users', userRoutes);


export default router;
