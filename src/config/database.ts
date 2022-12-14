import { Dialect, Sequelize } from "sequelize";
require('dotenv').config()

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbType = process.env.DB_TYPE as Dialect
const dbPassword = process.env.DB_PASSWORD || ""

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
    host: dbHost,
    dialect: dbType
})

export default sequelize