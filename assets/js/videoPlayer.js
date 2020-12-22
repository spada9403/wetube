const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime")
const volumeRange = document.getElementById("jsVolume");

const registerView = () =>{
    const videoId = window.location.href.split("/videos/")[1]
    fetch(`/api/${videoId}/views`,{
        method: "POST"
    })
}

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
        volumeRange.value = videoPlayer.volume;
    } else {
        volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
        videoPlayer.muted = true;
        volumeRange.value = 0
    }
}

function exitFullScreen() {
    if(videoContainer.exitFullScreen){
        videoContainer.exitFullScreen();
    } else if(videoContainer.mozCanceFullScreen){
        videoContainer.mozCanceFullScreen();
    } else if(videoContainer.webkitExitFullscreen){
        videoContainer.webkitExitFullscreen();
    } else if(videoContainer.msExitFullScreen){
        videoContainer.msExitFullScreen();
    }
    fullScrBtn.innerHTML = '<i class="fas fa-expand"></i>'
    fullScrBtn.addEventListener("click", goFullScreen);
    document.webkitExitFullscreen();
}

function goFullScreen(){
    if(videoContainer.requestFullscreen){
        videoContainer.requestFullscreen();
    } else if(videoContainer.mozRequestFullScreen){
        videoContainer.mozRequestFullScreen();
    } else if(videoContainer.webkitRequestFullscreen){
        videoContainer.webkitRequestFullscreen();
    } else if(videoContainer.msRequestFullscreen){
        videoContainer.msRequestFullscreen();
    }
    fullScrBtn.innerHTML = '<i class="fas fa-compress"></i>'
    fullScrBtn.removeEventListener("click", goFullScreen);
    fullScrBtn.addEventListener("click",exitFullScreen);
}

const formatDate = seconds => {
    const secondsNumber = parseInt(seconds,10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

    if(hours < 10){
        hours = `0${hours}`;
    }
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    if(totalSeconds < 10){
        totalSeconds = `0${totalSeconds}`
    }
    return `${hours}:${minutes}:${totalSeconds}`
}

function getCurrentTime() {
    currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime))
}

function setTotalTime(){
    totalTime.innerHTML = formatDate(videoPlayer.duration);
}

function handleEnded(){
    registerView()
    videoPlayer.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function handleDrag(event){
    const {target: { value }} = event;
    videoPlayer.volume = value;
    if(value >= 0.6){
        volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
    } else if(value >= 0.2){
        volumeBtn.innerHTML = `<i class="fas fa-volume-down"></i>`;
    } else {
        volumeBtn.innerHTML = `<i class="fas fa-volume-off"></i>`;
    }
}

function init(){
    videoPlayer.volume = 0.5
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrBtn.addEventListener("click", goFullScreen);
    videoPlayer.addEventListener("loadedmetadata",setTotalTime);
    videoPlayer.addEventListener("timeupdate", getCurrentTime);
    videoPlayer.addEventListener("ended",handleEnded);
    volumeRange.addEventListener("input", handleDrag)
}

if (videoContainer) {
    init()
}