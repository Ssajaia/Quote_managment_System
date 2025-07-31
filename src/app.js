const express=require("express")
const connectDB=require('./config/db')
const dotenv=require('dotenv')
const quoteRoutes=require("./routes/quoteRoutes")

dotenv.config()
connectDB();

const app=express()
app.use(express.json())

app.use("/",quoteRoutes)


module.exports=app
