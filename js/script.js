let hambBtn = document.querySelector('.hamb');
let hambHiddenBtn = document.querySelector('.hamb-inner')
let hambMenu = document.querySelector('.hidden-nav')

hambBtn.addEventListener('click', function() {
    hambMenu.classList.add('show-menu');
    hambHiddenBtn.classList.add('icon-hidden');
    hambBtn.classList.add('rotate-icon')
})

hambHiddenBtn.addEventListener('click', function() {
    hambMenu.classList.remove('show-menu');
    hambHiddenBtn.classList.remove('icon-hidden');
    hambBtn.classList.remove('rotate-icon')

})

