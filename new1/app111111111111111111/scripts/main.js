

$(document).ready(function(){
    $('.dropdown-toggle').dropdown();
    // $('.dropdown-toggle').click(function(){
    //     $(this).toggleClass("");
    // });
    $('#trdnav a').on('click', function (e) {
        $(this).tab('show')
    });
    $('.underline').hoverSlippery({
        border: true,
        underline: true
    });

    $('#tabs').tabs();

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      });
})
