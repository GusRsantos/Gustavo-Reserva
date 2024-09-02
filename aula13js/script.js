function logar() {
    var login = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSenha').value

    if (login == "admin" && senha == "admin") {
        alert("Login realizado com sucesso !")
        location.href = "home.html"

    }
    else {
        alert('Usuário ou senha incorretas')
    }

}


function cadastrar() {
    var usuario = document.getElementById('inputUsuarioNovo').value
}

