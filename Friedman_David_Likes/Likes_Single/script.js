function incrementLikes() {
    var likesCount = document.querySelector('.likes-count');
    var count = parseInt(likesCount.innerText);
    likesCount.innerText = count + 1;
}

var likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', incrementLikes);