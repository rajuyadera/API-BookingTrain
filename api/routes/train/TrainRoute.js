import express from "express";
import {
  getTrain,
  getTrainById,
  createTrain,
  updateTrain,
  deleteTrain,
} from "../../controller/train/TrainConttroller.js";
import { verifyAdmin, verifyUser } from "../../utils/VerifyToken.js";

const router = express.Router();

router.get("/train", verifyUser, verifyAdmin, getTrain);
router.get("/train/:id", verifyUser, verifyAdmin, getTrainById);
router.post("/train", verifyUser, verifyAdmin, createTrain);
router.patch("/train/:id", verifyUser, verifyAdmin, updateTrain);
router.delete("/train/:id", verifyUser, verifyAdmin, deleteTrain);

export default router;
