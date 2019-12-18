AOS.init();

AOS.init({
    disable: "mobile",
})


$(document).ready(function () {
    $('.navMenu').click(function () {
        $('.navMenu').toggleClass('open')
        $('.sidebar').toggleClass('open')
    })
    $('header a').click(function () {
        $('.navMenu').removeClass('open')
        $('.sidebar').removeClass('open')
    })
})
