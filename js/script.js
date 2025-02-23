// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for features
const featureCards = document.querySelectorAll('.feature-card');
window.addEventListener('scroll', () => {
    featureCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Add mobile menu toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.menu').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    const menuList = document.querySelector('.menu ul');
    menuList.classList.toggle('active');
    
    // Toggle icon
    const icon = menuToggle.querySelector('i');
    if (menuList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.menu');
    const menuList = document.querySelector('.menu ul');
    
    if (!menu.contains(e.target) && menuList.classList.contains('active')) {
        menuList.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
