import express, {Request, Response} from 'express';
import {config} from "dotenv";
import {router} from "./routes/contact.route";
config();
const app = express();
const PORT =  process.env.PORT || 3000;

app.use("/api/contacts", router);

app.listen(PORT, ()=> {
    console.log(`Port is ${process.env.PORT}`);
    console.log("Server has been started");
});