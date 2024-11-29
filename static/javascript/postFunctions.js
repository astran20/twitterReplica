function addPost(text, location) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const d = new Date()
    const month = months[d.getMonth()]
    const day = d.getDate()

    const postTemplate = `
    <article class="post">
        <div class="originalPostPfp">
            <image src = "../assets/catgirl-pfp.jpg" class="post-profile-pic ">
        </div>
        <div class="postBody">
            <div class="postTop">
                <span class="post-name-date">SweetieBot</span>
                <span class="post-name-date postDate">${month} ${day}</span>
            </div>
            <div class="postMiddle">
                <p class="postText">${text}</p>
            </div>
            <div class="postBottom">
                <ul class="postOptionData">
                    <li class="postOptions">
                        <button class="postButton commentButton">
                            <img src="../assets/commentsIcon.png" class="textIcon postIcon">
                        </button>
                    </li>
                    <li class="postOptions">
                        <button class="postButton repostButton">
                            <img src="../assets/repostIcon.png" class="textIcon postIcon">
                        </button>
                    </li>
                    <li class="postOptions">
                        <button class="postButton likeIcon">
                            <img src="../assets/likeIcon.png" class="textIcon postIcon">
                        </button>
                    </li>
                    <li class="postOptions">
                        <button class="postButton viewIcon">
                            <img src="../assets/viewsIcon.png" class="textIcon postIcon">
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </article>
    `
    const post = document.createElement("div");
    post.innerHTML = postTemplate;



    const postCompose = document.getElementById("post-compose");
    const main = document.querySelector("main");

    if (location === "start") {
        postCompose.after(post);
    } else if (location === "end") {
        main.appendChild(post);
    }

    return post;
}

export { addPost }; 