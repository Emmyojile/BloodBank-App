import express from 'express';
const router = express.Router();
import {registerUser, loginUser} from "../controllers/auth.js";


// register route
router.route('/register').get(registerUser);

// login route
router.route('/login').post(loginUser);

export default router;