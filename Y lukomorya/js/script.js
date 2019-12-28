$(function(){
    //весть js будем писать здесь, это позволит нам убедиться что сначала загрузиться весь хтмл а потом уже джс

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });
    //подключили слайдер


    $('select').styler();
});

// let sendForm = document.getElementsByClassName('default-btn');
// sendForm.addEventListener('click', function (event) {
//     event.preventDefault();
//     alert('push');
// });