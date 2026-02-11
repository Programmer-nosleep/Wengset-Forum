/* Create DOM own your project open-source or free learning */

(() => {
  const navbar = document.querySelector('nav');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('active-navbar', window.scrollY > 158);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
