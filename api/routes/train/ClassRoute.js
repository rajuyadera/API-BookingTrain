import express from "express";
import {
  getClass
} from "../../controller/train/ClassController.js"
import { verifyAdmin, verifyUser } from "../../utils/VerifyToken.js";

const router = express.Router();

router.get("/class", getClass);
// router.get("/class/:id", getclassById);
// router.post("/class", createclass);
// router.patch("/class/:id", updateclass);
// router.delete("/class/:id", deleteclass);

export default router;
