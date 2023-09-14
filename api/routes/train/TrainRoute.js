import express from "express";
import {
  getTrain,
  getTrainById,
  createTrain,
  updateTrain,
  deleteTrain,
} from "../../controller/train/TrainConttroller.js";
import { verifyAdmin } from "../../utils/VerifyToken.js";

const router = express.Router();

router.get("/api/train", getTrain);
router.get("/api/train/:id", getTrainById);
router.post("/api/train", createTrain); // Hanya admin yang bisa menambahkan data kereta
router.patch("/api/train/:id",verifyAdmin, updateTrain); // Hanya admin yang bisa mengupdate data kereta
router.delete("/api/train/:id",verifyAdmin, deleteTrain); // Hanya admin yang bisa menghapus data kereta

export default router;
