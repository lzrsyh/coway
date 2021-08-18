// home slider function
const slider = document.querySelectorAll('.home-slide')
const prevBtn = document.querySelector('.prev-button')
const nextBtn = document.querySelector('.next-button')

slider.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
})

let counter = 0

prevBtn.addEventListener('click', () => {
    counter--
    slide()
})

nextBtn.addEventListener('click', () => {
    counter++
    slide()
})

function slide() {

    if (counter < slider.length - 1) {
        nextBtn.disabled = false
    } else {
        nextBtn.disabled = true
    }

    if (counter > 0) {
        prevBtn.disabled = false
    } else {
        prevBtn.disabled = true
    }

    slider.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

prevBtn.disabled = true

// about read more
const expBtn = document.querySelector('.more-button')
const aboutCard = document.querySelector('.about-card')

expBtn.addEventListener('click', () => {
    aboutCard.classList.toggle('expand')
    if (expBtn.innerHTML === 'read more <i class="fas fa-chevron-down d"></i>') {
        expBtn.innerHTML = 'read less <i class="fas fa-chevron-up d"></i>'
    } else {
        expBtn.innerHTML = 'read more <i class="fas fa-chevron-down d"></i>'
    }
})

const coll = document.querySelectorAll('.collapsed')
const content = document.querySelector('.faq-content')

coll.forEach(function (coll) {
    coll.addEventListener('click', function () {
        this.classList.toggle('active')

        const content = this.nextElementSibling
        if (content.style.maxHeight) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + 'em'
        }
    })
})

const menuBtn = document.querySelector('#menu-container')
const sidebar = document.querySelector('.sidebar-container')

menuBtn.onclick = () => {
    sidebar.classList.toggle('open')
}