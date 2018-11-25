//member-password
function hideShowPsw() {

    var inputPassword = document.getElementById("input-password");
    var iPassword = document.getElementById("i-password");

    if (inputPassword.type == "password") {
            inputPassword.type = "text";
            iPassword.classList.add("fa-eye");
            iPassword.classList.remove("fa-eye-slash");
    }else {
            inputPassword.type = "password";
            iPassword.classList.add("fa-eye-slash");
            iPassword.classList.remove("fa-eye");
    }
}

//member-password2
function hideShowPsw2() {

    var inputPassword2 = document.getElementById("input-password-confirm");
    var iPassword2 = document.getElementById("i-password-confirm");

    if (inputPassword2.type == "password") {
            inputPassword2.type = "text";
            iPassword2.classList.add("fa-eye");
            iPassword2.classList.remove("fa-eye-slash");
    }else {
            inputPassword2.type = "password";
            iPassword2.classList.add("fa-eye-slash");
            iPassword2.classList.remove("fa-eye");
    }
}

//member-select-game
function memberBtn() {
    var memberB = document.getElementById("showSelect");
    memberB.classList.toggle("d-none");
}
function memberSelect() {
    var memberS = document.getElementById("memberSelectForIcon");
    memberS.classList.toggle("member-option_icon");
}
function memberSelect2() {
    var memberS2 = document.getElementById("memberSelectForIcon2");
    memberS2.classList.toggle("member-option_icon");
}
function memberSelect3() {
    var memberS3 = document.getElementById("memberSelectForIcon3");
    memberS3.classList.toggle("member-option_icon");
}
function memberSelect4() {
    var memberS4 = document.getElementById("memberSelectForIcon4");
    memberS4.classList.toggle("member-option_icon");

}
function memberSelect5() {
    var memberS5 = document.getElementById("memberSelectForIcon5");
    memberS5.classList.toggle("member-option_icon");
}
//member-select-wallet
function memberBtn2() {
    var memberB = document.getElementById("showSelect2");
    memberB.classList.toggle("d-none");
}
function memberSelect12() {
    var memberS = document.getElementById("memberSelectForIcon12");
    memberS.classList.toggle("member-option_icon");
}
function memberSelect22() {
    var memberS2 = document.getElementById("memberSelectForIcon22");
    memberS2.classList.toggle("member-option_icon");
}
function memberSelect32() {
    var memberS3 = document.getElementById("memberSelectForIcon32");
    memberS3.classList.toggle("member-option_icon");
}
function memberSelect42() {
    var memberS4 = document.getElementById("memberSelectForIcon42");
    memberS4.classList.toggle("member-option_icon");

}
function memberSelect52() {
    var memberS5 = document.getElementById("memberSelectForIcon52");
    memberS5.classList.toggle("member-option_icon");
}






$(document).ready(function() {  

    //tooltip
    $('[data-toggle="tooltip"]').tooltip()
    
    // go-top Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('.go-top').fadeIn("fast");
        } else {
            $('.go-top').fadeOut("fast");
        } 
    });

    // go-top Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    });

    //index-marquee
    $('.marquee-box').marquee({
        duration: 10000,
        pauseOnHover: true
    });

    //index-slider
    var swiper = new Swiper('.swiper-container_slider', {
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    //index-footerLogo
    var swiperLogo = new Swiper('.swiper-container_footerLogo', {
        slidesPerView: 7,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
    });
})