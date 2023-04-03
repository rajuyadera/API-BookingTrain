import express from "express";
import {
  createStation,
  deleteStation,
  getStation,
  getStationById,
  updateStation,
} from "../../controller/station/StationController.js";
import { verifyAdmin, verifyUser } from "../../utils/VerifyToken.js";

const router = express.Router();

router.get("/station", getStation);
router.get("/station/:id", getStationById);
router.post("/station", verifyUser, verifyAdmin, createStation);
router.patch("/station/:id", verifyUser, verifyAdmin, updateStation);
router.delete("/station/:id", verifyUser, verifyAdmin, deleteStation);

export default router;
