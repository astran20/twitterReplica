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

document.querySelectorAll('textarea').forEach( element => {
    element.style.height = `${element.scrollHeight}px`;
    element.addEventListener('input', event => {
      event.target.style.height = 'auto'; 
      event.target.style.height = `${event.target.scrollHeight}px`;
    })
  })

function ready(){
    postComment.style.opacity = "100%";
    console.log("hello?")
}


