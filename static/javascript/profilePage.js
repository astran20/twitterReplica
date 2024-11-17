const commentPopup = document.getElementById("commentPopup")

const comment = document.getElementsByClassName("commentButton")
commentButton.addEventListener("click",commentCreate) 

const commentPopupBg = document.getElementById("commentPopupBackground")

function commentCreate(){
    commentPopup.classList.add("open")
    commentPopupBg.classList.add("opaque")
}

function closePopup(){
    commentPopup.classList.remove("open")
    commentPopupBg.classList.remove("opaque")
}