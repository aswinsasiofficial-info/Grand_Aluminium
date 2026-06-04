
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });

    // Initialize Services Swiper
    const servicesSwiper = new Swiper('.servicesSwiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.servicesSwiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.servicesSwiper .swiper-button-next',
            prevEl: '.servicesSwiper .swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Initialize Projects Swiper
    const projectsSwiper = new Swiper('.projectsSwiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.projectsSwiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.projectsSwiper .swiper-button-next',
            prevEl: '.projectsSwiper .swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links with navbar auto-close
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Close navbar if it's open
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                    // Wait for navbar to close, then scroll
                    setTimeout(() => {
                        const navbarHeight = navbar.offsetHeight;
                        window.scrollTo({
                            top: target.offsetTop - navbarHeight,
                            behavior: 'smooth'
                        });
                    }, 150);
                } else {
                    // Navbar is already closed, scroll immediately
                    const navbarHeight = navbar.offsetHeight;
                    window.scrollTo({
                        top: target.offsetTop - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
