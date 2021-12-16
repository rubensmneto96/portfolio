// Debounce Loadash

const target = document.querySelectorAll('[data-anime]');

const animationClass = 'animate'

const showInitial = 'show-inital'

function animeInitial() {
    let header = document.getElementById('header-nav');
    let sobreMim = document.getElementById('sobre-mim')

    header.classList.add(showInitial);
    sobreMim.classList.add(showInitial);
}



function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        }
    })
}

window.addEventListener('load', () => {
    animeInitial();
})

window.addEventListener('scroll', () => {
    animeScroll();
})