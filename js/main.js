document.addEventListener("DOMContentLoaded", () => {
    // Animaciones de entrada (código existente)
    const elements = document.querySelectorAll(".section, .step");

    elements.forEach(el => {
        el.classList.add("pre-animate");
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        {
            rootMargin: "0px 0px -100px 0px"
        }
    );

    elements.forEach(el => observer.observe(el));

    // Smooth scroll para el botón "Conocer el proyecto" con offset
    const scrollButton = document.querySelector('a[href="#proyecto"]');
    
    if (scrollButton) {
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#proyecto');
            
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offset = 100;
                
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ===================================
    // MENÚ HAMBURGUESA (NUEVO)
    // ===================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');
    const body = document.body;

    // Función para abrir el menú
    function openMenu() {
        hamburger.classList.add('active');
        navLinks.classList.add('active');
        navOverlay.classList.add('active');
        body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    // Función para cerrar el menú
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        body.style.overflow = ''; // Restaurar scroll del body
    }

    // Toggle del menú al hacer clic en hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // Cerrar menú al hacer clic en el overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Cerrar menú al hacer clic en cualquier enlace
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Cerrar menú al presionar la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Cerrar menú si se redimensiona la ventana a desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
});
