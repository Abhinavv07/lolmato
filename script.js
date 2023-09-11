const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });