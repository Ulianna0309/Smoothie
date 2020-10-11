(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

/*burger*/
(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const close = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header__list-item');
    burger.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    close.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            });
        }
    }
}());