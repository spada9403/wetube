import express from "express";
import passport from "passport";
import routes from "../routes"
import { getJoin, getLogin, githubLogin, logout, getMe, postGithubLogIn, postJoin, postLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login,postLogin)

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(routes.githubCallback, passport.authenticate("github",{ failureRedirect: "/login"}),postGithubLogIn)

globalRouter.get(routes.me,getMe);

export default globalRouter;