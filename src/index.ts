import express, {  Request, Response } from "express";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader"
import { MediaProcessRequest, DumpstrServiceClient } from "./proto/dumpstr";

const app = express();
const PORT = 3000;

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({ extended: true }));

const packageDefinition = protoLoader.loadSync(`${process.cwd()}/src/proto/dumpstr.proto`, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
})
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const myClient = new DumpstrServiceClient('127.0.0.1:50051', grpc.credentials.createInsecure());

app.use("/upload", (req: Request, res: Response) => {
    try {
        const {image, type} = req.body;

        const request = new MediaProcessRequest({
            type: type,
            media: image,
            api_version: '1'
        });

        myClient.ProcessMediaDump(request, (err, response)=>{
            if (!err) {
                console.log('Response:', response?.media_url);
                res.json({response})
              } else {
                console.error('Error:', err.message);
                res.status(400).send()
              }
        })
    } catch (error: any) {
        console.error(`Error: ${error.message}`)
        res.status(400).send()
    }
})

app.listen(PORT, ()=>{
    console.log(`Server listening on :${PORT}`)
})