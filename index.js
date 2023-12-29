var images = document.querySelectorAll('.background-images img');
var currentIndex = 0;

window.addEventListener('load', () => {
    setTimeout(() => {
        let spinner = document.querySelector('.spinner')
        let login_box = document.querySelector('.login-box')

        spinner.classList.add('d-none')
        login_box.classList.add('animate')
    }, 2800);
})


function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 3000);


