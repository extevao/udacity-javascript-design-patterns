'use strict'

const catInfo = document.getElementById('cat-clicks-info')
const catImage = document.getElementById('cat-image')
let amountOfClicks = 0

catImage.addEventListener('click', (event) => {
    event.preventDefault()

    amountOfClicks++
    updateClickLabel(amountOfClicks)
})


function updateClickLabel(catCLickAmount) {
    catInfo.textContent = catCLickAmount
}