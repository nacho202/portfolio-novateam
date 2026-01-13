// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación suave al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las tarjetas de productos
document.addEventListener('DOMContentLoaded', function() {
    const productoCards = document.querySelectorAll('.producto-card');
    productoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Prevenir comportamiento por defecto en botones de contacto
    document.querySelectorAll('.contacto-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    // Prevenir comportamiento por defecto en botones de productos
    document.querySelectorAll('.producto-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});
