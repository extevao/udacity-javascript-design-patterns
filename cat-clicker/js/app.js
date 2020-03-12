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
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const figcaption = document.createElement('figcaption')
    const span = document.createElement('span')

    
    span.innerHTML = 'Quantidade de cliques: 0'
    img.addEventListener('click', handleClickCat(cat, span))
    img.src = cat.image_path
    figcaption.innerText = cat.name
  
    figcaption.appendChild(span)
    figure.appendChild(img)
    figure.appendChild(figcaption)

    container.appendChild(figure)
}


function handleClickCat(cat, span) {
    return (event) => {
        console.log('[handleClickCat]', { event, cat, span })
        cat.amountClicks++
        span.innerText = `Quantidade de cliques: ${cat.amountClicks}`   
    }
}

init()