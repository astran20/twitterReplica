import { addPost } from './postFunctions.js';
console.log("profilePage.js loaded")

function loadPosts() {

    console.log("Profile Page Adding Posts")
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (posts) {
        posts.forEach(postText => {
            console.log("postText: " + postText)
            if (postText && postText.trim()) {
                addPost(postText, "end");
            }
        });
    }
    document.querySelectorAll('.commentButton').forEach(button => {
        button.addEventListener("click", commentCreate)
    });
    originalText();
    updateNumPosts();
}

document.addEventListener('DOMContentLoaded', loadPosts);

const commentPopup = document.getElementById("commentPopup")

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
    postComment.style.opacity = "100%"
    postComment.classList.add("ready")
}

function postComment(){
  const originalPost = document.getElementsByTagName("article")
  const latestPost = originalPost[originalPost.length-1]
  latestPost.style.borderBottom = 0;

  const createCommentText = document.getElementById("createCommentText")
  const createCommentTextData = createCommentText.value
  console.log(createCommentTextData)
  
  closePopup()
  makeLine()

  const mainTag = document.querySelector("main")
    const newArticle = document.createElement("article")
    newArticle.className = "feed"
    
      const newPfp = document.createElement("div")
      newPfp.className = "originalPostPfp"  

        const profilePic = document.createElement("img")
        profilePic.src = "../assets/catgirl-pfp.jpg"
        profilePic.className = "icons profilePicture"
  
      const mainContent = document.createElement("section")
      mainContent.className = "newCommentContent"

        const postData = document.createElement("section")
        postData.className = "postData"

          const postMetaData = document.createElement("section")
          postMetaData.className = "postMetaData"

            const div = document.createElement("div")
                const userName = document.createElement("p")
                userName.textContent = "SweetieBot"
                userName.className = "mainP newCommentMetaData"

                const userTag = document.createElement("p")
                userTag.textContent = "@Sweetie"
                userTag.className = "subP newCommentMetaData"

                const dot = document.createElement("p")
                dot.textContent = "."
                dot.className = "dot newCommentDot"

                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                const d = new Date()
                let month = months [d.getMonth()]
                const thisMonth = document.createElement("p")
                thisMonth.textContent = month
                
                const thisDay = document.createElement("p")
                thisDay.textContent = d.getDate()

                const thisDateData = thisMonth.textContent + (" ") + thisDay.textContent
                const thisDate = document.createElement("p")
                thisDate.textContent = thisDateData
                thisDate.className = "subP newCommentMetaData postDate"


            const moreIcon = document.createElement("img")
            moreIcon.src = "../assets/moreIconGray.png"
            moreIcon.classList = "icons postMore"
        
        const div2 = document.createElement("div")
          const replyText = document.createElement("p")
          replyText.textContent = "Replying to"
          replyText.className = "subP replyingTo"
          const replyTag = document.createElement("a")
            const replyTagText = document.createElement("p")
            replyTagText.textContent = "@Sweetie"
            replyTagText.className = "subP replyingTo ogPoster"

        const postText = document.createElement("p")
        postText.textContent = createCommentTextData
        postText.className = "mainP postText"

        const newCommentPostOptionsUl = document.createElement("ul")
        newCommentPostOptionsUl.className = "newPostOptions postOptionData"

            const newCommentPostOptionsLiCommentButton = document.createElement("li")
            newCommentPostOptionsLiCommentButton.className = "postOptions"

                const newCommentCommentButton = document.createElement("button")
                newCommentCommentButton.id = "commentButton"
                newCommentCommentButton.className = "postButton commentButton"
                newCommentCommentButton.title = "Reply"
                newCommentCommentButton.addEventListener("click", commentCreate)

                    const newCommentCommentButtonIcon = document.createElement("img")
                    newCommentCommentButtonIcon.src = "../assets/commentsIcon.png"
                    newCommentCommentButtonIcon.className = "textIcon postIcon"

                const newCommentCommentAmount = document.createElement("p")
                newCommentCommentAmount.textContent = "##"
                newCommentCommentAmount.className = "subP amount"



            const newCommentPostOptionsLiRepostButton = document.createElement("li")
            newCommentPostOptionsLiRepostButton.className = "postOptions"

                const newCommentRepostButton = document.createElement("button")
                newCommentRepostButton.className = "postButton repostIcon"
                
                    const newCommentRepostButtonIcon = document.createElement("img")
                    newCommentRepostButtonIcon.src = "../assets/repostIcon.png"
                    newCommentRepostButtonIcon.className = "textIcon postIcon"

                    const newCommentRepostButtonAmount = document.createElement("p")
                    newCommentRepostButtonAmount.textContent = "##"
                    newCommentRepostButtonAmount.className = "subP amount"

            const newCommentPostOptionsLiLikeButton = document.createElement("li")
            newCommentPostOptionsLiLikeButton.className = "postOptions"

                const newCommentLikeButton = document.createElement("button")
                newCommentLikeButton.className = "postButton likeIcon"
                
                    const newCommentLikeButtonIcon = document.createElement("img")
                    newCommentLikeButtonIcon.src = "../assets/likeIcon.png"
                    newCommentLikeButtonIcon.className = "textIcon postIcon"

                    const newCommentLikeButtonAmount = document.createElement("p")
                    newCommentLikeButtonAmount.textContent = "###"
                    newCommentLikeButtonAmount.className = "subP amount"

            const newCommentPostOptionsLiViewButton = document.createElement("li")
            newCommentPostOptionsLiViewButton.className = "postOptions"

                const newCommentViewButton = document.createElement("button")
                newCommentViewButton.className = "postButton likeIcon"
                
                    const newCommentViewButtonIcon = document.createElement("img")
                    newCommentViewButtonIcon.src = "../assets/viewsIcon.png"
                    newCommentViewButtonIcon.className = "textIcon postIcon"

                    const newCommentViewButtonAmount = document.createElement("p")
                    newCommentViewButtonAmount.textContent = "###"
                    newCommentViewButtonAmount.className = "subP amount"
            
            const newCommentPostOptionsLiBookmarkButton = document.createElement("li")
            newCommentPostOptionsLiBookmarkButton.className = "postOptions"

                const newCommentBookmarkButton = document.createElement("button")
                newCommentBookmarkButton.className = "postButton likeIcon"
                
                    const newCommentBookmarkButtonIcon = document.createElement("img")
                    newCommentBookmarkButtonIcon.src = "../assets/bookmarkIcon.png"
                    newCommentBookmarkButtonIcon.className = "textIcon postIcon"

            const newCommentPostOptionsLiShareButton = document.createElement("li")
            newCommentPostOptionsLiShareButton.className = "postOptions"

                const newCommentShareButton = document.createElement("button")
                newCommentShareButton.className = "postButton likeIcon"
                
                    const newCommentShareButtonIcon = document.createElement("img")
                    newCommentShareButtonIcon.src = "../assets/shareIcon.png"
                    newCommentShareButtonIcon.className = "textIcon postIcon"
  


  mainTag.appendChild(newArticle)
      newArticle.appendChild(newPfp)
            newPfp.appendChild(profilePic)
      newArticle.appendChild(mainContent)
          mainContent.appendChild(postData)
              postData.appendChild(postMetaData)
                  postMetaData.appendChild(div)
                      div.appendChild(userName)
                      div.appendChild(userTag)
                      div.appendChild(dot)
                      div.appendChild(thisDate)
                  postMetaData.appendChild(moreIcon)
              postData.appendChild(div2)
                div2.appendChild(replyText)
                div2.appendChild(replyTag)
                    replyTag.appendChild(replyTagText)
              postData.appendChild(postText)
          mainContent.appendChild(newCommentPostOptionsUl)
              newCommentPostOptionsUl.appendChild(newCommentPostOptionsLiCommentButton)
                  newCommentPostOptionsLiCommentButton.appendChild(newCommentCommentButton)
                      newCommentCommentButton.appendChild(newCommentCommentButtonIcon)
                  newCommentPostOptionsLiCommentButton.appendChild(newCommentCommentAmount)
              newCommentPostOptionsUl.appendChild(newCommentPostOptionsLiRepostButton)
                  newCommentPostOptionsLiRepostButton.appendChild(newCommentRepostButton)
                      newCommentRepostButton.appendChild(newCommentRepostButtonIcon)
                  newCommentPostOptionsLiRepostButton.appendChild(newCommentRepostButtonAmount)
              newCommentPostOptionsUl.appendChild(newCommentPostOptionsLiLikeButton)
                  newCommentPostOptionsLiLikeButton.appendChild(newCommentLikeButton)
                      newCommentLikeButton.appendChild(newCommentLikeButtonIcon)
                  newCommentPostOptionsLiLikeButton.appendChild(newCommentLikeButtonAmount)
              newCommentPostOptionsUl.appendChild(newCommentPostOptionsLiViewButton)
                  newCommentPostOptionsLiViewButton.appendChild(newCommentViewButton)
                      newCommentViewButton.appendChild(newCommentViewButtonIcon)
                  newCommentPostOptionsLiViewButton.appendChild(newCommentViewButtonAmount)
              newCommentPostOptionsUl.appendChild(newCommentPostOptionsLiBookmarkButton)
                  newCommentPostOptionsLiBookmarkButton.appendChild(newCommentBookmarkButton)
                      newCommentBookmarkButton.appendChild(newCommentBookmarkButtonIcon)
              newCommentPostOptionsUl.appendChild(newCommentPostOptionsLiShareButton)
                  newCommentPostOptionsLiShareButton.appendChild(newCommentShareButton)
                      newCommentShareButton.appendChild(newCommentShareButtonIcon)
  
  updateNumPosts()
  originalText()
  createCommentText.value = ""  

}



