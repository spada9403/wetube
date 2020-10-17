import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import {userRouter} from "./router";

const app = express();

const handleHome = (req,res)=> res.send("Hello from my ass");

const handleProfile = (req, res) => res.send("This is Profile");

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("combined"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;