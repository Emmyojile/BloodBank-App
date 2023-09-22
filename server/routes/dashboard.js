import express from 'express';
const router = express.Router();
import {AllBloodGroupsData} from "../controllers/dashboard.js";
import { authMiddleware } from '../middlewares/authMiddleware.js';


router.route('/blood-groups-data').get(authMiddleware, AllBloodGroupsData);




export default router;