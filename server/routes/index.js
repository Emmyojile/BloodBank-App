import express from "express";
const router = express.Router();

import authRoutes from "./auth.js";
import userRoutes from "./users.js";
import inventoryRoutes from "./inventory.js";
import dashboardRoutes from "./dashboard.js";

router.use("/", authRoutes);
router.use("/users", userRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/dashboard", dashboardRoutes);

export default router;
