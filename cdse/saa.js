        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            spaceBetween: 4,
            slidesPerView: 4,
            loop: true,
            freeMode: true,
            loopAdditionalSlides: 1,
            speed: 500,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 640px
                640: {
                    slidesPerView: 8,
                    slidesPerGroup: 1,
                    freeMode: false
                }
            }
        })
