document.addEventListener('DOMContentLoaded', () => {

    const featureLinkEvents = document.querySelectorAll(".feature__link");
    const featureSubEvents = document.querySelectorAll(".feature-sub");

    featureLinkEvents.forEach((btn,index) => {

        btn.addEventListener('click', () => {

            featureSubEvents.forEach((event) => {
                event.classList.add('hidden');
            });

            featureLinkEvents.forEach((event) =>{
                event.classList.remove('feature__link_active');
            });

            if (featureSubEvents[index].classList.contains('hidden')){
                featureSubEvents[index].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            }else{
                featureSubEvents[index].classList.add('hidden');
                btn.classList.remove('feature__link_active');
            }
        });
    });
});