let slideIndex = 0;

slider()

function slider() {
    let mains = document.getElementsByClassName("main");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < mains.length; i++) {
        mains[i].style.display = "none";
        dots[i].style.backgroundColor = "#443a1c78"
    }
    slideIndex++;
    if (slideIndex > mains.length) {
        slideIndex = 1
    }
    mains[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "#443a1c"
    setTimeout(slider, 4000)
}