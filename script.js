function login(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    if (usuario == 'admin' && senha == 'admin'){
    window.location.href = "inicio.html"
    } else{
        document.getElementById('res').innerHTML = "Usuário ou senha inválidos!";
    }
}