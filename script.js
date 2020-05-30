AOS.init();

AOS.init({
    disable: "mobile",
})



$(document).ready(function () {
    $('.navMenu').click( () => {
        $('.navMenu').toggleClass('open')
        $('.sidebar').toggleClass('open')
        $('nav').toggleClass('visuallyHidden')

    })
    $('header a').click( () => {
        $('.navMenu').removeClass('open')
        $('.sidebar').removeClass('open')
        $('nav').addClass('visuallyHidden')
    })

    $('form').submit( (e) => {
        e.preventDefault();
        console.log($('input'.value))
    })
})
