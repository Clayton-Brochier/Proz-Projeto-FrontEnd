const hamburgerButton = document.getElementById('burger');
const menu = document.getElementById('menu-li');

// Função para reposicionar o botão hamburguer
function positionHamburgerButton() {
    if (menu.classList.contains('active')) {
        hamburgerButton.style.top = '-' + menu.offsetHeight + 'px';
    } else {
        hamburgerButton.style.top = '0';
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 865) {
        hamburgerButton.style.display = 'block';
        positionHamburgerButton();
    } else {
        hamburgerButton.style.display = 'none';
        menu.classList.remove('active');
    }
});

hamburgerButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    positionHamburgerButton();
});

document.querySelectorAll('.btn-nav').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        positionHamburgerButton();
    });
});