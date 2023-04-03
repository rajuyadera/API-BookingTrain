import express from "express";
import {
  getRute, getRuteById,
} from "../../controller/rute/RuteController.js"

const router = express.Router();

router.get("/rute",getRute);
router.get("/rute/:id",getRuteById);

export default router;
