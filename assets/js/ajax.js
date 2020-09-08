// WIP - Otimização

const forms = document.querySelector('form')
const span = document.getElementsByTagName('span')[0]
const form = [...forms].slice(0, -1) // Get all elements but the last

document.mailForm.onsubmit = async e => {
    e.preventDefault()
    
    const formArray = []
    
    /**
     * Verifica e colore os campos preenchidos/vazios
     */
    form.forEach(e => {
        if (!!e.value) { // campo preenchido
            formArray.push(1)
            e.style = 'border-bottom: solid #46A048;'
        } else { // campo vazio
            formArray.push(0)   
            span.style = 'display: block;' 
            e.style = 'border-bottom: solid #DF3636;'
        }
    })

    /**
     * Verifica se todos campos estão preenchidos e envia o email
     * indeXOf = Se achar o elemento especificado retorna 0, senão retorna -1
     */
    const check = formArray.slice(0, 4).indexOf(0)
    const bool = check === -1 ? false : true
    if(!bool) { // Todos os campos preenchidos
        span.innerHTML = 'Muito bem! Enviando o email. Um momento...'
        span.style = 'display: block; background-color: #46A048;'
        
        const route = 'http://localhost:8081/form'
        
        axios.post(route, {
            name: form[0].value,
            mail: form[1].value,
            phone: form[2].value,
            msg: form[3].value
        })
        .then(() => {
          span.innerHTML = 'Muito bem! O seu email foi enviado. Entraremos em contato.'
        })
        .catch(e => {
            span.style = 'background-color: #DF3636; display: block;'
            span.innerHTML = 'Houve um erro ao enviar o seu email. Por favor, tente novamente.'
            console.log(e)
        })
    }
}