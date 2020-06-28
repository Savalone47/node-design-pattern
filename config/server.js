import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import setRoutes from "./routes";

const server = express();

setRoutes(server);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

export default server;