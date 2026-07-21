// Aguarda o DOM carregar completamente para garantir que os elementos existem
document.addEventListener('DOMContentLoaded', () => {
    const buttonToggle = document.querySelector('.button-toggle');
    const menuLateral = document.querySelector('.menu-lateral');

    // Valida se os elementos realmente existem na tela antes de rodar a função
    if (buttonToggle && menuLateral) {
        buttonToggle.addEventListener('click', () => {
            menuLateral.classList.toggle('open');
        });
    }
});