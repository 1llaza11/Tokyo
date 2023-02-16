const slides = document.querySelectorAll('.slide')
let oldActive, currentActive

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const setActive = () => {
    currentActive = getRandomNumber(0, slides.length - 1)
    slides[currentActive].classList.add('active')
    document.body.style.backgroundImage = slides[currentActive].style.backgroundImage

    do {
        oldActive = getRandomNumber(0, slides.length - 1)
    }
    while (oldActive === currentActive)
}

setActive()

slides.forEach((slide, idx) => {
    slide.onclick = (event) => {
        if (event.target.classList.contains('active')) {
            slide.classList.remove('active')
            slides[oldActive].classList.add('active')
            document.body.style.backgroundImage = slides[oldActive].style.backgroundImage
            currentActive = oldActive
            oldActive = idx
        } else {
            oldActive = currentActive
            currentActive = idx
            slides.forEach((slide) => slide.classList.remove('active'))
            slide.classList.add('active')
            document.body.style.backgroundImage = slide.style.backgroundImage
        }
    }
})
