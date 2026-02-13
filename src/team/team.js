document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle');
  
    toggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
  
        btn.setAttribute('aria-expanded', String(!isOpen));
        panel.hidden = isOpen;
        btn.textContent = isOpen ? 'More info' : 'Less info';
      });
    });
  });
  