document.addEventListener("DOMContentLoaded", () => {
    // Animaciones de entrada
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
                // Calcular la posición del elemento
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                
                // Offset: cuánto espacio dejar antes del elemento (en píxeles)
                // Aumenta o disminuye este número según prefieras
                const offset = 60; // 100px antes del elemento
                
                // Hacer scroll a la posición menos el offset
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    }
});
