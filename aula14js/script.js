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
var nomesMes = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO']
var nomesAno = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
var cumprimento = trocaSaudacao()

var atualizaRelogio = setInterval(function () {
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay()
    var anoAtual = dataAtual.getFullYear()
    var mesAtual = dataAtual.getMonth()

    if (horaAtual<10)
        horaAtual = "0" + horaAtual

    if (minutoAtual<10)
        minutoAtual = "0" + minutoAtual

    if (segundoAtual<10)
        segundoAtual = "0" + segundoAtual

    if(anoAtual <10)
        anoAtual = "0" + anoAtual

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    textoSaudacao.textContent = `${cumprimento} / ${anoAtual} / ${mesAtual}
     ${diasSemana[diaAtual]}`

})

function trocaSaudacao(horas) {
    if (horas<6)
        return 'Boa Madrugada'
    else if (horas<12)
        return 'Bom Dia'
    else if (horas<18)
        return 'Boa Tarde'
    else
        return 'Boa Noite'
}

