const listaInputs = document.querySelectorAll(".input") 
const listaCamposObrigatorios = document.querySelectorAll(`input + p, textarea + p`)
const btn = document.querySelector(".btn")

btn.addEventListener("click", function (x) {
    x.preventDefault()

    let listaDeVazios = []
    let listaDeCorretos = []
    let cont = 0

    listaInputs.forEach(function (element) {
        if (element.value == "") {
            listaCamposObrigatorios[cont].innerHTML = "Campo obrigatório"
            listaDeVazios.push(element)
        } else {
            listaCamposObrigatorios[cont].innerHTML = ""
            listaDeCorretos.push(element)
        }
        cont++
    });

    listaDeCorretos.forEach(element => {
        element.classList.remove("erro")
        element.classList.add("verde")

    });
    listaDeVazios.forEach(element => {
        element.classList.remove("verde")
        element.classList.add("erro")
    });
    
})
