import express, {  Request, Response } from "express";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader"
import { DumpstrServiceClient } from "./proto/dumpstr_grpc_pb";
import { MediaProcessRequest } from "./proto/dumpstr";

const app = express();
const PORT = 3000;

const packageDefinition = protoLoader.loadSync(`${process.cwd()}/src/proto/dumpstr.proto`, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
})
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const myClient = new DumpstrServiceClient('127.0.0.1:50051', grpc.credentials.createInsecure());

const request = new MediaProcessRequest({
    
});

app.use("/upload", (req: Request, res: Response) => {
    try {
        const {image} = req.body;
    } catch (error) {
        
    }
})

app.listen(PORT, ()=>{
    console.log(`Server listening on :${PORT}`)
})