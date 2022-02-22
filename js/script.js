let hambBtn = document.querySelector('.hamb');
let hambHiddenBtn = document.querySelector('.hamb-inner')
let hambMenu = document.querySelector('.hidden-nav')

hambBtn.addEventListener('click', function() {
    hambMenu.classList.remove('d-none')
})

hambHiddenBtn.addEventListener('click', function() {
    hambMenu.classList.add('d-none')
})

