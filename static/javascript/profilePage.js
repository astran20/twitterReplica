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
  const originalPost = document.querySelector("article")
  originalPost.style.borderBottom = 0;

  const createCommentText = document.getElementById("createCommentText")
  const createCommentTextData = createCommentText.value
  console.log(createCommentTextData)
  
  closePopup()
  makeLine()

  const mainTag = document.querySelector("main")
    const newArticle = document.createElement("article")
    newArticle.className = "feed"
  
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
                thisMonth.className = "subP newCommentMetaData"

                const thisDay = document.createElement("p")
                thisDay.textContent = d.getDate()
                thisDay.className = "subP newCommentMetaData"
              
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
        postText.classList = "mainP postText"

        const newCommentPostOptionsUl = document.createElement("ul")
        newCommentPostOptionsUl.id = "postOptions"
        newCommentPostOptionsUl.className = "newPostOptions"

            const newCommentPostOptionsLiCommentButton = document.createElement("li")
            newCommentPostOptionsLiCommentButton.className = "postOptions"

                const newCommentCommentButton = document.createElement("button")
                newCommentCommentButton.id = "commentButton"
                newCommentCommentButton.className = "postButton commentButton"
                newCommentCommentButton.title = "Reply"

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
      newArticle.appendChild(profilePic)
      newArticle.appendChild(mainContent)
          mainContent.appendChild(postData)
              postData.appendChild(postMetaData)
                  postMetaData.appendChild(div)
                      div.appendChild(userName)
                      div.appendChild(userTag)
                      div.appendChild(dot)
                      div.appendChild(thisMonth)
                      div.appendChild(thisDay)
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
    const articleHeight = document.querySelector("article").offsetHeight
    line.style.height = articleHeight - 70 + 'px'
    console.log(articleHeight)
    document.getElementById("originalPostPfp").appendChild(line)
}

