'use strict'

const catInfo = document.getElementById('cat-clicks-info')
const catImage = document.getElementById('cat-image')
let amountOfClicks = 0


const cats = [
    {
        name: 'Cat 1', 
        image_path: './img/cat-one.jpg',
        amountClicks: 0
    },
    {
        name: 'Cat2', 
        image_path: './img/cat-two.jpg',
        amountClicks: 0
    }
]


function init() {
    renderListCats()
}

function renderListCats() {
    cats.forEach(creatCatElement)
}

function creatCatElement(cat) {
    function handleClickCat(cat, span) {
        return (event) => {
            console.log('[handleClickCat]', { event, cat, span })
            cat.amountClicks++
            span.innerText = `Quantidade de cliques: ${cat.amountClicks}`   
        }
    }

    function createFigcaption(span, catName) {
        const figcaption = document.createElement('figcaption')
       
        figcaption.innerText = catName
        figcaption.appendChild(span)
        
        return figcaption
    }

    function createSpan() {
        const span = document.createElement('span')
        
        span.innerHTML = 'Quantidade de cliques: 0'

        return span
    }

    function createImg(url, span, cat) {
        const img = document.createElement('img')

        img.src = cat.image_path
        img.addEventListener('click', handleClickCat(cat, span))

        return img 
    }

    const container = document.querySelector('.container')
    const figure = document.createElement('figure')
    const span = createSpan()
    const figcaption = createFigcaption(span)
    const image = createImg(cat.image_path, span, cat)

  
    figure.appendChild(image)
    figure.appendChild(figcaption)

    container.appendChild(figure)
}




init()