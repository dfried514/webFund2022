// array of banner image objects
var imgObjects = [
    { src: "images/stonepunk.png", alt: "Stonepunk"},
    { src: "images/cafe-neko.png", alt: "Cafe Neko: Gold Edition"},
    { src: "images/pixel-ninjas-2.png", alt: "Pixel Ninjas 2"}
];
// function to advance to next banner image in the array
// when forward arrow is clicked, moving back to the first 
// image if the end of the array is reached
function forwardImg() {
    // reference to current banner image
    var bannerImg = document.querySelector('.banner-img');
    // search array of banner images to find index of current banner image
    var idx = 0;
    while (idx < imgObjects.length && imgObjects[idx].alt !== bannerImg.alt) {
        idx++;
    }
    // increment index, and update src and alt attributes
    // of current banner image to display next image in array
    idx = (idx + 1) % imgObjects.length;
    bannerImg.src = imgObjects[idx].src;
    bannerImg.alt = imgObjects[idx].alt;
}
// function to go to the previous banner image in the array
// when backward arrow is clicked, moving to the last 
// image if the front of the array is reached
function backwardImg() {
    // reference to current banner image
    var bannerImg = document.querySelector('.banner-img');
    // search array of banner images to find index of current banner image
    var idx = 0;
    while (idx < imgObjects.length && imgObjects[idx].alt !== bannerImg.alt) {
        idx++;
    }
    // decrement index, and update src and alt attributes
    // of current banner image to display previous image in array
    idx--;
    if (idx < 0) {
        idx = imgObjects.length - 1;
    }
    bannerImg.src = imgObjects[idx].src;
    bannerImg.alt = imgObjects[idx].alt;
}
// function to increment cart count when 'buy' is clicked
function incrementCartCount() {
    var cartCount = document.querySelector('.cart-count');
    var count = parseInt(cartCount.innerText);
    
    cartCount.innerText = count + 1;
}
// function to display alert when linux icon is clicked,
// informing the user that this game is supported on Linux
function linuxAlert() {
    alert("This game is supported on Linux");
}