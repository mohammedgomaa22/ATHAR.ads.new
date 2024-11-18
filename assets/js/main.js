// ***************************************************
// Preloader
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        setTimeout(function () {
            loader.classList.add("opacity-0");
            setTimeout(function () { 
                loader.classList.add("hidden");
            } , 200);
            
        }, 1000);
    });
});

// ***************************************************
// Typed js

function typedJs(dots = "...") {
    
    var typed1 = new Typed('#typed_dots', {
        strings: [
            dots
        ],
        delay: 0,
        typeSpeed: 150,
        backSpeed: 0,
        loop: true,
        cursorChar: ''
    });
}
typedJs();

// ***************************************************
// ********** Swiper VIDEO **********

const swiperJS = () => {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        shadow: false,
        simulateTouch: true,
        touchStartPreventDefault: false,
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
    });

};
swiperJS();

// ***************************************************

const openVideo = () => {
    const model = document.getElementById("model");
    const getVideo = document.querySelectorAll("[data-getVideo]");
    const setVideo = document.querySelector("[data-setVideo]");
    document.querySelector("[data-close]").addEventListener("click", () => {
        setVideo.pause();
        setVideo.removeAttribute("src");
        model.style.display = "none";
    });

    getVideo.forEach((vid) => {
        vid.addEventListener("click", () => {
            setVideo.setAttribute("src", vid.getAttribute("src"));
            setVideo.play();
            model.style.display = "flex";
        })
    })
    
};
openVideo();
