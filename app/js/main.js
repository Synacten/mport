'use strict';
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  });


const alt_nav = $('.alt_nav');
let mv = 420;
$(window).on('scroll', function () {
    if($(window).scrollTop() < mv)
    {
        alt_nav.css('top', '-100px');
    }else{
        alt_nav.css('top', '0');
    }
});


const search_pg = $('.search_page');
const search_icon = $('.fa-search');
let bool = true;
search_icon.click(function () {
    if(bool)
    {
        mv = 0;
        search_icon.removeClass('fa-search');
        search_icon.addClass('fa-times');
        search_pg.css('top', '0');
        bool = false;
        alt_nav.css('top', '0');
    }else{
        mv = 420;
        search_icon.removeClass('fa-times');
        search_icon.addClass('fa-search');
        alt_nav.css('top', '-100px');
        search_pg.css('top', '-100vh');
        bool = true;
        
    }
});

const hamb = $('.fa-bars');
const left_m = $('.left_menu');
const body = $('body');
const scOff = $('.shadow_cloak_off');
const plusBtn = $('.fa-plus');
let lmBool = true;
hamb.click(function () {
    if(lmBool)
    {
        scOff.addClass('shadow_cloak');
        body.css({'position': 'relative','right': '260px', 'overflow-y':'hidden'});
        left_m.css('right', '0');
        lmBool = false;
    }else{
        scOff.removeClass('shadow_cloak');
        body.css({'position': 'static','right': '0', 'overflow-y':'scroll'});
        left_m.css('right', '-300px');
        lmBool = true;
    }
});

scOff.click(function () {
    if(!lmBool)
    {
     
        body.css({'right': '0', 'overflow-y':'scroll'});
        left_m.css('right', '-300px');
        scOff.removeClass('shadow_cloak');
        lmBool = true;  
    }else{
        return 0;
    }
});

plusBtn.click(function () {
    if(!lmBool)
    {
        body.css({'right': '0', 'overflow-y':'scroll'});
        left_m.css('right', '-300px');
        scOff.removeClass('shadow_cloak');
        lmBool = true;
    }else{
        return 0;
    }
});

const arrow_up = $(".up_button");
$(window).on('scroll', function () {
    if($(window).scrollTop() < 550)
    {
        arrow_up.css('right', '-70px');
    }else
    {
        arrow_up.css('right', '70px');
    }
});
arrow_up.click(function () {
   $("html, body").animate({scrollTop:0}, 'slow');
});

$(document).ready(function () {
    $('input,textarea').focus(function(){
      $(this).data('placeholder',$(this).attr('placeholder'))
      $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
      $(this).attr('placeholder',$(this).data('placeholder'));
    });
    });

const gallery_img = $(".img_gallery");
const gallery_wrap_off = $(".gallery_wrap_off");
let img_numb = 1;
let gallery_img_cont = $('.gallery_img_cont_' + img_numb);
let each_img = $('#each_img');
let bool_gal_wrap = true;
const left_bnt = $('.left_side');
const right_bnt = $('.right_side');
const remove_gal = $('.remove_side');
gallery_img.click(function () {
    gallery_wrap_off.css('display', 'block');
    gallery_img_cont.css('display', 'block');
    gallery_wrap_off.addClass('gallery_wrap');
    body.css({'position': 'relative', 'overflow-y':'hidden'});
    bool_gal_wrap = false;
});

left_bnt.click(function () {
    img_numb--;
    if(img_numb < 1)
    {
        img_numb = 6;
    }
    each_img.attr('src', 'img/girl' + img_numb + '.jpg');
    
});

right_bnt.click(function () {
    img_numb++;
    if(img_numb > 6)
    {
        img_numb = 1;
    }
    each_img.attr('src', 'img/girl' + img_numb + '.jpg');

});

each_img.click(function () {
    img_numb++;
    if(img_numb > 6)
    {
        img_numb = 1;
    }
    each_img.attr('src', 'img/girl' + img_numb + '.jpg');

});

remove_gal.click(function () {
    if(!bool_gal_wrap)
    {
        gallery_wrap_off.css('display', 'none');
    gallery_img_cont.css('display', 'none');
    gallery_wrap_off.removeClass('gallery_wrap');
    body.css({'position': 'static', 'overflow-y':'scroll'});
        bool_gal_wrap = true;
    }
    else
    {
        return 0;
    }
});
