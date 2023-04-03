import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import db from "./config/Database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRoute from "./routes/auth/AuthRoute.js"
import UserRoute from "./routes/auth/UserRoute.js";
import TrainRoute from "./routes/train/TrainRoute.js"
import StationRoute from "./routes/station/StationRoute.js"
import ClassRoute from "./routes/train/ClassRoute.js"
import RuteRoute from "./routes/rute/RuteRoute.js"
import OrderRoute from "./routes/order/Order.js"
import CostumerRoute from "./routes/costumer/Costumer.js"
dotenv.config();

const app = express();

// try {
//   db.authenticate();
//   console.log("Database Connected");
// } catch (error) {
//   console.log("Database gagal Terkoneksi");
// }

app.use(session({
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: 'auto'
  }
}))

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))
app.use(cookieParser())


app.use(UserRoute);
app.use(TrainRoute);
app.use(StationRoute);
app.use(ClassRoute);
app.use(RuteRoute);
app.use(AuthRoute);
app.use(OrderRoute);
app.use(CostumerRoute);

// (async()=>{
//   await db.sync()
// })()

// middleware error
app.use((err, res) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


app.listen(process.env.PORT, () => {
  console.log("Server Running At Port", process.env.PORT);
});
