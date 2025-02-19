

const usuarios = [
    {
        "nome": "Bryan Silva",
        "email": "bryan.liaris@gmail.com",
        "senha": "123456",
        "TIPO": "Marketing"
    },
    {
        "nome": "Gustavo Gomes",
        "email": "gustavo.gomes@sptech.school",
        "senha": "gu123456",
        "TIPO": "Desenvolvimento"
    },
    {
        "nome": "Nelson Campelo",
        "email": "CF01000",
        "senha": "senha123",
        "TIPO": "CEO"
    }
]



function entrar() {
    let email = document.getElementById('input_email').value;
    let senha = document.getElementById('input_senha').value;

    let usuarioValido = null;

    // Verifica se o usuário existe na lista
    for (let i = 0; i < usuarios.length; i++) {
        if (email === usuarios[i].email && senha === usuarios[i].senha) {
            usuarioValido = usuarios[i];
            break;
        }
    }

    if (usuarioValido) {
        if (usuarioValido.TIPO === "Marketing" || usuarioValido.TIPO === "CEO") {
            alert("Bem-vindo, " + usuarioValido.nome + "!");
            window.location.href = "./chat/index.html"
        } else {
            alert("Acesso negado. Apenas usuários do departamento de Marketing podem acessar.");
        }
    } else {
        alert("Email ou senha inválidos. Tente novamente.");
    }
}