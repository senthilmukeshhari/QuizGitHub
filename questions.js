window.addEventListener('load', () => {
    let spinner = document.querySelector('.spinner')
    let user_name = document.querySelector('.user')
    let user_card  = user_name.parentElement.parentElement.parentElement
    
    setTimeout(() => {
        user_card.classList.add('animate')
        spinner.classList.add('d-none')
        user_name.classList.add('typing')
    }, 2800);
})

let start_btn = document.querySelector('#start-btn')
let timer = document.querySelector('.timer')
let minutesEl = document.querySelector('.minutes')
let secondsEl = document.querySelector('.seconds')

let first_card = document.getElementById('first-card')
let first_btn = document.getElementById('first-btn')

let second_card = document.getElementById('second-card')
let second_btn =document.getElementById('second-btn')

start_btn.addEventListener('click',() => {
    start_btn.disabled = true
    first_card.classList.remove('d-none')
    first_card.classList.add('animate')
    timer.classList.remove('d-none')
    let minutes = 0,seconds = 0
    setInterval(() => {
        seconds ++
        if (seconds >= 60) {
            minutes++
            seconds = 0
        }
        displayTimer(seconds,minutes)
        if (minutes == 2 && seconds == 30) {
            console.log('stop');
        }
    }, 1000);
})

function displayTimer(ss,mm) {
    mm = mm <= 9 ? '0' + mm : mm
    ss = ss <= 9 ? '0' + ss : ss
    minutesEl.innerText = mm + " : "
    secondsEl.innerText = ss
}

first_btn.addEventListener('click',() => {
    second_card.classList.remove('d-none')
    second_card.classList.add('animate')
})