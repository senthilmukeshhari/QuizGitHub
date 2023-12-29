window.addEventListener('load', () => {
    let spinner = document.querySelector('.spinner')
    setTimeout(() => {
        spinner.classList.add('d-none')
        confetti.start()
        setTimeout(() => {
            confetti.stop()
        },10000);
    }, 2800)
})

let result_percentage = document.querySelector('.result-percentage').children[0]

let score = 5
// setInterval(() => {
    let circle = document.querySelectorAll('circle')[0]
    if (score == 5) {   
        circle.style.strokeDashoffset = Math.floor(630 - ((630 / 100) * 100))
        circle.style.stroke = "#198754"
        result_percentage.innerText = '100'
    }
    if ( score == 4 ) {
        circle.style.strokeDashoffset = Math.floor(630 - ((630 / 100) * 80))
        circle.style.stroke = "#198754"
        result_percentage.innerText  = '80'
    }
    if (score == 3) {   
        circle.style.strokeDashoffset = Math.floor(630 - ((630 / 100) * 60))
        circle.style.stroke = "#ffc107"
        result_percentage.innerText  = '60'
    }
    if ( score == 2 ) {
        circle.style.strokeDashoffset = Math.floor(630 - ((630 / 100) * 40))
        circle.style.stroke = "#ffc107"
        result_percentage.innerText  = '40'
    }
    if ( score == 1 ) {
        circle.style.strokeDashoffset = Math.floor(630 - ((630 / 100) * 20))
        circle.style.stroke = "#dc3545"
        result_percentage.innerText  = '20'
    }
    score++
    if (score == 6 ) {
            score = 0
    }

// }, 1000);