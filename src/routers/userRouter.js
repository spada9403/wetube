import express from "express";
import { userDetail, getEditProfile, postEditProfile, postChangePaswword, getChangePassword } from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar,postEditProfile)

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, postChangePaswword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;