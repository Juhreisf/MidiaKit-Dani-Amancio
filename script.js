// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (n + totalSlides) % totalSlides;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.querySelector('.carousel-nav.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-nav.prev').addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto-advance carousel
setInterval(nextSlide, 7000);

// Highlight Card Flip functionality
document.querySelectorAll('.highlight-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Não flipa se clicou no botão voltar
        if (e.target.closest('.back-btn')) {
            this.classList.remove('flipped');
        } else if (!this.classList.contains('flipped')) {
            this.classList.add('flipped');
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// About Background - Imagem única, sem animação
const aboutBgElement = document.querySelector('.about-background');

if (aboutBgElement) {
    aboutBgElement.style.backgroundImage = `url('images/capaCd.jpg')`;
} else {
    console.error('Elemento .about-background não encontrado!');
}