import express, {  Request, Response } from "express";
import grpc, { GrpcObject } from "@grpc/grpc-js";

const app = express();
const PORT = 3000;


app.use("/upload", (req: Request, res: Response) => {
    try {
        const {image} = req.body;
    } catch (error) {
        
    }
})

app.listen(PORT, ()=>{
    console.log(`Server listening on :${PORT}`)
})