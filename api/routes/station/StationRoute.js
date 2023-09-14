import express from "express";
import {
  createStation,
  deleteStation,
  getStation,
  getStationById,
  updateStation,
} from "../../controller/station/StationController.js";
import { verifyAdmin } from "../../utils/VerifyToken.js";

const router = express.Router();

router.get("/api/station", getStation);
router.get("/api/station/:id", getStationById);
router.post("/api/station" ,createStation);
router.patch("/api/station/:id",verifyAdmin, updateStation);
router.delete("/api/station/:id",verifyAdmin, deleteStation);

export default router;
