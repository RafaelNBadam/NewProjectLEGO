import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import moongose from "mongoose";
import cookieParser from "cookie-parser";

import dbConn from "../config/dbConn.js";
import { logEvents, logger } from "./middlewares/logger.js";
import  { errorHandler }  from "./middlewares/errorHandler.js";
import { corsOptions } from "../config/corsOptions.js";
import authRouter from "./routes/auth.routes.js"

// Instances
const app = express();

// Configs
dotenv.config();
dbConn()

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRouter)

// Famoso error 404
app.all("*", (req, res)=>{
  res.status(404);
  if (req.accepts("json")){
    res.json({message: "404 Not Found"});
  } else {
    res.type("txt").send("404 Not Found")
  }
});

// Error Handler
app.use(errorHandler);

// Servidor
moongose.connection.once("open", ()=>{
  app.listen(PORT, () => {
    console.log("Modo: ",process.env.NODE_ENV)
    console.log("Conectado ao MongoDB")
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
  });
})

// Trata os erros de conexão com mongoDB de forma geral
moongose.connection.on("error", (err)=>{
  console.log(err)
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});

