import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js"; 
import userRouter from "./routes/user-routes.js"; 


const app = express();
const PORT = process.env.PORT || 5000; //

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

const MONGO_URI = process.env.MONGO_URI; //

mongoose
.connect(
    "mongodb+srv://anuradhaguptajsr12:bqeNoCInEB9SCmRi@cluster0.nn0gcow.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>app.listen(5000))
.then(()=>
    console.log("connected to database and listening to localhost 5000")
)
.catch((err) => console.log(err));


// bqeNoCInEB9SCmRi



