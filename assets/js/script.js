const changeMode = () => {
   changeClasses()
   changeText()

   //salvar a preferência no local storage
   if(body.classList.contains(darkModeClass)){   
     localStorage.setItem('darkmode', darkModeClass)
   }else{
     localStorage.removeItem('darkmode', darkModeClass)
   }
}

//modificar as class
const changeClasses = () => {
  button.classList.toggle(darkModeClass)//se existir no classlist ele coloca se nao existir ele tira o dark
  h1.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
}

const changeText = () => {
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'
    //dentro da lista de classe de botao existe alguma coisa
        if(body.classList.contains(darkModeClass)){
            //e o conteudo html do botao
            button.innerHTML = lightMode
            h1.innerHTML = darkMode + " ON"
            return;
        }
            button.innerHTML = darkMode
            h1.innerHTML = lightMode + " ON"
}



const darkModeClass = 'dark-mode'


const button = document.querySelector("#mode-selector");
const h1 = document.querySelector("#page-title");
const body = document.querySelector("body")
const footer = document.querySelector("footer")

//pegando o token
const saveDarkMode = localStorage.getItem('darkmode')

if(saveDarkMode){
    body.classList.add(darkModeClass)
}

button.addEventListener('click',  changeMode)