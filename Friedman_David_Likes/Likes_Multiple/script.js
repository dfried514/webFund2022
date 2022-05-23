function incrementLikes(element) {
    var likeCounts = document.querySelectorAll('.like-count');
    var likeButtons = document.querySelectorAll('.like-button');
    
    var idx = 0;

    while (idx < likeButtons.length && likeButtons[idx] !== element) {
        idx++;
    }
    if (likeButtons[idx] === element) {
        var count = parseInt(likeCounts[idx].innerText);
        likeCounts[idx].innerText = count + 1;
    }
}