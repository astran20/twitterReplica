import { addPost } from './postFunctions.js';

const textarea = document.querySelector('#compose-input');
const addButton = document.getElementById("compose-post-btn");
const inputField = document.getElementById("compose-input");

textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.max(this.scrollHeight, 10) + 'px';
});

addButton.addEventListener("click", () => {
    if (inputField.value.trim()) {
        addPost(inputField.value, "start");
        inputField.value = "";
        savePosts();
    }
});

inputField.addEventListener("keypress", event => {
    if (event.key === "Enter" && inputField.value.trim()) {
        addPost(inputField.value, "start");
        inputField.value = "";
        savePosts();
    }
});

function savePosts() {
    const posts = [];
    document.querySelectorAll('.post .postMiddle .post-text').forEach(post => {
        posts.push(post.textContent);
    });
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (posts) {
        posts.forEach(postText => {
            if (postText && postText.trim()) {
                addPost(postText, "end");
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', loadPosts);
