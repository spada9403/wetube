import express from "express";
import routes from "../routes"
import { deleteVideo, editVideo, getUpload, videoDetail, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,postUpload)
videoRouter.get(routes.videoDetail(),videoDetail);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;