document.addEventListener("DOMContentLoaded", function() {
    load_navpane();
});

function load_navpane() {
    var width = window.innerWidth;
    if (width <= 800) {
        return;
    }

    var maxlevel = 1
    var nav = document.getElementsByClassName("md-nav");
    for(var i = 0; i < nav.length; i++) {
        if (typeof nav.item(i).style === "undefined") {
            continue;
        }
        var level = nav.item(i).getAttribute("data-md-level")

        if (level && level <= maxlevel && nav.item(i).getAttribute("data-md-component")) {
            nav.item(i).style.display = 'block';
            nav.item(i).style.overflow = 'visible';
        }
    }

    var nav = document.getElementsByClassName("md-nav__toggle");
    for(var i = 0; i < nav.length; i++) {
        var level = 0
        var pnav = nav.item(i).closest('nav.md-nav')
        if (pnav) {
            level = pnav.getAttribute("data-md-level") || 0
        }
        if (level && level < maxlevel) {
            nav.item(i).checked = true;
        }
    }
}
