// import mongoose from "mongoose"
// import  { DB_NAME } from "./constants"
// import express from "express"
import dotenv from "dotenv";
import connectDB from "./db/index.js"
// const app = express()

dotenv.config({
    path: "./env",
});

connectDB()
//Approach 1
// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERRR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch{
//         console.error("ERROR: ", error)
//         throw error
//     }
// } )()
