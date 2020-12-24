import express from "express";
import { postAddComeent, postDeleteComment, postRegisterView } from "../controllers/videoController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComeent);
apiRouter.post(routes.deleteComment,postDeleteComment)


export default apiRouter;