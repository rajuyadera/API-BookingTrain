import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../../controller/auth/UserController.js";
import { verifyAdmin, verifyUser } from "../../utils/VerifyToken.js";

const router = express.Router();

// router.get("/user/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user, you are logged in")
// })
// router.get("/user/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/user/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete all account")
// })
router.get("/user", verifyUser, verifyAdmin, getUser);
router.get("/user/:id", verifyUser, getUserById);
router.post("/user", verifyUser, verifyAdmin, createUser);
router.patch("/user/:id", verifyUser, updateUser);
router.delete("/user/:id", verifyUser, deleteUser);

export default router;
