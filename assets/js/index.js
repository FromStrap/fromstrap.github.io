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


function sendMessage(event) {
    event.preventDefault();
    
    let inputs = $$('.contact__input')
    let values = {}

    inputs.forEach(input => {
        let name = input.name
        let value = input.value
        values[name] = value
    })

    
    const message = `"${values.msg}". Sou ${values.name}, meus meios de contato são pelo telefone ${values.phone} ou pelo email ${values.mail}.`
    const to = "5511960819339"
    const api = "wa.me"

    window.open(`https://${api}/${to}?text=${message}`)


}

$('.contact__send').addEventListener("submit", sendMessage)

