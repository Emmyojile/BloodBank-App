import express from 'express';
const router = express.Router();
import {AddInventory} from "../controllers/inventory.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';


// Get current user route
router.route('/add').get(authMiddleware, AddInventory);

// router.route('/').get( );


export default router;