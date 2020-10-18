import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import globalRouter from "./routers/globalRouter.js";
import routes from "./routes";

const app = express();

app.set("view engine","pug");
app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;