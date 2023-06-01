import express from 'express'
import dotenv from 'dotenv'
import db from './config/Database.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import AuthRoute from './routes/auth/AuthRoute.js'
import UserRoute from './routes/auth/UserRoute.js'
import StationRoute from './routes/station/StationRoute.js'
import Classroute from './routes/train/ClassRoute.js'
import TrainRoute from './routes/train/TrainRoute.js'
dotenv.config()

const app = express()

// Check Database
try {
    db.authenticate()
    // Train.sync({force: true})
    console.log("Database Running")
} catch (error) {
    console.log(error)
}


// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))


// Middleware Route
app.use(AuthRoute)
app.use(UserRoute)
app.use(StationRoute)
app.use(Classroute)
app.use(TrainRoute)



// Create Server
app.listen(process.env.PORT, () => {
    console.log(`Server Running At Port`, process.env.PORT)
})