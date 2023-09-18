import express from 'express';
const router = express.Router();
import {GetCurrentUser, GetAllDonorsOfOrganization, GetAllHospitalsOfOrganization} from "../controllers/users.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';


// Get current user route
router.route('/get-current-user').get(authMiddleware, GetCurrentUser);
router.route('/get-all-donors').get(authMiddleware, GetAllDonorsOfOrganization);
router.route('/get-all-hospitals').get(authMiddleware, GetAllHospitalsOfOrganization);

// router.route('/').get( );


export default router;