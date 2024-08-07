import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import adminRouter from "./routes/admin.js";
import userRouter from "./routes/user.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)



mongoose.connect('mongodb+srv://ratneshsingh8521127312:RatNesh@cluster0.vou1k0k.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'));
