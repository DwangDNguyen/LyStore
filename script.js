var metaViewport = document.getElementById("viewport");
window.onload = function () {
    if (screen.width > 420) {
        metaViewport.setAttribute("content", "user-scalable=no,width=420");
    }
    if (screen.width < 420) {
        metaViewport.setAttribute("content", "user-scalable=no,width=420");
    }
};

// slider
const slides = document.querySelectorAll(".slide");
var imgFeatured = document.querySelectorAll(".img-featured");
var listImg = document.querySelectorAll(".container_intro-img-list img");
const nexts = document.querySelectorAll(".next");
const prevs = document.querySelectorAll(".prev");
const next = document.querySelector(".list-next");
const prev = document.querySelector(".list-prev");

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// let count = 0;
let currentIndex = 0;
// nexts.forEach((next) => {
//   next.onclick = function () {
//     currentIndex++;
//     carousel();
//     changeImg(currentIndex);
//   };
// });
// prevs.forEach((prev) => {
//   prev.onclick = function () {
//     currentIndex--;
//     carousel();
//     changeImg(currentIndex);
//   };
// });

function changeImg(index) {
    document.querySelectorAll(".img-slide").forEach((item) => {
        item.style.opacity = "0.7";
    });
    currentIndex = index;
    imgFeatured[index].src = listImg[index].getAttribute("src");
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    listImg[index].parentElement.style.opacity = "1";
}

function carousel() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

listImg.forEach((img, index) => {
    img.addEventListener("click", (e) => {
        changeImg(index);
        console.log(currentIndex);
    });
});

changeImg(0);

//slick

$(document).ready(function () {
    $(".container_intro-img-list").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
});

// countdown
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

var countDownDate = new Date("Dec 7, 2022 12:00:00").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    // if (days < 10) {
    //   second.innerHTML = "0" + days;
    // } else if (hours < 10) {
    //   second.innerHTML = "0" + hours;
    // } else if (minutes < 10) {
    //   second.innerHTML = "0" + minutes;
    // } else if (seconds < 10) {
    //   second.innerHTML = "0" + seconds;
    // }

    if (distance < 0) {
        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "00";
    }
}, 1000);

// rate
const control = document.querySelector(".control-rate");
const rateContainer = document.querySelector(
    ".container_inner-content-rate-container"
);
const open = document.querySelector(".open");
const close = document.querySelector(".close");

var toggleRateControll = 1;
function toggleRateContainer(icon) {
    icon.classList.toggle("fa-angle-up");
    if (toggleRateControll == 1) {
        rateContainer.classList.add("show");
        document.querySelector(
            ".container_inner-content-comment"
        ).style.marginTop = "260px";
        toggleRateControll = 0;
    } else if (toggleRateControll == 0) {
        rateContainer.classList.remove("show");
        document.querySelector(
            ".container_inner-content-comment"
        ).style.marginTop = "0";
        toggleRateControll = 1;
    }
}

// filter
const filterBtn = document.querySelector(".container_inner-content-filter");
const filterOptions = document.querySelectorAll(".filter-container-option");

filterBtn.onclick = (e) => {
    document.querySelector(".filter-container").style.display = "block";
    e.stopPropagation();
};
window.onclick = () => {
    document.querySelector(".filter-container").style.display = "none";
};

document.querySelector(".filter-container").onclick = (e) => {
    e.stopPropagation();
};

filterOptions.forEach((option, index) => {
    option.onclick = function () {
        document.querySelector(".check").classList.remove("check");
        this.classList.add("check");
    };
});

// video
var players = document.querySelectorAll(".video-info");

var loadPlayer = function (event) {
    var target = event.currentTarget;
    var iframe = document.createElement("iframe");

    iframe.height = target.clientHeight;
    iframe.width = target.clientWidth;
    iframe.src =
        "https://www.youtube.com/embed/" +
        target.dataset.videoId +
        "?autoplay=1";
    iframe.setAttribute("frameborder", 0);

    target.classList.remove("pristine");

    if (target.children.length) {
        target.replaceChild(iframe, target.firstElementChild);
    } else {
        target.appendChild(iframe);
    }
};

var config = { once: true };

Array.from(players).forEach(function (player) {
    player.addEventListener("click", loadPlayer, config);
});
