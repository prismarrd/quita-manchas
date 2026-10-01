document.addEventListener('DOMContentLoaded', () => {
    const config = (typeof CONFIG !== 'undefined') ? CONFIG : null;

    if (config) {
        initDynamicContent(config);
    }

    initCheckoutTracking();
    initFAQAccordion();
});

// Populate Landing Page from config.js dynamically
function initDynamicContent(config) {
    const heroCurrentPrice = document.getElementById('hero-current-price');
    const heroOldPrice = document.getElementById('hero-old-price');
    const heroSavingsBadge = document.getElementById('hero-savings-badge');

    if (heroCurrentPrice && config.defaultPrice) {
        heroCurrentPrice.textContent = `${config.currency || 'RD$'}${config.defaultPrice.toLocaleString('en-US')}`;
    }
    if (heroOldPrice && config.defaultOldPrice) {
        heroOldPrice.textContent = `${config.currency || 'RD$'}${config.defaultOldPrice.toLocaleString('en-US')}`;
    }
    if (heroSavingsBadge && config.defaultSavings) {
        heroSavingsBadge.textContent = `🔥 Ahorra ${config.currency || 'RD$'}${config.defaultSavings.toLocaleString('en-US')} hoy`;
    }

    // Benefits rendering
    const benefitsContainer = document.getElementById('benefits-container');
    if (benefitsContainer && config.benefits && config.benefits.length > 0) {
        benefitsContainer.innerHTML = '';
        config.benefits.forEach(b => {
            const item = document.createElement('div');
            item.className = 'benefit-item';
            item.innerHTML = `
                <div class="benefit-icon">${b.icon}</div>
                <div class="benefit-text">
                    <strong>${b.title}</strong><br>${b.desc}
                </div>
            `;
            benefitsContainer.appendChild(item);
        });
    }

    // FAQs rendering
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer && config.faq && config.faq.length > 0) {
        faqContainer.innerHTML = '';
        config.faq.forEach(item => {
            const details = document.createElement('details');
            details.innerHTML = `
                <summary>${item.question}</summary>
                <p>${item.answer}</p>
            `;
            faqContainer.appendChild(details);
        });
    }
}

// Track InitiateCheckout on buttons navigating to checkout.html
function initCheckoutTracking() {
    const checkoutButtons = document.querySelectorAll('a[href*="checkout.html"], .btn-track-checkout');

    checkoutButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            if (typeof fbq === 'function') {
                fbq('track', 'InitiateCheckout', {
                    content_name: 'Peel Shot Spray Corporal',
                    content_type: 'product',
                    currency: 'DOP',
                    value: 1720
                });
            }
        });
    });
}

// FAQ Accordion interaction helper
function initFAQAccordion() {
    const detailsElements = document.querySelectorAll('.faq-section details');
    detailsElements.forEach(targetDetail => {
        targetDetail.addEventListener('toggle', () => {
            if (targetDetail.open) {
                detailsElements.forEach(detail => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute('open');
                    }
                });
            }
        });
    });
}
