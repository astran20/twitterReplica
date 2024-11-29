//text area grow
const textarea = document.querySelector('#compose-input');

textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.max(this.scrollHeight, 10) + 'px';
});


//add posts
const addButton = document.getElementById("compose-post-btn");
const inputField = document.getElementById("compose-input");
const postCompose = document.getElementById("post-compose");
const main = document.querySelector("main");

function addPost(text, location) {
    const postDiv = document.createElement("article");
    postDiv.className = "post";

    const postTop = document.createElement("div");
    postTop.className = "postTop";

    const profilePic = document.createElement("img");
    profilePic.src = "../assets/catgirl-pfp.jpg";
    profilePic.className = "post-profile-pic";
    postTop.appendChild(profilePic);
    
    const postText = document.createElement("div");
    postText.className = "post-text";
    postText.textContent = text;
    postTop.appendChild(postText);

    postDiv.appendChild(postTop);

    if (location === "start") {
        postCompose.after(postDiv);
    } else if (location === "end") {
        main.appendChild(postDiv);
    }

    inputField.value = "";
    savePosts();
}

addButton.addEventListener("click", addPost);
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (inputField.value.trim()) {
            addPost(inputField.value, "start");
        }
    }
});

//save and load posts

function savePosts() {
    const posts = [];
    document.querySelectorAll('.post .postTop .post-text').forEach(post => {
        posts.push(post.textContent);
    });
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    
    posts.forEach(postText => {
        if (postText && postText.trim()) {
          addPost(postText, "end");
        }
    });
}


document.addEventListener('DOMContentLoaded', loadPosts);
