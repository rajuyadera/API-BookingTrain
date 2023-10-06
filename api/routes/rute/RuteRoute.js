import express from "express";
import {
  createRute,
  deleteRute,
  getRuteById,
  searchRute,
  updateRute,
} from "../../controller/rute/RuteController.js";

const router = express.Router();

router.get("/api/rute:?", searchRute);
router.get("/api/rute/:id", getRuteById);
router.post("/api/rute", createRute);
router.patch("/api/rute/:id", updateRute);
router.delete("/api/rute/:id", deleteRute);

export default router;
