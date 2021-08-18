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