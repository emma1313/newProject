//go top
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector(".go-top").style.display = "block";
    } else {
            document.querySelector(".go-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//member-switch
if (document.querySelector(".toggle")) {
    document.querySelector(".toggle").onclick = function(){
    
        //切換 toggle on
        let toggleOf = document.querySelector(".toggle");
        toggleOf.classList.toggle("toggle-on");
    };
}

//game-live-progress
if (document.querySelector("#enterGameBtn")) {
    document.querySelector("#enterGameBtn").onclick = function (){

        //隱藏 enter game btn
        let enterGameBtn = document.querySelector("#enterGameBtn");
        enterGameBtn.classList.add("d-none");

        //顯示 progress bar
        let progressBar = document.querySelector("#progressBar");
        progressBar.classList.remove("d-none");
    };
}

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

    //index-marquee
    $('.marquee-box').marquee({
        duration: 10000,
        pauseOnHover: true
    });

})