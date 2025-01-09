$(document).ready(function () {
    $('.detect-br > li > a').each(function(i){
        var it = $(this);
        if(it.find('br').length > 0){
            it.addClass('has-br');
        }else{
            it.addClass('no-br');
        }
    });

    $('.detect-3rd > li > ul li').hover(function(){
        var it = $(this);
        if($(window).width() - it.offset().left < 2*it.width()){
            it.addClass('child-left');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 92) {
            $('#viver-back-top').fadeIn();
        } else {
            $('#viver-back-top').fadeOut();
        }
    });

    $('#viver-back-top,.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0},500);
    });
    $('.js-nav-menu .item').click(function(e){
        e.preventDefault();
        var it = $(this),
            p = it.find('.item-p'),
            t = $(it.attr('data-v'));
        if(it.hasClass('active')){
            it.removeClass('active');
            p.removeClass('action');
            t.slideUp();
        }else{
            it.addClass('close');
            $('.js-nav-menu .item').not('close').each(function(i){
                $($(this).attr('data-v')).slideUp();
                $(this).removeClass('active').find('.item-p').removeClass('action');
            });
            it.addClass('active').removeClass('close');
            p.addClass('action');
            t.slideDown();
        }
    });

    $('.slide-6').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        fade: false,
        arrows:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive:[
            {breakpoint:768,settings:{slidesToShow:4}},
            {breakpoint:480,settings:{slidesToShow:2}}
        ]
    });

    $('.slide-5').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        fade: false,
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive:[
            {breakpoint:768,settings:{slidesToShow:2}},
            {breakpoint:480,settings:{slidesToShow:1}}
        ]
    });


    $('.ss-wrap').each(function(){
        var initialSlide = 0;
        if($(this).hasClass('ss-wrap-5')){
            initialSlide = 5;
        }
        console.log(initialSlide);
        $(this).slick({
            infinite: true,
            initialSlide: initialSlide,
            speed: 600,
            dots: false,
            autoplay: false,
            fade: false,
            arrows:false,
            slidesToShow: 5,
            draggable: false,
            touchMove: false,
            swipe: false,
            slidesToScroll: 1,
            adaptiveHeight: false,
            responsive:[
                {breakpoint:991,settings:{slidesToShow:3,initialSlide: initialSlide>0?initialSlide-2:initialSlide}},
                {breakpoint:767,settings:{slidesToShow:2,initialSlide: initialSlide>0?initialSlide-3:initialSlide}},
                {breakpoint:480,settings:{slidesToShow:1,initialSlide: initialSlide>0?initialSlide-4:initialSlide}}
            ]
        });
    });

    $('.ss-nav').click(function(e){
        e.preventDefault();
        var $this = $(this);
        if($this.hasClass('ss-nav-left')){
            $('.ss-wrap').slick('prev');
        }else{
            $('.ss-wrap').slick('next');
        }
    });

    $('.slide-1').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        fade: false,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive:[
            {breakpoint:768,settings:{slidesToShow:1}},
            {breakpoint:480,settings:{slidesToShow:1}}
        ]
    });



    $('.slide-4').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        fade: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive:[
            {breakpoint:768,settings:{slidesToShow:2}},
            {breakpoint:480,settings:{slidesToShow:1}}
        ]
    });

    $('.slide-3').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        fade: false,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive:[
            {breakpoint:768,settings:{slidesToShow:2}},
            {breakpoint:480,settings:{slidesToShow:1}}
        ]
    });

    $('.slide-2').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        fade: false,
        arrows:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive:[
            {breakpoint:768,settings:{slidesToShow:2}},
            {breakpoint:480,settings:{slidesToShow:1}}
        ]
    });


    $('.product-images-big').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: false,
        fade: false,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        'asNavFor': '.product-images-small'
    });
    
    $('.product-images-small').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: false,
        fade: false,
        arrows:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: false,
        focusOnSelect: true,
        'asNavFor': '.product-images-big'
    });

    $('.s-search').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.site-search').toggleClass('active');
    });
    $(document).on('click','.mb-menu',function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).closest('li').toggleClass('mb-open');
    });
    $(document).on('click','.like-checkbox',function(e){
        e.preventDefault();
        $(this).prev().prop('checked',function( i, val ) {
            return !val;
        });
    });
    $('.zoo-item').ZooMove();

    //$('[data-fancybox="group"]').fancybox();
    $(document).on('click','[data-scrollto]',function(e){
        e.preventDefault();
        var $el = $($(this).attr('data-scrollto'));
        if($el.length > 0){
            $('html, body').animate({scrollTop:$el.offset().top - 50},500);
        }
    });
    $(window).on('load resize',function(){
        resetMenu();
        iniMainSlide();
        eqHeight();
    });
    
    $(window).on('load scroll',function(){
        resetMenuFix();
        scrollShow('[data-scroll="show"]');
    });
    $(window).on('load',function(){
        var ztTo = $('.scrTo');
        if(ztTo.length > 0){
            $('html, body').animate({scrollTop:ztTo.offset().top - 73},500);
        }
    });

    $(document).on('click','.sl-nav a',function(e){
        e.preventDefault();
        var it = $(this), sl = it.closest('.sl-wrap').find('.sl-content');
        if(sl.length){
            if(it.hasClass('sl-next')){
                sl.slick('next');
            }else{
                sl.slick('prev');
            }
        }
        
    });

    $(window).on('load resize scroll',resizeProductImageRatio);

});

