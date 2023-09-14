import express from "express"
import { getIdentity } from "../../controller/identity/IdentityController.js"

const router = express.Router()

router.get("/api/identity", getIdentity)

export default router