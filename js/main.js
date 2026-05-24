document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for in-page anchors only (skip cross-page links).
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Reveal-on-scroll for cards.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.series-card, .resource-card, .visual-element, .approach-card').forEach(el => observer.observe(el));

    // Mobile hamburger.
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        navLinks.querySelectorAll('li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }

    // Footer year.
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Three.js initializations (functions provided by three-bg.js).
    if (typeof initThreeJS === 'function') initThreeJS();
    if (typeof generateParticles === 'function') generateParticles();
    if (typeof createParticleSystem === 'function') {
        if (document.getElementById('particles-1')) createParticleSystem('particles-1', 0xFD9F5B);
        if (document.getElementById('particles-2')) createParticleSystem('particles-2', 0x50EB97);
        if (document.getElementById('particles-3')) createParticleSystem('particles-3', 0xaa44ff);
    }
});
