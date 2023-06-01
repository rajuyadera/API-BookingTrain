import express from "express";
import {
  getClass,
  getClassById,
  createClass,
  updateClass,
  deleteClass
} from "../../controller/train/ClassController.js"
import { verifyAdmin, verifyUser } from "../../utils/VerifyToken.js";

const router = express.Router();

router.get("/class", getClass);
router.get("/class/:id", getClassById);
router.post("/class", createClass);
router.patch("/class/:id", updateClass);
router.delete("/class/:id", deleteClass);

export default router;
