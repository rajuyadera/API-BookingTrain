import express from "express";
import {
  getClass,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
} from "../../controller/train/ClassController.js";
import { verifyAdmin } from "../../utils/VerifyToken.js";

const router = express.Router();

router.get("/api/class", getClass);
router.get("/api/class/:id", getClassById);
router.post("/api/class", createClass);
router.patch("/api/class/:id", updateClass);
router.delete("/api/class/:id", deleteClass);

export default router;
