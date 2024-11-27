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

function addPost() {

    if (!inputField.value.trim()) {
        return;
    }

    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const profilePic = document.createElement("img");
    profilePic.src = "../assets/catgirl-pfp.jpg";
    profilePic.className = "post-profile-pic";
    
    const postText = document.createElement("div");
    postText.className = "post-text";
    postText.textContent = inputField.value;

    postDiv.appendChild(profilePic);
    postDiv.appendChild(postText);
    postCompose.after(postDiv);
    
    inputField.value = "";
    savePosts();
}

addButton.addEventListener("click", addPost);
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addPost();
    }
});

//save and load posts

function savePosts() {
    const posts = [];
    document.querySelectorAll('.post .post-text').forEach(post => {
        posts.push(post.textContent);
    });
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    
    posts.forEach(postText => {
        if (postText && postText.trim()) {
            const postDiv = document.createElement("div");
            postDiv.className = "post";

            const profilePic = document.createElement("img");
            profilePic.src = "../assets/catgirl-pfp.jpg";
            profilePic.className = "post-profile-pic";
            
            const postTextDiv = document.createElement("div");
            postTextDiv.className = "post-text";
            postTextDiv.textContent = postText;

            postDiv.appendChild(profilePic);
            postDiv.appendChild(postTextDiv);
            document.querySelector('main').appendChild(postDiv);
        }
    });
}


document.addEventListener('DOMContentLoaded', loadPosts);
