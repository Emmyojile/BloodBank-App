import express from 'express';
const router = express.Router();
import {GetAllBloodGroupsData} from "../controllers/dashboard.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';


router.route('/blood-groups-data').get(authMiddleware, GetAllBloodGroupsData);




export default router;