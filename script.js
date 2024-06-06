let scrollContainer = document.querySelector('.gallery');
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");



nextbtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backbtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

