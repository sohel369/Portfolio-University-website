let navbar = document.querySelector('.nav_links');
let xmark = document.querySelector('.xmark');
let bars = document.querySelector('.bars')
let Head_nav = document.querySelector('#Head_nav')

function myclas() {
    navbar.classList.toggle('activeNav');
}

function closeFunction() {
    navbar.classList.remove('activeNav');
}

function forNavf() {
    navbar.classList.remove('activeNav');
}
window.addEventListener('scroll', function () {
    navbar.classList.remove('activeNav', window.scrollY > 0)
    Head_nav.classList.toggle('scrollxy', window.scrollY > 0)
})

