import { animate } from "./helpers";

export const scroll = () => {

    const goTo = (target) => {

        const linkTargetName = target.getAttribute('href').replace('#', '')

        animate({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {

                let count = document.getElementById(linkTargetName).offsetTop * progress

                window.scrollTo({
                    top: count,
                })
            }
        });



    }

    document.querySelector('.header').addEventListener('click', (e) => {

        if (e.target.matches('.menu__element>a') || e.target.matches('.header__button')) {
            e.preventDefault()

            goTo(e.target)
        }
    })
}