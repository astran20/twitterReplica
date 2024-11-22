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
    const postComment = document.getElementById("postComment")
    postComment.style.opacity = "100%";
    postComment.classList.add("ready")
}

function postComment(){
  const createCommentTextData = document.getElementById('createCommentText').select()
  const newCommentText = createCommonTextData.select()

  if(postComment.classList.contains("ready")){
    console.log("test")
    const main = document.getElementsByTagName('main')
    const newArticle = document.createElement("article")
    main.appendChild(newArticle);
  }
  
}

const articles = document.querySelectorAll('article')
const numPosts = articles.length

updateNumPosts()
function updateNumPosts(){
  const numPostsIndicator = document.getElementById('numPostIndicator')
  numPostsIndicator.textContent = numPosts;
  const postAmountIndicator = document.getElementById('postAmount')
  if(numPosts == 1){
    postAmountIndicator.textContent = "post"
  }else{
    postAmountIndicator.textContent = "posts"
  }
}

