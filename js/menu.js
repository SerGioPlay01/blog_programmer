// открытие меню

const close_menu = document.getElementById("close_menu");
const menu = document.getElementById("menu");
const btn_svg_menu = document.getElementById("open_menu");
const close_btn_svg = document.getElementById("close_menu")
const body = document.querySelector("body");

btn_svg_menu.addEventListener("click", function(){
        // body.style.overflow = "hidden";
        menu.style.transition = "all 0.4s ease-in-out";
        menu.style.right = "0px";
});

close_btn_svg.addEventListener("click", function() {
        body.style.overflow = "auto";
        menu.style.transition = "all 0.4s ease-in-out";
        menu.style.right = "-500px";
});