import Swiper, { Autoplay } from 'swiper';


export const swiper = () => {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,

        centeredSlides: true,
        loop: true,
        modules: [Autoplay],
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },


        /*
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                    }
                }
        */
    }
    );


}

