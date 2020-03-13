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
    const container = document.querySelector('.container')
    const figure = createFigure()

    container.appendChild(figure)

    function createFigure() {
        const figure = document.createElement('figure')
        const figcaption = createFigcaption(cat)
        const image = createImg(cat, handleClickCat(cat, figcaption))

        figure.appendChild(image)
        figure.appendChild(figcaption)

        return figure
    }


    function createFigcaption(cat) {
        const figcaption = document.createElement('figcaption')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')

        h3.textContent = cat.name
        p.textContent = `Quantidade de cliques: ${cat.amountClicks}`
       
        figcaption.appendChild(h3)
        figcaption.appendChild(p)
        
        return figcaption
    }

    function createImg(cat, handleClick) {
        const img = document.createElement('img')

        img.src = cat.image_path
        img.addEventListener('click', handleClick)

        return img 
    }

    function handleClickCat(cat, figcaption) {
        return (event) => {
            console.log('[handleClickCat]', { event, cat, figcaption })
            
            cat.amountClicks++

            figcaption.lastElementChild.textContent = `Quantidade de cliques: ${cat.amountClicks}`
        }
    }
}




init()