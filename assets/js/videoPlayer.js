const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrBtn = document.getElementById("jsFullScreen");

function handlePlayClick(){
    if(videoPlayer.paused){
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}


function handleVolumeClick(){
    if(videoPlayer.muted){
        volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
        videoPlayer.muted = false;
    } else {
        volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
        videoPlayer.muted = true;
    }
}

function exitFullScreen() {
    fullScrBtn.innerHTML = '<i class="fas fa-expand"></i>'
    fullScrBtn.addEventListener("click", goFullScreen);
    document.webkitExitFullscreen();
}

function goFullScreen(){
    videoContainer.webkitRequestFullscreen();
    fullScrBtn.innerHTML = '<i class="fas fa-compress"></i>'
    fullScrBtn.removeEventListener("click", goFullScreen);
    fullScrBtn.addEventListener("click",exitFullScreen);
}

function init(){
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrBtn.addEventListener("click", goFullScreen);
}

if (videoContainer) {
    init()
}