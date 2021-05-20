const humburger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');

humburger.addEventListener('click',()=>{
    menu.classList.toggle('menu-active');
    humburger.classList.toggle('humburger-menu-active');
})

menu.addEventListener('click',(event)=>{
    const target = event.target;
    if (target.classList.contains('menu-list__link')){
        menu.classList.toggle('menu-active');
        humburger.classList.toggle('humburger-menu-active');
    }
})
