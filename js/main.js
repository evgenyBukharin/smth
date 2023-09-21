$(function () {
    var wow = new WOW({
        animateClass: 'animate__animated',
    });
    wow.init();

    Fancybox.bind('[data-fancybox="example-1"]', {
        hideScrollbar: false,
    });

    Fancybox.bind('[data-fancybox="certs"]', {
        hideScrollbar: false,
    });

    const examplesSlider = new Swiper('.examples', {
        slidesPerView: 'auto',
        spaceBetween: 20,
    });

    const advantagesSlider = new Swiper('.advantages__slider', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 20,

        pagination: {
            el: '.advantages__dots',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            0: {
                direction: 'horizontal',
            },
            769: {
                direction: 'vertical',
            },
        },
        //  mousewheel: {
        //     releaseOnEdges: 'true'
        // },
        // pagination: {
        //   el: '.advantages__dots',
        //   type: 'bullets',
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: '.advantages__arrow_next',
        //   prevEl: '.advantages__arrow_prev',
        // },
        // on: {
        //   slideChange: function () {
        //   	let height = $('.advantages__img img').height() - $('.advantages__img').height();
        //   	let part = height / ($('.advantage').length - 1);
        //   	let shift = part * advantagesSlider.activeIndex;
        //   	if (height > 0) {
        //   		$('.advantages__img img').css('top', -shift + 'px');
        //   	}
        //   },
        // },
    });

    const media576 = window.matchMedia('(max-width: 576px)');

    const advantagesOverlay = new Swiper('.advantages__overlay', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 0,
        touchReleaseOnEdges: true,
        mousewheel: {
            releaseOnEdges: 'true',
        },
        navigation: {
            nextEl: '.advantages__arrow_next',
            prevEl: '.advantages__arrow_prev',
        },
        on: {
            slideChange: function () {
                let height = $('.advantages__img img').height() - $('.advantages__img').height();
                console.log($('.advantages__img img').height(), $('.advantages__img').height());
                let part = height / ($('.advantage').length - 1);
                let shift = part * advantagesSlider.activeIndex;
                if (height > 0) {
                    $('.advantages__img img').css('transform', `translateY(${-shift + 'px'})`);
                } else {
                    $('.advantages__img img').css('transform', `translateY(${shift + 'px'})`);
                }
            },
        },
        thumbs: {
            swiper: advantagesSlider,
        },
    });

    $('.faq__question').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle(300);
    });
});
