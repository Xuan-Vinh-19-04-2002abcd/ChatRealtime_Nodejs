import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './Routes/userRoute.js';
import chatRoute from "./Routes/chatRoute.js";
import messageRoute from "./Routes/messageRoute.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())
app.use("/api/users",userRouter);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);
dotenv.config();
app.get("/",(req,res)=>{
    res.send("Well come to our app  API..")
})

const  PORT = process.env.PORT || 3001;
const uri = process.env.ATLAS_URL;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connect successfully');
}).catch((error) => {
    console.error('Lỗi kết nối MongoDB:', error);
});
app.listen(PORT,(req,res)=>{
    console.log(`Server running  on port ${PORT}`);
})
