/*window.console.log("Teste1")
window.alert("Alertei")
window.prompt("Diz para mim, o que eu já sei:")

document
*/

//objeto document = código html
/*
console.log(document.head)
console.log(document.body)
*/
//Acessando elementos por tag. class e id
/*
var titulo = document.getElementsByTagName("h1")[0]
console.log(titulo)
var paragrafos = document.getElementsByClassName("para")[0]
console.log(paragrafos)
var para3 = document.getElementById("p3")

paragrafos[0].innerText = "Tauba"
para3.innerHTML = "<h3> Novo texto aqui </h3>"

var p1 = document.getElementsByTagName("p")[0]
p1.style.backgroundColor = "red"

para3.style.color = "green"

*/

function cliquei(){
    console.log("Cliquei de novo")
}

function outroFoco(){
console.log("MUdei o foco, não está mais o caixa")
}

function trocaTexto(textoCaixinha){
var texto = document.getElementById("textoPraTrocar")
texto.innerText = textoCaixinha.value
}

function corVerde(elemento) {
    elemento.style.color = "green"
    elemento.style.fontSize = ""

}