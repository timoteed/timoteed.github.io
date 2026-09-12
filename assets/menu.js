(() => {
  const header = document.querySelector('.site-header');
  const button = header.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-navigation');
  const mobile = window.matchMedia('(max-width: 760px)');

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    header.classList.toggle('menu-open', open);
  }

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  mobile.addEventListener('change', () => {
    const focusInMenu = navigation.contains(document.activeElement);
    const focusOnButton = document.activeElement === button;
    setOpen(false);
    if (mobile.matches && focusInMenu) button.focus();
    if (!mobile.matches && focusOnButton) navigation.querySelector('a').focus();
  });
  header.classList.add('menu-ready');
})();
