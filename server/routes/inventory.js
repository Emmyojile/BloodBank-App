import express from 'express';
const router = express.Router();
import {AddInventory,GetInventory} from "../controllers/inventory.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';


// Get current user route
router.route('/add').post(authMiddleware, AddInventory);
router.route('/').get(authMiddleware, GetInventory);

// router.route('/').get( );


export default router;