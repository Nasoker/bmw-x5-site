const moreElem = document.querySelectorAll('.more');
const modalWindow = document.querySelector('.modal');

const openWindow = () => {
    modalWindow.classList.remove('hidden');
}

const closeWindow = () => {
    modalWindow.classList.add('hidden');
}

moreElem.forEach(btn =>{
    btn.addEventListener('click', openWindow);
})

modalWindow.addEventListener('click', (event) =>{
    const target = event.target;
    if (target.classList.contains('modal__close') || target.classList.contains('overlay')){
        closeWindow();
    }
})