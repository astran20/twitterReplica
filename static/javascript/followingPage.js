const addButton = document.getElementById("compose-post-btn");
const inputField = document.getElementById("compose-input");
const mainTag = document.querySelector("main");

function addPost() {
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
    mainTag.appendChild(postDiv);
    inputField.value = "";
}

addButton.addEventListener("click", addPost);
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addPost();
    }
});
