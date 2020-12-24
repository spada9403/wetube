import axios from "axios"

const commentList = document.getElementById("jsCommentList");
const deleteCommentBtn = commentList.querySelectorAll(".delete-comment");
const commentNumber = document.getElementById("jsCommentNumber")

let deleteList;

const deleteComment =() =>{
    deleteList.remove();
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML,10) -1;
}

const sendDlComment =async(comment) => {
    const videoId = window.location.href.split("/videos/")[1]
    const response = await axios({
        url:`/api/${videoId}/delete_comment`,
        method:"POST",
        data: {
            comment
        }
    })
    if(response.status === 200){
        deleteComment()
    }
}

const handleEvent = (event) => {
    const comment = event.path[1].textContent.split("❌")[0]
    deleteList =  event.path[2];
    sendDlComment(comment)

}

function init() {
    for(let i=0; i<=deleteCommentBtn.length; ){
        deleteCommentBtn[i].addEventListener("click",handleEvent)
        i += 1
    }
}

if(commentList){
    init()
}