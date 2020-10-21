// Gloval
import { videos } from "../db";
export const home = (req, res) => {
    res.render("Home", {pageTitle:"Home",videos});
}
export const search = (req, res) => {
    const {query:{term: searchingBy}} = req;
    res.render("Search", {pageTitle:"Search", searchingBy, videos});
}
//VIDEOS
export const upload = (req,res) => res.send("Upload",{pageTitle:"Upload"});
export const videoDetail = (req,res) => res.send("VideoDetail",{pageTitle:"Video Detail"});
export const editVideo = (req,res) => res.send("EditVideo",{pageTitle:"Edit Video"});
export const deleteVideo = (req,res) => res.send("DeleteVideo",{pageTitle:"Delete Video"});