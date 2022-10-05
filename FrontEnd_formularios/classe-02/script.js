const forms = document.querySelector('form');
const senha = document.querySelector('#senha')
const repetirSenha = document.querySelector('CSenha')

forms.addEventListener('submit', function (event) {
    if (senha.value !== repetirSenha.value) {
        event.preventDefault();
    }
})