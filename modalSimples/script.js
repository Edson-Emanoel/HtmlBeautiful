// Variáveis
var btnAbrir = document.querySelector("#btn-abrir")
var btnFechar = document.querySelector("#btn-fechar")
var btnCadastrar = document.querySelector("#btn-cadastrar")
var ctx = document.querySelector('.container')

// Tema
const setTheme = ({theme}) => {
      document.querySelector('body').setAttribute("data-theme", theme)
      localStorage.setItem('theme', theme)
}

var selectedTheme = localStorage.getItem("theme")
if(selectedTheme){
      document.querySelector("body").setAttribute('data-theme', selectedTheme)
}

// Abre e Fecha o Modal
btnAbrir.addEventListener("click", (e) => {
      e.preventDefault();

      ctx.style.display = 'flex'
})

btnFechar.addEventListener("click", (e) => {
      e.preventDefault();

      ctx.style.display = 'none'
})

btnCadastrar.addEventListener("click", (e) => {
      e.preventDefault();

      ctx.style.display = 'none'
})