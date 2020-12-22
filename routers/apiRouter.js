import express from "express";
import { postAddComeent, postRegisterView } from "../controllers/videoController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComeent);


export default apiRouter;