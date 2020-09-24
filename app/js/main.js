$(function () {

    $('.banner-slider').slick({
        prevArrow: '<button class="banner-slider__arrows banner-slider__arrow-prev">\n' +
            '        <img src="img/arrow-left-slider-double.png" alt="">\n' +
            '    </button>\n' ,
        nextArrow: '<button class="banner-slider__arrows banner-slider__arrow-next">\n' +
            '        <img src="img/arrow-right-slider-double.png" alt="">\n' +
            '    </button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    arrows: false,
                }
            }
        ]
    });


    $('.happy-client__slider').slick({
        slidesToScroll: 1,
        slidesToShow: 6,
        prevArrow: '<button class="happy-client-slider__arrows happy-client-slider__arrow-prev">\n' +
            '<?xml version="1.0" encoding="iso-8859-1"?>\n' +
            '<svg version="1.1" x="0px" y="0px"\n' +
            '\t viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"  fill="#98a3a3" xml:space="preserve">\n' +
            '<path id="XMLID_18_" d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15\n' +
            '\tC330,6.716,323.284,0,315,0z M215.606,234.394c5.858,5.857,5.858,15.355,0,21.213C212.678,258.535,208.839,260,205,260\n' +
            '\ts-7.678-1.464-10.606-4.394l-80-79.998c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002\n' +
            '\tc5.857-5.858,15.355-5.858,21.213,0c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L215.606,234.394z"/>\n' +
            '</svg>' +
            '    </button>',
        nextArrow: '<button class="happy-client-slider__arrows happy-client-slider__arrow-next">\n' +
            '        <?xml version="1.0" encoding="iso-8859-1"?>\n' +
            '<svg version="1.1" x="0px" y="0px"\n' +
            '\t viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" fill="#98a3a3"' +
            ' xml:space="preserve">\n' +
            '<path id="XMLID_15_" d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15\n' +
            '\tC330,6.716,323.284,0,315,0z M215.606,175.605l-80,80.002C132.678,258.535,128.839,260,125,260c-3.839,0-7.678-1.464-10.606-4.394\n' +
            '\tc-5.858-5.857-5.858-15.355,0-21.213l69.394-69.396l-69.394-69.392c-5.858-5.857-5.858-15.355,0-21.213\n' +
            '\tc5.857-5.858,15.355-5.858,21.213,0l80,79.998c2.813,2.813,4.394,6.628,4.394,10.606C220,168.976,218.42,172.792,215.606,175.605z"\n' +
            '\t/>\n' +
            '</svg>' +
            '    </button>' ,
        responsive: [
            {
                breakpoint: 1151,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 951,
                settings: {
                    slidesToShow: 4,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 571,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    centerMode: true,
                    arrows: false,
                }
            },

        ]

        });

    $('.menu-btn').on('click',function () {
        $('.menu-list').toggleClass('menu-list--active');
    });


});
