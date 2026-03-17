// Language switcher functionality
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);

    // Update all elements with data-en and data-hu attributes
    document.querySelectorAll('[data-en][data-hu]').forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // Handle form placeholders
            const enPlaceholder = element.getAttribute('data-placeholder-en');
            const huPlaceholder = element.getAttribute('data-placeholder-hu');
            if (enPlaceholder && huPlaceholder) {
                element.placeholder = lang === 'en' ? enPlaceholder : huPlaceholder;
            }
        } else if (element.tagName === 'OPTION') {
            // Handle select options
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        } else {
            // Handle text content
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.innerHTML = text;
            }
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Image gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    if (savedLang === 'hu') {
        switchLanguage('hu');
    }

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Image gallery
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
            mainImage.alt = this.alt;
        });
    });

    // Contact form handling - Let Formspree handle the submission
    // Form will submit directly to Formspree endpoint


    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Booking form handling - Let Formspree handle the submission
    // Form will submit directly to Formspree endpoint

});
