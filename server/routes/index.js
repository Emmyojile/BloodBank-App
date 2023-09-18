import express from 'express';
const router = express.Router();

import authRoutes from "./auth.js";
import userRoutes from "./users.js";
import inventoryRoutes from "./inventory.js";


router.use('/', authRoutes);
router.use('/users', userRoutes);
router.use('/inventory', inventoryRoutes);


export default router;
