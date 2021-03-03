//Navegação por tabs
const tabMenu = document.querySelectorAll('.animais-lista li')
const tabContent = document.querySelectorAll('.js-tabContent section')

if(tabContent.length && tabMenu.length){
    tabContent[0].classList.add('ativo')

      function activeMenu(index){
        tabContent.forEach((item) =>{
            item.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo')
    }
    
    tabMenu.forEach((item, index) =>{
        item.addEventListener('click', () =>{
            activeMenu(index)
        })
    })
}

