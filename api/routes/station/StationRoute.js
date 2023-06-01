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
router.post("/station", createStation);
router.patch("/station/:id", updateStation);
router.delete("/station/:id", deleteStation);

export default router;
