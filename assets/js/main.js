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
            
        }, 1500);
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
// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ********** Swiper Images **********
const swiperJS = () => {
    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 74,
            depth: 95,
            modifier: 2,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        }
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
