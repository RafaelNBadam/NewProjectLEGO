import express from "express";
import Router from "./routes/server.router.js";
const app = express();

app.use(Router);

export default app;
