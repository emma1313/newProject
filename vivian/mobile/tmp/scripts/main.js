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

let navLoginContent = document.querySelector(".nav-invisible_login");
let navHideLoginBtn = document.querySelector(".nav-login_hide");
let navLoginClose = document.querySelector(".nav-login_close");
let navLoginSvg = document.querySelector("#svg-hide");
let fixedTopHeight = document.querySelector(".nav-height");
let navMenuContent = document.querySelector(".nav-invisible_menu");
let navMenuBtn = document.querySelector(".nav-menu");

//nav btn
if (document.querySelector(".nav-menu")) {
    document.querySelector(".nav-menu").onclick = function () {
        hideShowMenu();
    };

    function hideShowMenu() {

        //點擊menu btn時，nav-menu改變角度
        navMenuBtn.classList.toggle("nav-menu_close");

        //點擊menu btn時，fixed-top改變高度
        fixedTopHeight.classList.toggle("nav-height_cover");

        //開啟nav menu content
        navMenuContent.classList.toggle("show");

        //移除nav login close btn
        navLoginClose.classList.remove("show");

        //顯示nav login btn
        navLoginSvg.classList.remove("hide");

        //移除nav login content
        navLoginContent.classList.remove("nav-login_content");
    }
}

//nav login
if (document.querySelector(".nav-login")) {
    document.querySelector(".nav-login").onclick = function () {
        hideShowLoginInput();
    };

    function hideShowLoginInput() {

        //隱藏nav login btn
        navLoginSvg.classList.toggle("hide");

        //開啟nav login close btn
        navLoginClose.classList.toggle("show");

        //開啟nav login content
        navLoginContent.classList.toggle("nav-login_content");

        //移除nav background
        fixedTopHeight.classList.remove("nav-height_cover");

        //移除nav menu close btn
        navMenuBtn.classList.remove("nav-menu_close");

        //移除nav menu content
        navMenuContent.classList.remove("show");
    }
}

//login-password
function hideShowPswLogin() {

    var inputPassword = document.getElementById("input-password_login");
    var iPassword = document.getElementById("i-password_login");

    if (inputPassword.type == "password") {
        inputPassword.type = "text";
        iPassword.classList.add("fa-eye");
        iPassword.classList.remove("fa-eye-slash");
    } else {
        inputPassword.type = "password";
        iPassword.classList.add("fa-eye-slash");
        iPassword.classList.remove("fa-eye");
    }
}

//registered-password
function hideShowRegistered() {

    var inputPassword = document.getElementById("input-password_registered");
    var iPassword = document.getElementById("i-password_registered");

    if (inputPassword.type == "password") {
        inputPassword.type = "text";
        iPassword.classList.add("fa-eye");
        iPassword.classList.remove("fa-eye-slash");
    } else {
        inputPassword.type = "password";
        iPassword.classList.add("fa-eye-slash");
        iPassword.classList.remove("fa-eye");
    }
}

//registered-password-confirm
function hideShowConfirm() {

    var inputConfirm = document.getElementById("input-password_confirm");
    var iConfirm = document.getElementById("i-password_confirm");

    if (inputConfirm.type == "password") {
        inputConfirm.type = "text";
        iConfirm.classList.add("fa-eye");
        iConfirm.classList.remove("fa-eye-slash");
    } else {
        inputConfirm.type = "password";
        iConfirm.classList.add("fa-eye-slash");
        iConfirm.classList.remove("fa-eye");
    }
}

//game-live-progress
if (document.querySelector("#enterGameBtn")) {
    document.querySelector("#enterGameBtn").onclick = function () {

        //隱藏 enter game btn
        let enterGameBtn = document.querySelector("#enterGameBtn");
        enterGameBtn.classList.add("d-none");

        //顯示 progress bar
        let progressBar = document.querySelector("#progressBar");
        progressBar.classList.remove("d-none");
    };
}

//member-old
function hideShowMemberOld() {

    var input = document.getElementById("input-member_old");
    var i = document.getElementById("i-member_old");

    if (input.type == "password") {
        input.type = "text";
        i.classList.add("fa-eye");
        i.classList.remove("fa-eye-slash");
    } else {
        input.type = "password";
        i.classList.add("fa-eye-slash");
        i.classList.remove("fa-eye");
    }
}

//member-new
function hideShowMemberNew() {

    var input = document.getElementById("input-member_new");
    var i = document.getElementById("i-member_new");

    if (input.type == "password") {
        input.type = "text";
        i.classList.add("fa-eye");
        i.classList.remove("fa-eye-slash");
    } else {
        input.type = "password";
        i.classList.add("fa-eye-slash");
        i.classList.remove("fa-eye");
    }
}

//member-new-confirm
function hideShowMemberNewConfirm() {

    var input = document.getElementById("input-member_newConfirm");
    var i = document.getElementById("i-member_newConfirm");

    if (input.type == "password") {
        input.type = "text";
        i.classList.add("fa-eye");
        i.classList.remove("fa-eye-slash");
    } else {
        input.type = "password";
        i.classList.add("fa-eye-slash");
        i.classList.remove("fa-eye");
    }
}

//member-switch
if (document.querySelector(".toggle")) {
    document.querySelector(".toggle").onclick = function () {

        //切換 toggle on
        let toggleOf = document.querySelector(".toggle");
        toggleOf.classList.toggle("toggle-on");
    };
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
//# sourceMappingURL=main.js.map
