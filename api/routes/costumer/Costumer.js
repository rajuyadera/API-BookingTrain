import express from "express"
import { getCustomer } from "../../controller/costumer/CostumerController.js"

const router = express.Router()

router.get("/costumer", getCustomer)

export default router