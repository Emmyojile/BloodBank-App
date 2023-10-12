import express from "express";
const router = express.Router();
import {
  GetCurrentUser,
  GetAllDonorsOfOrganization,
  GetAllHospitalsOfOrganization,
  GetAllOrganizationsOfDonor,
  GetAllOrganizationsOfHospital,
} from "../controllers/users.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

// Get current user route
router.route("/get-current-user").get(authMiddleware, GetCurrentUser);
router.route("/get-all-donors").get(authMiddleware, GetAllDonorsOfOrganization);
router
  .route("/get-all-hospitals")
  .get(authMiddleware, GetAllHospitalsOfOrganization);
router
  .route("/get-all-organizations-of-donor")
  .get(authMiddleware, GetAllOrganizationsOfDonor);
router
  .route("/get-all-organizations-of-hospital")
  .get(authMiddleware, GetAllOrganizationsOfHospital);

// router.route('/').get( );

export default router;
