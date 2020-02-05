// // @import Typed from 'typed.js';

AOS.init();

AOS.init({
    disable: "mobile",
})

$(document).ready(function () {
    $('.navMenu').click(function () {
        $('.navMenu').toggleClass('open')
        $('.sidebar').toggleClass('open')
        $('nav').toggleClass('visuallyHidden')

    })
    $('header a').click(function () {
        $('.navMenu').removeClass('open')
        $('.sidebar').removeClass('open')
        $('nav').addClass('visuallyHidden')
    })
})
