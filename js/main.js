document.addEventListener("DOMContentLoaded", () => {
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
});
