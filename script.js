AOS.init();

AOS.init({
    disable: "mobile",
})

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');


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
        if (((name && name.value) && (email && email.value) && (message && message.value)) === "") {
            alert('Please complete all the fields before submitting!');
        } else {
            document.getElementById('myForm').submit();

        }

    })
})
