const headerTop = document.querySelector('.header-top')
const nav = document.querySelector('.header-nav')
const style = document.documentElement.style;

style.setProperty('--header-top-h', `${headerTop.offsetHeight}px`)
style.setProperty('--nav-h', `${nav.offsetHeight}px`)

//gasp
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".header", {
//     scrollTrigger: {
//         trigger: ".header",
//         start: "bottom 30%",
//         end: "bottom 0",
//         scrub: true,
//     },
//     // y: -150,
//     // opacity: 0,
//     scale: 0.5,
// });
//
// gsap.to('.event', {
//     scrollTrigger: {
//         trigger: ".header-content",
//         start: "bottom 30%",
//         end: "bottom 0",
//         scrub: true,
//     },
//     y: -100,
// })
//
// gsap.to('.event', {
//     scrollTrigger: {
//         trigger: ".event",
//         start: "bottom 60%",
//         end: "bottom 0",
//         scrub: true,
//     },
//     scale: 0.5,
// })
//
// gsap.to('.news', {
//     scrollTrigger: {
//         trigger: ".event",
//         start: "bottom 100%",
//         end: "bottom 0",
//         scrub: true,
//     },
//     y: -200,
// })
//
// gsap.to('.news', {
//     scrollTrigger: {
//         trigger: ".news",
//         start: "bottom 50%",
//         end: "bottom 0",
//         scrub: true,
//     },
//     scale: 0.5,
// })
//
// gsap.to('.about', {
//     scrollTrigger: {
//         trigger: ".news",
//         start: "bottom 100%",
//         end: "bottom 0",
//         scrub: true,
//     },
//     y: -200,
// })


// event =========== >>
gsap.from(".event .title", {
    scrollTrigger: {
        trigger: ".event",
        start: "top 90%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

gsap.from(".event .event-list", {
    scrollTrigger: {
        trigger: ".event",
        start: "top 70%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

gsap.from(".event .event-list__line", {
    scrollTrigger: {
        trigger: ".event",
        start: "top 70%",
        end: "top 100px",
    },
    delay: 0.3,
    width: "100%",
    duration: 0.3, // продолжительность анимации 3 секунды
});
// event =========== <<

//news =========== >>
gsap.from(".news .title", {
    scrollTrigger: {
        trigger: ".news",
        start: "top 90%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

gsap.from(".new", {
    scrollTrigger: {
        trigger: ".news",
        start: "top 60%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
    stagger: 0.2,
});

// news =========== <<

//about =========== >>
gsap.from(".about .title", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

gsap.from(".about-info", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 60%",
        end: "top 100px",
    },
    x: -100, // перемещение на 500px по оси X
    display: "none",
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});
gsap.from(".about-video", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 60%",
        end: "top 100px",
    },
    x: 100, // перемещение на 500px по оси X
    display: "none",
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

// about =========== <<

//benefits =========== >>
gsap.from(".benefit", {
    scrollTrigger: {
        trigger: ".benefits",
        start: "top 90%",
        end: "top 100px",
    },
    stagger: 0.2,
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

let benefit_1 = {value: 0}
let benefit_2 = {value: 0}
let benefit_3 = {value: 0}

gsap.to(benefit_1, {
    scrollTrigger: {
        trigger: ".benefits",
        start: "top 90%",
        end: "top 100px",
    },
    value: 320, // Конечное значение
    delay: 0.5,
    duration: 2, // Продолжительность анимации в секундах
    onUpdate: function () {
        // Функция обновления, вызываемая при каждом шаге анимации
        document.getElementById("benefit_1").innerText = Math.round(benefit_1.value);
    },
});
gsap.to(benefit_2, {
    scrollTrigger: {
        trigger: ".benefits",
        start: "top 90%",
        end: "top 100px",
    },
    value: 60, // Конечное значение
    delay: 0.7,
    duration: 2, // Продолжительность анимации в секундах
    onUpdate: function () {
        // Функция обновления, вызываемая при каждом шаге анимации
        document.getElementById("benefit_2").innerText = Math.round(benefit_2.value);
    },
});
gsap.to(benefit_3, {
    scrollTrigger: {
        trigger: ".benefits",
        start: "top 90%",
        end: "top 100px",
    },
    value: 29, // Конечное значение
    delay: 0.9,
    duration: 2, // Продолжительность анимации в секундах
    onUpdate: function () {
        // Функция обновления, вызываемая при каждом шаге анимации
        document.getElementById("benefit_3").innerText = Math.round(benefit_3.value);
    },
});

// benefits =========== <<

//alumni =========== >>
gsap.from(".alumni .title", {
    scrollTrigger: {
        trigger: ".alumni",
        start: "top 90%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

gsap.from(".alumni .alumni-item", {
    scrollTrigger: {
        trigger: ".alumni",
        start: "top 80%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.3, // продолжительность анимации 3 секунды
    stagger: 0.2,
});

// alumni =========== <<

// partners =========== >>
gsap.from(".partners .title", {
    scrollTrigger: {
        trigger: ".partners",
        start: "top 90%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

gsap.from(".partners .partners__list-item", {
    scrollTrigger: {
        trigger: ".partners",
        start: "top 80%",
        end: "top 100px",
    },
    y: -150, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.3, // продолжительность анимации 3 секунды
    stagger: 0.2,
});
// partners =========== <<

gsap.from(".map", {
    scrollTrigger: {
        trigger: ".map",
        start: "top 80%",
        end: "top 100px",
    },
    y: -250, // перемещение на 500px по оси X
    opacity: 0, // начальное значение прозрачности 0
    duration: 0.5, // продолжительность анимации 3 секунды
});

