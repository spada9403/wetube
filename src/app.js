import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";
import MongoStore from "connect-mongo";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";
import { localMiddleware } from "./middlewares";

import "./passport";

const CookieStore = MongoStore(session);

const app = express();

app.use(helmet({
    contentSecurityPolicy: false
}));
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"))
app.use("/static", express.static(path.join(__dirname,"static")));
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter)

export default app;