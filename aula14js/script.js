// function mostrarTexto(){
// console.log("O texto apareceu");
// }

// var contagem = 0

// function mostrarContagem(){
//     contagem++
//     console.log(contagem);
// }

// setTimeout(mostrarTexto, 5000)

// var minhaContagem = setInterval(mostrarContagem, 1000)

var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var textoSaudacao = document.getElementById("saudacaoTexto")

var diasSemana = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FERIA', 'SEXTA-FEIRA', 'SÁBADO']

var cumprimento = trocaSaudacao()

var atualizaRelogio = setInterval(function () {
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay()


    if (horaAtual<10)
        horaAtual = "0" + horaAtual

    if (minutoAtual<10)
        minutoAtual = "0" + minutoAtual

    if (segundoAtual<10)
        segundoAtual = "0" + segundoAtual

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    textoSaudacao.textContent = `${cumprimento} / ${diasSemana[diaAtual]}`

})

function trocaSaudacao(horas) {
    if (horas<6)
        return 'Boa Madrugada'
    else if (horas<12)
        return 'Bom Dia'
    else if (horas<18)
        return 'Boa Tarde'
    else
        return 'boa Noite'
}

