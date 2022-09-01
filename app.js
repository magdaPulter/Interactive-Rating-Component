const numberBtns = document.querySelectorAll('.numberBtn')
const submit = document.querySelector('.submit')
const content = document.querySelector('.content')
const firstCard = document.querySelector('.first-container')
const secondCard = document.querySelector('.second-container')

const items = []

numberBtns.forEach((num, idx)=> {
    num.addEventListener('click', () => chooseNumber(idx) )

})

function chooseNumber(idx){
    
    const chosenBtn = numberBtns[idx]
    items.push(chosenBtn.textContent)

    isBtnClicked(chosenBtn)
    
    submit.addEventListener('click', confirmRate)
}

function isBtnClicked(chosenBtn){
    numberBtns.forEach(num => {
        if(num.classList.contains('clicked')){
            num.classList.remove('clicked')
        } 
        chosenBtn.classList.add('clicked')
    })

}

function confirmRate() {
    const selectedNumber = items.slice(-1)

    const textMessage = document.createElement('div')
    textMessage.className = 'text-area'
    textMessage.innerHTML = `
        You selected ${selectedNumber} of 5`

    content.insertBefore(textMessage, document.querySelector('.content h2'))

    changeCards()
}

function  changeCards(){
    firstCard.classList.toggle('active')
    secondCard.classList.toggle('active')
}