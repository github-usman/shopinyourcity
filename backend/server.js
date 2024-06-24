import express from 'express'
import { serverMode,serverPort } from './config/config.js';
import mongodbConnection from "./database/dbConnect.js";
const server = express();
import bodyParser from 'body-parser';
import cors from 'cors';
import routerShop from './routes/shops.route.js';
import routerProducts from './routes/products.route.js';

server.use(bodyParser.json());
server.use(cors());
server.use("/api/v1/",routerShop);
server.use("/api/v1/",routerProducts);


mongodbConnection();
server.get("/",(req,res)=>{
    res.send("hello world")
})


server.listen(serverPort || 8080,()=>{
    console.log(`App listening on port ${serverPort} and in ${serverMode} Mode`);
})