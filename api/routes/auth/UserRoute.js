import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserByUuid,
  updateUser,
} from "../../controller/auth/UserController.js";
import { verifyAdmin, verifyUser } from "../../utils/VerifyToken.js";
import { refreshToken } from "../../utils/RefreshToken.js";

const router = express.Router();

router.get("/api/usertoken", refreshToken)

router.get("/api/user",verifyUser, verifyAdmin, getUser);
router.get("/api/user/:uuid",verifyUser, getUserByUuid);
router.post("/api/user",verifyAdmin ,createUser);
router.patch("/api/user/:uuid",verifyUser, verifyAdmin, updateUser);
router.delete("/api/user/:uuid", verifyAdmin, deleteUser);

export default router;
