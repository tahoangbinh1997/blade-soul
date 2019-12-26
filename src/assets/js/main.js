$(document).ready(function () {

    $('#fullpage').fullpage({
        scrollHorizontally: true,
        scrollBar: false,
        sectionSelector: '.section',
        afterLoad: function (origin, destination, direction) {
            $('.section').eq(destination.index).addClass('current');
        },
        onLeave: function (origin, destination, direction) {
            $('.section').eq(origin.index).removeClass('current');
            console.log(origin);
            console.log(destination);
            console.log(direction);
        },
    });

    $('.owl-carousel').owlCarousel({
        loop: false,
        item: 8,
        autoWidth: true,
        animateOut: true,
        dots: true,
        margin: 5,
    });

    //vừa load vào trang là phải load qua đoạn jquery này luôn để xác định được width và height cho jframe background
    var iframeLoadWidth = window.innerWidth;
    var iframeLoadHeight = window.innerWidth * 9 / 16;
    var windowHeight = window.innerHeight;
    $('#youtube-bg').attr({'width': iframeLoadWidth, 'height': windowHeight});
    $('#youtube-bg').css({'width': iframeLoadWidth, 'height': iframeLoadHeight});

    $('.menu-icon').on('click', function () {
        $(this).parents('.menu-btn').toggleClass('open');
    });
    $(window).on('resize', function () {
        var iframeWidth = window.innerWidth;
        var iframeHeight = window.innerWidth * 9 / 16;
        var windowHeight = window.innerHeight;
        $('#youtube-bg').attr({'width': iframeWidth, 'height': windowHeight});
        $('#youtube-bg').css({'width': iframeWidth, 'height': iframeHeight});
    });

    $('.video-replay').on('click', function () {
        $.fancybox.open({
            width: 700,
            height: 450,
            src: '//www.youtube.com/embed/ybT11O55gU0?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1',
            type: 'iframe',
            opts: {
                afterShow: function (instance, current) {
                    console.info('done!');
                }
            }
        });
        $('.fancybox-button--close').children('svg').css({'display': 'none'});
        $('.fancybox-button--close').css({'background': "url('src/assets/images/icon/modal-close.png') no-repeat center"});
    });

    $('.arrow-down').on('click', function (event) {
        event.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    $('.modal-open').on('click', function () {
        $modal = $(this).attr('data-target');
        $($modal).addClass('opened');
    });

    $('.modal-wrapper').on('click', function () {
        $(this).removeClass('opened');
    });

    $('.modal-body').on('click', function () {
        event.stopPropagation();
    });

    $('.modal-close').on('click', function () {
        $(this).parents('.modal-wrapper').removeClass('opened');
    })

    $('.video-play').on('click', function () {
        event.stopPropagation();
        var className = $(this).attr('data-class');
        var iframeUrl = '';
        if (className === 'destroyer') {
            iframeUrl = '//www.youtube.com/embed/YfHPURnDcME?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }
        if (className === 'forcemaster') {
            iframeUrl = '//www.youtube.com/embed/tgXINoIo9_A?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }
        if (className === 'bladedancer') {
            iframeUrl = '//www.youtube.com/embed/IRh_Nc9nBko?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }
        if (className === 'assassin') {
            iframeUrl = '//www.youtube.com/embed/6j5w6q39eaY?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }
        if (className === 'blademaster') {
            iframeUrl = '//www.youtube.com/embed/fFPOPww1Dq0?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1v';
        }
        if (className === 'kungfumaster') {
            iframeUrl = '//www.youtube.com/embed/D8DUPUXtYNE?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }
        if (className === 'summoner') {
            iframeUrl = '//www.youtube.com/embed/rkiPSRcKW8M?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }
        if (className === 'soulmaster') {
            iframeUrl = '//www.youtube.com/embed/BNexRz6bncU?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }
        if (className === 'first-intro') {
            iframeUrl = '//www.youtube.com/embed/ZMhCbxE6kbM?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }
        if (className === 'second-intro') {
            iframeUrl = '//www.youtube.com/embed/Ss07PmrpUy8?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1';
        }

        $.fancybox.open({
            width: 700,
            height: 450,
            src: iframeUrl,
            type: 'iframe',
            opts: {
                afterShow: function (instance, current) {
                    console.info('done!');
                }
            }
        });
        $('.fancybox-button--close').children('svg').css({'display': 'none'});
        $('.fancybox-button--close').css({'background': "url('src/assets/images/icon/modal-close.png') no-repeat center"});
    });

    // $('.wrap-assassin').on('mousemove', function (event) {
    //     var x = event.screenX;
    //     var y = event.screenY;
    //     var wrapperWidth = $(this).width();
    //     var wrapperHeight = $(this).height();
    //     console.log("Your Mouse Position Is : " + x + " and " + y);
    //     console.log("Assassin Wrapper Is : " + wrapperWidth + " and " + wrapperHeight);
    //
    //     $('.flying-assassin').css({
    //         'transform': 'translate3d(-' + wrapperWidth / y + 'px, ' + wrapperHeight / x + 'px, 0)',
    //         'transform-style': 'preserve-3d',
    //         'backface-visibility': 'hidden'
    //     });
    // });

    $('.race-selection>li').on('click', function () {
        $('.race-selection li').removeClass('active');
        $(this).addClass('active');
    });

    $('#select-gon').on('click', function () {
        $('.race-img div').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.race-img .gon-base').removeClass('fadeOutLeft').addClass('fadeInLeft');
        $('.race-preview div.race-detail').removeClass('fadeInRight').addClass('fadeOutRight');
        $('.race-preview .gon-detail').removeClass('fadeOutRight').addClass('fadeInRight');
    });

    $('#select-yun').on('click', function () {
        $('.race-img div').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.race-img .yun-base').removeClass('fadeOutLeft').addClass('fadeInLeft');
        $('.race-preview div.race-detail').removeClass('fadeInRight').addClass('fadeOutRight');
        $('.race-preview .yun-detail').removeClass('fadeOutRight').addClass('fadeInRight');
    });

    $('#select-lyn').on('click', function () {
        $('.race-img div').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.race-img .lyn-base').removeClass('fadeOutLeft').addClass('fadeInLeft');
        $('.race-preview div.race-detail').removeClass('fadeInRight').addClass('fadeOutRight');
        $('.race-preview .lyn-detail').removeClass('fadeOutRight').addClass('fadeInRight');
    });

    $('#select-jin').on('click', function () {
        $('.race-img div').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.race-img .jin-base').removeClass('fadeOutLeft').addClass('fadeInLeft');
        $('.race-preview div.race-detail').removeClass('fadeInRight').addClass('fadeOutRight');
        $('.race-preview .jin-detail').removeClass('fadeOutRight').addClass('fadeInRight');
    });

    $(window).on('load', function () {
        $('.race-img div').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.race-img .gon-base').removeClass('fadeOutLeft').addClass('fadeInLeft');
        $('.race-preview div.race-detail').removeClass('fadeInRight').addClass('fadeOutRight');
        $('.race-preview .gon-detail').removeClass('fadeOutRight').addClass('fadeInRight');
        $('.race-preview div.race-detail div.gender-select a:nth-child(1)').addClass('active');
    });

    $('.active-male').on('click', function () {
        event.preventDefault();
        $(this).parent('.gender-select').children('a').removeClass('active');
        $(this).addClass('active');
        var raceImgClass = $(this).attr('data-race');
        $('.' + raceImgClass).parent('div').children('img').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.' + raceImgClass).removeClass('fadeOutLeft').addClass('fadeInLeft');
    });

    $('.active-female').on('click', function () {
        event.preventDefault();
        $(this).parent('.gender-select').children('a').removeClass('active');
        $(this).addClass('active');
        var raceImgClass = $(this).attr('data-race');
        $('.' + raceImgClass).parent('div').children('img').removeClass('fadeInLeft').addClass('fadeOutLeft');
        $('.' + raceImgClass).removeClass('fadeOutLeft').addClass('fadeInLeft');
    });

    // $(".wrap-kungfu").bind("mouseenter", function (e) {
    //
    //     /** the width and height of the current div **/
    //     var w = $(this).width();
    //     var h = $(this).height();
    //
    //     /** calculate the x and y to get an angle to the center of the div from that x and y. **/
    //     /** gets the x value relative to the center of the DIV and "normalize" it **/
    //     var x = (e.pageX - $(this).offset().left - (w / 2)) * (w > h ? (h / w) : 1);
    //     var y = (e.pageY - $(this).offset().top - (h / 2)) * (h > w ? (w / h) : 1);
    //
    //     /** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
    //     /** first calculate the angle of the point,
    //      add 180 deg to get rid of the negative values
    //      divide by 90 to get the quadrant
    //      add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
    //     var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    //
    //
    //     /** do your animations here **/
    //     switch (direction) {
    //         case 0:
    //             /** animations from the TOP **/
    //
    //             console.log('Yasuo đi top');
    //             break;
    //         case 1:
    //             /** animations from the RIGHT **/
    //
    //             console.log('Yasuo đi right');
    //             $('.wrap-kungfu .boy-fm').css({
    //                 'transform': 'translate3d(' + x / y + 'px, 0px, 0px)',
    //                 'transform-style': 'preserve-3d',
    //                 'backface-visibility': 'hidden',
    //                 'position':'relative',
    //                 'top':'0',
    //                 'left':'0'
    //             });
    //             break;
    //         case 2:
    //             /** animations from the BOTTOM **/
    //
    //             console.log('Yasuo đi bottom');
    //             break;
    //         case 3:
    //             /** animations from the LEFT **/
    //
    //             console.log('Yasuo đi left');
    //             break;
    //     }
    // });
});
