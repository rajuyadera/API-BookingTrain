import express from "express";
import { getOrder } from "../../controller/order/OrderController.js";

const router = express.Router()

router.get("/order", getOrder)

export default router