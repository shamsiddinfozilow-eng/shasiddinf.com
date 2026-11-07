/**
 * FOZILOV SHAMSIDDIN — Shaxsiy Professional Veb-sayt
 * JavaScript Funksiyalari
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MOBIL MENYU (Gamburger menyu boshqaruvi)
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('active');
        });

        // Menyu bandlaridan biri bosilganda mobil menyuni avtomatik yopish
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. TUNGI VA KUNDUZGI REJIM (Dark / Light Mode)
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;

    // Saqlangan rejimni tekshirish
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                if (themeIcon) themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                if (themeIcon) themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // ==========================================
    // 3. SAHIFA AYLANISHI (Scroll) VA FAOL BO‘LIMNI BELGILASH
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ==========================================
    // 4. INTERAKTIV ALOQA FORMASI
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const successBox = document.getElementById('contactSuccessMsg');

    if (contactForm && successBox) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('senderName').value.trim();
            const contact = document.getElementById('senderContact').value.trim();

            // Muvaffaqiyat xabari matnini yangilash
            const successText = successBox.querySelector('.success-text');
            if (successText) {
                successText.innerHTML = `<strong>Rahmat, ${name}!</strong> Xabaringiz muvaffaqiyatli qabul qilindi. Tez orada <em>${contact}</em> orqali siz bilan bog‘lanamiz.`;
            }

            // Xabarni ko'rsatish
            successBox.style.display = 'flex';

            // Formani tozalash
            contactForm.reset();

            // 6 soniyadan so'ng xabarni ohista yo'qotish
            setTimeout(() => {
                successBox.style.display = 'none';
            }, 6000);
        });
    }

    // ==========================================
    // 5. YUQORIGA QAYTISH TUGMASI (Back to top)
    // ==========================================
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
