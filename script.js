const submit = document.getElementById("submit")
let container1 = document.getElementById("container1")
let container2 = document.getElementById("container2")
submit.addEventListener("click", function clicar(){
    container1.setAttribute("hidden", null)
    container2.removeAttribute("hidden")
})

let numero = document.getElementById("num")
function inserir(num){
    numero.innerHTML = num
}

