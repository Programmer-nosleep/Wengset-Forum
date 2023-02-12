/* Create DOM own your project open-source or free learning */

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    const hidden = document.querySelector('.container-heading-page');
    const triggObs = document.querySelectorAll('.trigg-obs');

    navbar.classList.toggle("active-navbar", window.scrollY > 158);
    
    const evScroll = window.scrollY;

    if(evScroll >= 160) {
        hidden.style = "display: none";
    } else {
        hidden.style = "display: flex";
    }

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         entry.target.classList.toggle("show", entry.isIntersecting);
    //     });
    // }, {
    //     threshold: 1
    // });

    // triggObs.forEach(show => {
    //     observer.observe(show);
    // });
});
