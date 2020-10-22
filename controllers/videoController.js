// Gloval
import routes from "../routes";
import video from "../models/Video";
export const home = async(req, res) => {
    try{
        const videos = await video.find({});
        res.render("Home", {pageTitle:"Home",videos});
    } catch(error){
        console.log(error);
        res.render("Home", {pageTitle:"Home",videos:[]});
    }
}
export const search = (req, res) => {
    const {query:{term: searchingBy}} = req;
    res.render("Search", {pageTitle:"Search", searchingBy, videos});
}
//VIDEOS
export const getUpload = (req,res) => res.render("upload",{pageTitle:"Upload"});
export const postUpload = (req, res) => {
    const {
        body:{
            file,
            title,
            description
        },
    } = req;
    //To Do Upload and save video.
    res.redirect(routes.videoDetail(312341));
};
export const videoDetail = (req,res) => res.render("videoDetail",{pageTitle:"Video Detail"});
export const editVideo = (req,res) => res.send("EditVideo",{pageTitle:"Edit Video"});
export const deleteVideo = (req,res) => res.send("DeleteVideo",{pageTitle:"Delete Video"});