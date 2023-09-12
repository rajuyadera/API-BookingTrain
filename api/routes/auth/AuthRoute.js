import express from "express"
import {
    Login,
    Register,
    Logout,
} from "../../controller/auth/Auth.js"

const router = express.Router()

router.post("/api/login", Login)
router.post("/api/register", Register)
router.delete("/api/logout", Logout)

export default router