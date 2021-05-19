const smoothScrollsElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollsElems.forEach(link =>{
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = link.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({
            behavior:"smooth"
        })
    })
})