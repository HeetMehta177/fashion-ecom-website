function videoconAnimation() {
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function () {
        playbtn.style.opacity = 1;
        playbtn.style.scale = 1;
    })
    videocon.addEventListener("mouseleave", function () {
        playbtn.style.opacity = 0;
        playbtn.style.scale = 0;
    })
    document.addEventListener("mousemove", function (dets) {
        playbtn.style.left = dets.x - 70 + 'px';
        playbtn.style.top = dets.y - 80 + 'px';
    })
}
videoconAnimation();


function loadinganimation() {
    var page1Heading = document.querySelector("#page1 h1");
    var videoContainer = document.querySelector("#page1 #video-container");

    page1Heading.style.transition = "transform 0.9s ease, opacity 0.9s ease";
    page1Heading.style.transform = "translateY(100px)";
    page1Heading.style.opacity = "0";

    videoContainer.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    videoContainer.style.transform = "scale(0.9)";
    videoContainer.style.opacity = "0";

    // Triggering the animation after a delay
    setTimeout(function () {
        page1Heading.style.transform = "translateY(0)";
        page1Heading.style.opacity = "1";

        videoContainer.style.transform = "scale(1)";
        videoContainer.style.opacity = "1";
    }, 500); // Delay of 0.5s
}

loadinganimation();

function filterSelection(category) {
    var items = document.getElementsByClassName("column");
    if (category == "all") {
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("hidden");
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            if (!items[i].classList.contains(category)) {
                items[i].classList.add("hidden");
            } else {
                items[i].classList.remove("hidden");
            }
        }
    }
}

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

