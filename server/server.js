import express from 'express';
const PORT = process.env.PORT || 5000;
import 'dotenv/config';
import cors from 'cors';
import http from "http";
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';
const app = express();
const server = http.createServer(app);

//Middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());

//Routes setup
app.use("/api/status", (req, res)=> res.send("Server is live"));
app.use('/api/auth', userRouter);

await connectDB();

server.listen(PORT, () => console.log("Server is started on PORT:"+ PORT))
