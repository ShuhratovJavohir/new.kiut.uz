// header-top drop List
// Получение элементов из DOM
const headerTopDropItem = document.querySelector('#header-top-drop');
const headerTopDropList = document.querySelector('.header-top__list-item_drop');
const headerTopSvg = headerTopDropItem.querySelector('svg');

const langBtn = document.querySelector('#lang');
const langArrow = langBtn.querySelector('img');
const langDropList = document.querySelector('#lang-drop');

function setSvgTransformAndTransition(hoverItem, transform, transition = 'all 0.3s ease-in-out') {
    hoverItem.style.transform = transform;
    hoverItem.style.transition = transition;
}

function handleMouseMoveOut(item, event, element) {
    const transformValue = item.classList.contains('active') ?
        (event.type === 'mousemove' ? 'rotate(180deg) translateY(5px)' : 'rotate(180deg) translateY(0)') :
        (event.type === 'mousemove' ? 'translateY(5px)' : 'translateY(0)');
    setSvgTransformAndTransition(element, transformValue);
}

headerTopDropItem.addEventListener('mousemove', (event) => handleMouseMoveOut(headerTopDropList, event, headerTopSvg));
headerTopDropItem.addEventListener('mouseout', (event) => handleMouseMoveOut(headerTopDropList, event, headerTopSvg));
langBtn.addEventListener('mousemove', (event) => handleMouseMoveOut(langDropList, event, langArrow));
langBtn.addEventListener('mouseout', (event) => handleMouseMoveOut(langDropList, event, langArrow));

// Открытие и закрытие выпадающего списка при клике
headerTopDropItem.addEventListener('click', function () {
    const isActive = headerTopDropList.classList.toggle('active');
    const transform = isActive ? 'rotate(180deg) translateY(5px)' : 'rotate(0deg)';
    setSvgTransformAndTransition(headerTopSvg, transform);
});

// Закрытие выпадающего списка при клике вне его области
document.addEventListener('click', function (e) {
    if (!headerTopDropItem.contains(e.target) && headerTopDropList.classList.contains('active')) {
        headerTopDropList.classList.remove('active');
        setSvgTransformAndTransition(headerTopSvg, 'rotate(0deg)'); // Возвращаем к начальному состоянию
    }
});

langBtn.addEventListener('click', function () {
    langBtn.classList.toggle('active');
    langDropList.classList.toggle('active');
    const isActive = langDropList.classList.contains('active');
    const transform = isActive ? 'rotate(180deg) translateY(5px)' : 'rotate(0deg)';
    setSvgTransformAndTransition(langArrow, transform);
});

// header-top drop List close


// nav drop List
const navList = document.querySelectorAll('.header-nav__list-link');
const navDropList = document.querySelectorAll('.header-nav-drop');

navList.forEach(item => {
    item.addEventListener('click', function () {
        const name = item.innerText.toLowerCase();
        const navDrop = document.getElementById(name);

        if (navDrop) {
            navDrop.classList.toggle('active');
            const isNowActive = navDrop.classList.contains('active');
            item.querySelector('img').style.transform = isNowActive ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        navDropList.forEach(dropItem => {
            if (dropItem !== navDrop && dropItem.classList.contains('active')) {
                dropItem.classList.remove('active');

                const associatedNavItem = Array.from(navList).find(navListItem =>
                    navListItem.innerText.toLowerCase() === dropItem.id);

                if (associatedNavItem) {
                    associatedNavItem.querySelector('img').style.transform = 'rotate(0deg)';
                }
            }
        });
    });
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.header-nav-drop') && !e.target.closest('.header-nav__list-link')) {
        navDropList.forEach(dropItem => {
            if (dropItem.classList.contains('active')) {
                dropItem.classList.remove('active');
                const associatedNavItem = Array.from(navList).find(navListItem =>
                    navListItem.innerText.toLowerCase() === dropItem.id);

                if (associatedNavItem) {
                    associatedNavItem.querySelector('img').style.transform = 'rotate(0deg)';

                }
            }
        });
    }
})

// nav drop List close

//drop burger

document.addEventListener('click', function (e) {
    if (!e.target.closest('#lang') && !e.target.closest('#lang-drop')) {
        lang.classList.remove('active');
        lang.querySelector('img').style.transform = 'rotate(0deg)';
        langDropList.classList.remove('active');
    }
})

//drop burger close

//burger menu
// Grab elements from the DOM
const burger = document.getElementById('burger');
const menu = document.getElementById('header-nav__list');
const burgerItemsList = burger.querySelectorAll('.header-nav__burger_item');

// Toggle the menu and burger icon on click

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    // Animate burger items based on menu state
    if (burger.classList.contains('active')) {
        burgerItemsList[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        burgerItemsList[1].style.display = 'none';
        burgerItemsList[2].style.transform = 'rotate(-45deg) translate(1px, 0px)';
    } else {
        burgerItemsList.forEach(item => {
            item.style.transform = '';
            item.style.display = '';
        });
    }
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-nav') && menu.classList.contains('active')) {
        menu.classList.remove('active');
        burger.classList.remove('active');
        burgerItemsList.forEach(item => {
            item.style.transform = '';
            item.style.display = '';
        });
    }
});

const loader = document.querySelector('.loader');

window.onload = function () {
    loader.style.transition = 'all 0.3s ease-in-out';
    loader.style.opacity = 0;
    loader.style.zIndex = -1;
}


const navBlock = document.querySelector('.nav-block');

document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop < lastScrollTop) {
            navBlock.style.top = '0';
        } else if (currentScrollTop > lastScrollTop) {
            navBlock.style.top = `-${navBlock.offsetHeight}px`;
            searchInput.classList.remove('active');
            searchBtn.style.opacity = 0.8;
            searchInput.value = '';
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
});


// Search
const searchInput = document.querySelector('.header-top__form-input');
const searchBtn = document.querySelector('.header-top__form-img');

searchBtn.addEventListener('click', function () {
    searchInput.classList.contains('active') ? searchBtn.style.opacity = 0.8 : searchBtn.style.opacity = 1;
    searchInput.value = '';
    searchInput.classList.toggle('active');
    searchInput.focus();
})

document.addEventListener('click', function (e) {
    if (!e.target.closest('.header-top__form') && searchInput.classList.contains('active')) {
        searchInput.classList.remove('active');
        searchBtn.style.opacity = 0.8;
        searchInput.value = '';
    }
})

window.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0)
})

// event comming
const registerBtns = document.querySelectorAll('.register');

registerBtns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        let rect = event.target.getBoundingClientRect();
        let x = rect.left + rect.width / 2; // центр кнопки по X
        let y = rect.top + rect.height / 2; // центр кнопки по Y

        let relativeX = x / window.innerWidth;
        let relativeY = y / window.innerHeight;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: {x: relativeX, y: relativeY}
        });
    })
})