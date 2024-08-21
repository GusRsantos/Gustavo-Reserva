//Mostra um alerta na página
//alert("OUTRA MENSAGEM")
/*
//CONSOLE
console.log("OLHA A MENSAGEM DE  NOVO")

var texto = "Taylor Swift"
var numero = 1989
var theBest = true
var nulo = null
var indefinido 

console.log(typeof(texto))
console.log(typeof(numero))
console.log(typeof(thebest))
console.log(typeof(nulo))
console.log(typeof(indefinido))

//Operadores 

//Aritméticos: +-/*%
var a = 10
var b = 3

console.log("Soma:", a+b)
console.log("Subtração:", a-b)
console.log("Multiplicação:", a*b)
console.log("Divisão", a/b)
console.log("Módulo:", a%b)


//Lógicos: &&, ||, !
var verdade = true
var mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

//Relacionais: >,<,>=,<=,==,!=,===,!==
var a = 10
var b = 5
var c = "10"
console.log("Relacionais")
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a != b)
console.log(a == c)
console.log(a === c)
console.log(a !== c)

*/

//condicionais
//If
/*var estaVivo = false
if(estaVivo){
    console.log("Esta vivo");
}

else if(estaVivo){
    console.log("Está morto")
}


else{ 
    console.log("Não está nada");
}

//Switch
var camisa = "Preta"
switch(camisa){
    case "Azul":
        console.log("A camisa é azul")
    break
    case "Amarela":
        console.log("A camisa é amarelo")
        break
        case "Preta":
            console.log("A camisa é preta")
            break
            default:
                console.log("A camisa é sei lá")
            break
}
*/

//Loops
//For
/*for(var i = 0; i < 5; i++){
    console.log("Estoy ahi");    
}
    console.log("Acabou o FOR");

//while 
var it = 1
while(it < 10){
 console.log("Estou aqui 2-0 retorno")

 it++
}
*/

/*function teste1(){
    console.log("Estou aqui na função 1");
}

function teste2(){
    console.log("Agora, estou na função 2");
}

teste2()
*/

//Interação com o usuário via prompt

/*
var resposta = prompt("Digite um algo")
var respost2 = prompt("Digite um outro algo")

console.log(resposta, respostA2)

alert(reposta)

*/



var numero = prompt("Digite o primeiro numero:")

var numero2 = prompt("Digite o segundo numero:")

var resultado = Number(numero) + Number(numero2)

console.log(resultado)

alert(resultado)