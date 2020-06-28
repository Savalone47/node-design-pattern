import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

export default server;