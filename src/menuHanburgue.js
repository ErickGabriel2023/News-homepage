const hamburger = document.getElementById('hamburger');
const containerMenu = document.getElementById('container_menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay')
const body = document.querySelector('body')



hamburger.addEventListener('click', () => {
    containerMenu.classList.toggle('show');
    overlay.classList.toggle('show')
    body.classList.toggle('remove-overflow')
});

closeBtn.addEventListener('click', () => {
    containerMenu.classList.remove('show');
    overlay.classList.remove('show')
    
});

overlay.addEventListener('click', () => {
    containerMenu.classList.remove('show')
    overlay.classList.remove('show')
    body.classList.remove('remove-overflow')
})