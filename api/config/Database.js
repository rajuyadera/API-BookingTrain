import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize('eTrain', 'root', process.env.DATABASEPASS, {
    host: 'localhost',
    dialect: 'mysql',
})

export default db