import '../css/global.css'

// Contact menu

const $ = document.querySelector.bind(document);

function isActive() {
    let isActive = $("aside")    
    !isActive.style.left || isActive.style.left == "100%" 
        ? isActive.style.left = "0"
        : isActive.style.left = "100%"

}

$(".navbar-menu li:last-child").addEventListener("click", isActive);
$("aside h3").addEventListener("click", isActive)

