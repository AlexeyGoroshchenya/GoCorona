export const burger = () => {

    const menuBtn = document.querySelector('.menu__icon')
    const menu = document.querySelector('.menu__body')
    const burgerBtn = document.querySelector('.btn-menu-close')

    const moveMenu = () => {
        menu.classList.toggle('menu__body-disabled')
        menuBtn.classList.toggle('icon-menu-close')
    }

    document.querySelector('.header').addEventListener('click', (e) => {

        if (e.target.closest('.menu__icon') || e.target.closest('.btn-menu-close')) {
            e.preventDefault()
            moveMenu()
        }

        if (e.target.matches('.menu__item>a')) {
            e.preventDefault()
            moveMenu()
        }

    })
}