import express from "express"
import {
    Login,
    Logout,
    Me,
    Register
} from "../../controller/auth/Auth.js"
import {refreshToken} from "../../utils/RefreshToken.js"

const router = express.Router()

router.post("/register", Register)
router.post("/login", Login)
router.get("/me", Me)
router.delete("/logout", Logout)

export default router