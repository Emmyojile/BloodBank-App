import express from 'express';
const router = express.Router();
import {GetCurrentUser} from "../controllers/users.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';


// Get current user route
router.route('/get-current-user').get(authMiddleware, GetCurrentUser);

// router.route('/').get( );


export default router;