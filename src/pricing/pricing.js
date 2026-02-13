// Fetch Nav bar
fetch('../../nav_bar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Fix image paths for subdirectory
        const logoImg = document.getElementById('logo-img');
        const hamburgerImg = document.getElementById('hamburger-img');
        const logoLink = document.querySelector('.logo');

        if (logoImg) logoImg.src = '/images/AquaLens-Logo.png';
        if (hamburgerImg) hamburgerImg.src = '/images/Hamburger_Menu_Nav_bar.png';
        if (logoLink) logoLink.href = '/index.html';

        // -----------------------------
        // Ajouter l'onglet actif après insertion
        const links = document.querySelectorAll('.navbar a');
        const currentFile = window.location.pathname.split('/').pop();

        links.forEach(link => {
            const linkFile = link.getAttribute('href').split('/').pop();
            if (linkFile === currentFile) {
                link.classList.add('active');
            }
        });

        // Hamburger menu
        const hamburger = document.getElementById('hamburger-img');
        const dropdown = document.getElementById('mobileDropdown');
        if (hamburger && dropdown) {
            hamburger.addEventListener('click', () => {
                dropdown.classList.toggle('show');
            });
        }
    });

// Fetch footer
fetch('../../footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });