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

router.get("/token", refreshToken)

router.get("/user", getUser);
router.get("/user/:id", getUserByUuid);
router.post("/user",verifyAdmin ,createUser);
router.patch("/user/:id", verifyAdmin, updateUser);
router.delete("/user/:id", verifyAdmin, deleteUser);

export default router;
