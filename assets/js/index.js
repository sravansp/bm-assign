const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    sidebarToggle = body.querySelector(".app-sidebar__toggle"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

$(window).on('load', function () {
    // setTimeout(function () { // allowing 3 secs to fade out loader
    $('.preloader').fadeOut('slow');
    // }, 1000);
});

$(function () {
    $(".sidebar li")
        .find("a")
        .each(function () {
            var text = $(this).attr("href");

            if (window.location.href.includes(text)) {
                $(this).parents("li").addClass("active");
            } else {
                $(this).parents("li").removeClass("active");
            }
        });
    //table row CLICKABLE
    $(".clickable-row").click(function () {
        window.location = $(this).data("href");
    });

    var side_close = localStorage.getItem("side_close");
    if (side_close == "open") {
        $(sidebar).removeClass("close");
        $(sidebar).addClass(side_close);
    }
    var dark_mode = localStorage.getItem("dark_mode");
    if (dark_mode == "dark") {
        $(body).addClass(dark_mode);
    }


    // Select 2 
    $("#sas").select2({
        closeOnSelect: false
    });
    $("#grade").select2({
        closeOnSelect: false
    });

    // Semetic UI Calender 
    $('#duedate').calendar();
    $('#sceduleddate').calendar();
});


$(toggle).click(function (e) {
    e.preventDefault();
    if ($(sidebar).hasClass("close")) {
        $(sidebar).removeClass("close");
        $(sidebar).addClass("open");
        localStorage.setItem("side_close", "open");
        var side_close = localStorage.getItem("side_close");
        // console.log(side_close);
    } else {
        $(sidebar).addClass("close");
        $(sidebar).removeClass("open");
        $(body).removeClass("sidenav-toggled");
        localStorage.setItem("side_close", "close");
        var side_close = localStorage.getItem("side_close");
        // console.log(side_close);
    }
});
$(body).click(function (e) {
    if ($(body).hasClass("sidenav-toggled") && screen.width < 992) {
        $(".overlay_section").addClass("overlay_home");
    } else {
        $(".overlay_section").removeClass("overlay_home");
    }
});
$(sidebarToggle).click(function (e) {
    e.preventDefault();
    if ($(body).hasClass("sidenav-toggled")) {
        $(body).removeClass("sidenav-toggled");
        $(sidebar).addClass("close");
        $(sidebar).removeClass("open");
    } else {
        $(body).addClass("sidenav-toggled");
        $(sidebar).removeClass("close");
        $(sidebar).addClass("open");
    }
});

$(modeSwitch).click(function (e) {
    e.preventDefault();
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("dark_mode", "dark");
    } else {
        localStorage.setItem("dark_mode", "light");
    }
});
if (document.querySelector("#description")) {
    
    var quill = new Quill('#description', {
        placeholder: 'The clearer and the shorter better',
        theme: 'snow'
    });
}
ScrollRevealaAm()
/*===== SCROLL REVEAL ANIMATION =====*/
function ScrollRevealaAm() {
    const sr = ScrollReveal({
        distance: "60px",
    });

    sr.reveal(".form-title", {
        duration: 1000,
        delay: 300,
        origin: "left",
        //   reset: false,
    });
    sr.reveal(".form-title-btns button", {
        duration: 1000,
        interval: 100,
        delay: 300,
        origin: "right",
        //   reset: true,
    });

    sr.reveal(".left-col-contents", {
        delay: 350,
        interval: 100,
        origin: "bottom",
    });
    sr.reveal(".right-col-contents", {
        delay: 450,
        interval: 100,
        origin: "bottom",
    });

    sr.reveal(".attach-wrapper a", {
        delay: 450,
        duration: 800,
        interval: 100,
        origin: "bottom",
        reset: false,
    });

    sr.reveal(".animated-dash", {
        origin: "bottom",
        delay: 200,
        duration: 800,
        interval: 80,
        reset: false,
    });
    sr.reveal(".card.subjects", {
        origin: "bottom",
        delay: 300,
        duration: 800,
        interval: 80,
        reset: false,
    });
}