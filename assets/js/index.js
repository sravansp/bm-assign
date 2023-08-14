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


initAccordian()

function initAccordian() {
    let toggles = document.getElementsByClassName("toggle_acco");
    let contentDiv = document.getElementsByClassName("content_acco");
    let icons = document.getElementsByClassName("icon_");

    for (let i = 0; i < toggles.length; i++) {
        contentDiv[0].classList.add("acco-expand");
        contentDiv[0].style.height = contentDiv[i].scrollHeight + "px";
        toggles[i].addEventListener("click", () => {
            if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
                contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
                icons[i].classList.remove("ri-arrow-down-s-line");
                icons[i].classList.add("ri-arrow-up-s-line");
                contentDiv[i].classList.add("acco-expand");
            } else {
                contentDiv[i].style.height = "0px";
                icons[i].classList.remove("ri-arrow-up-s-line");
                icons[i].classList.add("ri-arrow-down-s-line");
                contentDiv[i].classList.remove("acco-expand");
            }

            for (let j = 0; j < contentDiv.length; j++) {
                if (j !== i) {
                    contentDiv[j].style.height = "0px";
                    icons[j].classList.remove("ri-arrow-up-s-line");
                    icons[j].classList.add("ri-arrow-down-s-line");
                    contentDiv[j].classList.remove("acco-expand");
                }
            }
        });
    }

}

/*=============== FILTER students IN DASHBOARD ===============*/
var $students_ = $('.students_');

var $btns = $('.filter_link').click(function (e) {

    e.preventDefault();
    $btns.removeClass('active');
    $(this).addClass('active');

    var filterVal = $(this).data('filter');

    if (filterVal === 'all') {
        $students_.show();
    } else {
        $students_.hide().filter('.' + filterVal).show();
    }

});
var students_ = $('.students_').click(function (e) {
    e.preventDefault();
    students_.removeClass('active_student');
    $(this).addClass('active_student');
    $('#modalAssign').show();
    ScrollReveal().reveal(".submited-item ", {
        origin: "bottom",
        delay: 200,
        duration: 800,
        interval: 80,

        distance: "60px",
    });
});
$('#hidemodalAssign').click(function () {
    $('#modalAssign').hide();
});


















ScrollRevealaAm()
/*===== SCROLL REVEAL ANIMATION =====*/
function ScrollRevealaAm() {
    const sr = ScrollReveal({
        distance: "60px",
    });

    sr.reveal(".form-title,.text-heading", {
        duration: 1000,
        delay: 300,
        origin: "left",
        //   
    });
    sr.reveal(".form-title-btns button,.btn-right", {
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

    });

    sr.reveal(".animated-dash,.student_filter a", {
        origin: "bottom",
        delay: 200,
        duration: 800,
        interval: 80,

    });
    sr.reveal(".card.subjects,.container_accordian .wrapper,.students_", {
        origin: "bottom",
        delay: 300,
        duration: 800,
        interval: 80,

    });
}