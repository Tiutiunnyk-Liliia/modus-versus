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

    $('.footer-community__title').on('click',function () {
        $('.footer-community').toggleClass('footer-community--active');
    });

    $('.footer-company__title').on('click',function () {
        $('.footer-company').toggleClass('footer-company--active');
    });



    $('.post-slider').slick({
        prevArrow: '<button class="post-slider__arrows post-slider__arrow-prev">\n' +
            '        <img src="img/arrow-left-slider-double.png" alt="">\n' +
            '    </button>\n' ,
        nextArrow: '<button class="post-slider__arrows post-slider__arrow-next">\n' +
            '        <img src="img/arrow-right-slider-double.png" alt="">\n' +
            '    </button>',
        // responsive: [
        //     {
        //         breakpoint: 1001,
        //         settings: {
        //             arrows: false,
        //         }
        //     }
        // ]
    });


    $('.poster-slider').slick({
        prevArrow: '<button class="poster-slider__arrows poster-slider__arrow-prev">\n' +
            '        <img src="img/arrow-left-slider-double.png" alt="">\n' +
            '    </button>\n' ,
        nextArrow: '<button class="poster-slider__arrows poster-slider__arrow-next">\n' +
            '        <img src="img/arrow-right-slider-double.png" alt="">\n' +
            '    </button>',
        dots: true,
        slidesToShow: 1,
    });

    $('.portfolio-slider').slick({
        prevArrow: '<button class="portfolio-slider__arrows portfolio-slider__arrow-prev">\n' +
            '        <img src="img/arrow-left-slider-double.png" alt="">\n' +
            '    </button>\n' ,
        nextArrow: '<button class="portfolio-slider__arrows portfolio-slider__arrow-next">\n' +
            '        <img src="img/arrow-right-slider-double.png" alt="">\n' +
            '    </button>',
        dots: true,
        slidesToShow: 1,
    });

    $('.portfolio-related-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        prevArrow: '<button class="portfolio-related-slider__arrows portfolio-related-slider__arrow-prev">\n' +
            '<?xml version="1.0" encoding="iso-8859-1"?>\n' +
            '<svg version="1.1" x="0px" y="0px"\n' +
            '\t viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"  fill="#98a3a3" xml:space="preserve">\n' +
            '<path id="XMLID_18_" d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15\n' +
            '\tC330,6.716,323.284,0,315,0z M215.606,234.394c5.858,5.857,5.858,15.355,0,21.213C212.678,258.535,208.839,260,205,260\n' +
            '\ts-7.678-1.464-10.606-4.394l-80-79.998c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002\n' +
            '\tc5.857-5.858,15.355-5.858,21.213,0c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L215.606,234.394z"/>\n' +
            '</svg>' +
            '    </button>',
        nextArrow: '<button class="portfolio-related-slider__arrows portfolio-related-slider__arrow-next">\n' +
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

    $('.features-bigslider').slick({
        prevArrow: '<button class="features-bigslider__arrows features-bigslider__arrow-prev">\n' +
            '        <img src="img/arrow-left-slider-double.png" alt="">\n' +
            '    </button>\n' ,
        nextArrow: '<button class="features-bigslider__arrows features-bigslider__arrow-next">\n' +
            '        <img src="img/arrow-right-slider-double.png" alt="">\n' +
            '    </button>',
        dots: true,
        slidesToShow: 1,
    });

    $('.features-middleslider').slick({
        prevArrow: '<button class="features-middleslider__arrows features-middleslider__arrow-prev">\n' +
            '        <img src="img/arrow-left-slider-double.png" alt="">\n' +
            '    </button>\n' ,
        nextArrow: '<button class="features-middleslider__arrows features-middleslider__arrow-next">\n' +
            '        <img src="img/arrow-right-slider-double.png" alt="">\n' +
            '    </button>',
        dots: true,
        slidesToShow: 1,
    });

    $('.features-smallslider').slick({
        prevArrow: '<button class="features-smallslider__arrows features-smallslider__arrow-prev">\n' +
            '        <img src="img/arrow-left-slider-double.png" alt="">\n' +
            '    </button>\n' ,
        nextArrow: '<button class="features-smallslider__arrows features-smallslider__arrow-next">\n' +
            '        <img src="img/arrow-right-slider-double.png" alt="">\n' +
            '    </button>',
        dots: true,
        slidesToShow: 1,
    });


    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    });


});

/////// VIDEO

document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;

let video;
let display;
let videoProgress;

video = document.querySelector('#video-player');
videoProgress = document.querySelector('#video-progress');
video.ontimeupdate = videoProgressUpdate;
videoProgress.onclick = videoRewind;
video.oncanplay = videoLasting;


function play() {
    video.play();
}

function pause() {
    video.pause();
}

function videoLasting() {
    document.querySelector('#video-time__all').innerHTML = video.duration;
    document.querySelector('#video-time__now').innerHTML = 0;
}

function videoProgressUpdate() {
    let videoDuration = video.duration;
    let videoCurrent = video.currentTime;
    videoProgress.value = (videoCurrent/videoDuration)*100;
    document.querySelector('#video-time__now').innerHTML = video.currentTime;
}

function videoRewind() {
    let progressWidth = this.offsetWidth;
    let progressPosition = event.offsetX;
    this.value = (progressPosition/progressWidth)*100;
    video.pause();
    video.currentTime = video.duration*(progressPosition/progressWidth);
    video.play();
}



///////AUDIO


document.querySelector('#audio-play').onclick = audioPlay;
document.querySelector('#audio-pause').onclick = audioPause;

let audio;
let audioDisplay;
let audioProgress;

audio = document.querySelector('#audio-player');
audioProgress = document.querySelector('#audio-progress');
audio.ontimeupdate = audioProgressUpdate;
audioProgress.onclick = audioRewind;
audio.oncanplay = audioLasting;


function audioPlay() {
    audio.play();
}

function audioPause() {
    audio.pause();
}

function audioLasting() {
    document.querySelector('#audio-time__all').innerHTML = audio.duration;
    document.querySelector('#audio-time__now').innerHTML = 0;
}

function audioProgressUpdate() {
    let audioDuration = audio.duration;
    let audioCurrent = audio.currentTime;
    audioProgress.value = (audioCurrent/audioDuration)*100;
    document.querySelector('#audio-time__now').innerHTML = audio.currentTime;
}

function audioRewind() {
    let progressWidth = this.offsetWidth;
    let progressPosition = event.offsetX;
    this.value = (progressPosition/progressWidth)*100;
    audio.pause();
    audio.currentTime = audio.duration*(progressPosition/progressWidth);
    audio.play();
}


