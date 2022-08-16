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

// let audio = new Audio("https://www.cssigniter.com/assets/audio/new_track_05.mp3");


// document.querySelector('#play-button').addEventListener("canplaythrough", function(event) {
//     audio.play();

// });


let audios = document.querySelectorAll("#myAudio");
let plays = document.querySelectorAll("#play-button")
let pauses = document.querySelectorAll("#pause-button")

function playMusic() {
    console.log(plays)

    for (let i = 0; i < plays.length; i++) {
        plays[i].addEventListener("click", function(event) {
            audios[i].play()
            plays[i].style.display = "none";
            pauses[i].style.display = "block";

        })
    }
}

playMusic()


function pauseMusic() {
    for (let i = 0; i < pauses.length; i++) {
        pauses[i].addEventListener("click", function(event) {
            audios[i].pause()
            plays[i].style.display = "block";
            pauses[i].style.display = "none";
        })
    }
}

pauseMusic()




let x = document.querySelector(".bi-x-square");
let ow = document.querySelector(".overview")
let gm = document.querySelector("#glasses_man");

x.addEventListener("click", function(event) {
    ow.style.visibility = "hidden";
})

gm.addEventListener("click", function(event) {
    ow.style.visibility = "visible";
})