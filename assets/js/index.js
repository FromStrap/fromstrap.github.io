import '../css/global.scss'

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Contact menu
function isActive() {
    let isActive = $("aside")    
    !isActive.style.left || isActive.style.left == "100%" 
        ? isActive.style.left = "0"
        : isActive.style.left = "100%"

}

$(".navbar-menu li:last-child").addEventListener("click", isActive);
$("aside i").addEventListener("click", isActive)