updateNumPosts()
function updateNumPosts(){
  const articles = document.querySelectorAll('article')
  const numPosts = articles.length
  const numPostsIndicator = document.getElementById('numPostIndicator')
  numPostsIndicator.textContent = numPosts;
  const postAmountIndicator = document.getElementById('postAmount')
  if(numPosts == 1){
    postAmountIndicator.textContent = "post"
  }else{
    postAmountIndicator.textContent = "posts"
  }
}

function makeLine(){
    const line = document.createElement("div")
    line.className = "replyLine"
    const originalPost = document.getElementsByTagName("article")
    const latestPost = originalPost[originalPost.length-1]
    const articleHeight = latestPost.offsetHeight
    line.style.height = articleHeight - 65 + 'px'
    console.log(articleHeight)
    const ogPostPfp = document.getElementsByClassName("originalPostPfp")
    const latestPostPfp = ogPostPfp[ogPostPfp.length-1]
    latestPostPfp.appendChild(line)
}

function originalText(){
    const ogTextData = document.getElementById("createCommentPostData")
    const replyingToData = document.getElementsByClassName("postText")
    const replyingTo = replyingToData[replyingToData.length-1]
    
    const replyingToText = replyingTo.textContent
    
    ogTextData.textContent = replyingToText

    const ogDate = document.getElementById("postDate")
    const dateData = document.getElementsByClassName("postDate")
    const latestDateData = dateData[dateData.length-1]
    const latestDateDataText = latestDateData.textContent

    ogDate.textContent = latestDateDataText 
}





document.addEventListener('DOMContentLoaded', () => {
    const commentTextArea = document.getElementById("createCommentText")
    const postCommentButton = document.getElementById("postComment")
    const closePopupButton = document.querySelector(".closeCreateCommentButton")
    
    commentTextArea.addEventListener('input', ready)
    postCommentButton.addEventListener('click', postComment)
    closePopupButton.addEventListener('click', closePopup)
})