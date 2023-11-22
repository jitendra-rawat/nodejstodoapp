import express from 'express'
import {config} from "dotenv"
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from 'cors'

export  const app = express();

config({
    path:"./config.env"
})



//using middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors()); 

// app.use(cors({

//      origin:'http://localhost:5173',

   
//     methods:["GET","POST","PUT","DELETE"],
//     credentials:true
// }));







//Using routes
app.use("/api/v1/users" ,userRouter)
app.use("/api/v1/task" ,taskRouter)


app.get("/" , (req, res) => {

    res.send("Hello, Backend is Working")


})


app.use( errorMiddleware )





