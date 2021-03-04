//Navegação por tabs
function initTabNav(){
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
}

//Accordion List
function initAccordion(){
    const faqItens = document.querySelectorAll('.js-accordion dt')
    if(faqItens.length){
        faqItens[0].classList.add('ativo')
        faqItens[0].nextElementSibling.classList.add('ativo')
        
        function activeAccordion(){
                this.classList.toggle('ativo')
                this.nextElementSibling.classList.toggle('ativo')
        }
        
        faqItens.forEach((item) =>{
            item.addEventListener('click', activeAccordion)
                 })
    }
}
    
//Scroll suave 
function initScroll(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const topoSection = section.offsetTop
        window.scrollTo({
            top: topoSection,
            behavior: 'smooth'
        })
    }

    linksInternos.forEach(link =>{
        link.addEventListener('click', scrollToSection)
    })
}

 initTabNav()
 initAccordion()
 initScroll()