function slick4(u){
    var s = $('.slide-4');
    if(u){
        s.slick('unslick');
    }
    s.slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        fade: false,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive:[
            {breakpoint:767,settings:{slidesToShow:2}},
            {breakpoint:479,settings:{slidesToShow:1}}
        ]
    });
}


function scrollShow(el){
    var sc = $(window).scrollTop();
    $(el).each(function(){
        var oft = $(this).data('offset-top');
        if(sc >= oft){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
}


function resizeProductImageRatio(){
    var $el = $('[data-resize="ratio"]');
    $el.each(function(){
        var $it = $(this),eh = parseInt($it.width()/$it.attr('data-ratio')),eah = parseInt($it.attr('data-resize-add'));
        if(!(eah > 0)){
            eah = 0;
        }
        if($it.attr('data-css') == 'height'){
            $it.css('height',(eh + eah) +'px');
        }else{
            $it.find('[data-css*="height"]').css('height',(eh + eah) +'px');
        }
        if(!$it.hasClass('lazy-loaded') && isScrolledIntoView($it)){
            var img = '<img src="'+$it.attr('data-src')+'" alt="'+$it.attr('data-title')+'" />';
            var link = $it.attr('data-href');
            if(link != ''){
                img = '<a href="'+link+'">'+img+'</a>';
            }

            if($it.attr('data-append') == 'image'){
                $it.prepend(img);
            }else{
                $it.find('[data-append*="image"]').prepend(img);
            }
            $it.addClass('lazy-loaded');
        }
        
    });
}

function eqHeight() {
    var $el = $('[data-eq="height"]'), h = {}, ww = $(window).width();
    $el.css('height', 'auto').each(function (i) {

        if (!($(this).css('display') == 'none')) {
            var eh = $(this).height(), g = $(this).data('eq-group');
            if (typeof h[g] == 'undefined') {
                h[g] = 0;
            }
            
            var forge = $(this).data('eq-forge');
            if(typeof forge != 'undefined'){
                h[g] = $(forge).height();
            }else{
                if (eh > h[g]) {
                    h[g] = eh;
                }
            }
        }

        if (i == $el.length - 1) {
            
            for (var a in h) {
                $('[data-eq-group="' + a + '"]').each(function () {
                    var add = $(this).data('eq-add'),ew = $(this).data('eq-width');
                    if (typeof add == 'undefined') {
                        add = 0;
                    }
                    if (typeof ew == 'undefined') {
                        ew = 0;
                    }
                    if(ww > ew)
                        $(this).css('height', (add + h[a]) + 'px');
                });
            }
        }
    });
}

function resetMenu(){
    var w = $(window).width();
    var nav = $('.js-nav-menu .item');
    if(nav.length > 0){
        nav.each(function(i){   
            $(this).removeClass('active').find('.item-p').removeClass('action');
            if(w > 991){
                $($(this).attr('data-v')).css('display','block');
            }else{
                $($(this).attr('data-v')).css('display','none');
            }
        });
    }
}

function iniMainSlide(){
    
    $('.viver-slide-content:not(".ini")').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        fade: false,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
    }).addClass('ini');
}


function isScrolledIntoView(elem) {
    var $win = $(window);
    return elem.offset().top + elem.outerHeight() >= $win.scrollTop() && elem.offset().top <= $win.scrollTop() + $win.height();
}

function lazyInit(element, func) {
    var $win = $(window);
    $win.on('load scroll', function () {
        $(element).each(function(){
            var $it = $(this);
            if((!$it.hasClass('lazy-loaded') && (isScrolledIntoView($it)))){
                func.call();
                $it.addClass('lazy-loaded');
            }
        });
    });
}
function resetMenuFix() {
    var w = $(window).width();
    var s = $(window).scrollTop();
    if(w > 991 && s > 30){
        $('body').addClass('fixed');
    }else{
        $('body').removeClass('fixed');
    }
}
