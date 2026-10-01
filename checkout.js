document.addEventListener('DOMContentLoaded', () => {
    // Ensure CONFIG is available
    const config = (typeof CONFIG !== 'undefined') ? CONFIG : {
        productName: "Peel Shot",
        offers: [
            { id: 1, title: "1 Unidad", qty: 1, price: 1720, oldPrice: 2390, savings: 670, savingsPercent: "28%", popular: false, badge: "", shippingText: "Pago contra entrega" },
            { id: 2, title: "🔥 2 Unidades", qty: 2, price: 2490, oldPrice: 4780, savings: 2290, savingsPercent: "48%", popular: true, badge: "MÁS VENDIDO - 48% OFF", shippingText: "Envío GRATIS" }
        ],
        whatsapp: {
            cleanNumber: "18097651290"
        }
    };

    // DOM Elements
    const offersContainer = document.getElementById('checkout-offers-container');
    const clientQtySelect = document.getElementById('client-qty-select');
    const clientNameInput = document.getElementById('client-name');
    const clientPhoneInput = document.getElementById('client-phone');
    const clientAddressInput = document.getElementById('client-address');
    const submitOrderButtons = document.querySelectorAll('.btn-submit-order');

    // Summary Elements
    const summaryQtyBadge = document.getElementById('summary-qty-badge');
    const summaryOldTotal = document.getElementById('summary-old-total');
    const summaryShippingText = document.getElementById('summary-shipping-text');
    const summarySavingsTag = document.getElementById('summary-savings-tag');
    const summaryFinalTotal = document.getElementById('summary-final-total');

    // Hidden Inputs
    const selectedOfferIdInput = document.getElementById('selected-offer-id');
    const selectedQtyInput = document.getElementById('selected-qty');
    const selectedTotalInput = document.getElementById('selected-total');

    let currentOffer = config.offers.find(o => o.id === 2) || config.offers[0];

    // Check URL Parameters to pre-select offer if passed from index.html
    const urlParams = new URLSearchParams(window.location.search);
    const offerParam = urlParams.get('offer') || urlParams.get('qty');
    if (offerParam) {
        const found = config.offers.find(o => o.qty == offerParam || o.id == offerParam);
        if (found) {
            currentOffer = found;
        }
    }

    // Sections
    const ofertaSection = document.getElementById('oferta');
    const datosFormSection = document.getElementById('datos-form');
    const selectedOfferBar = document.getElementById('selected-offer-bar');
    const selectedOfferSummaryText = document.getElementById('selected-offer-summary-text');
    const btnChangeOffer = document.getElementById('btn-change-offer');

    // Render Offer Cards
    function renderOffers() {
        if (!offersContainer) return;
        offersContainer.innerHTML = '';

        config.offers.forEach(offer => {
            const isActive = offer.id === currentOffer.id;
            const card = document.createElement('div');
            card.className = `offer-card ${isActive ? 'active' : ''}`;
            card.dataset.id = offer.id;

            card.innerHTML = `
                ${offer.badge ? `<div class="offer-badge">${offer.badge}</div>` : ''}
                <div class="offer-header">
                    <div class="offer-title" style="${offer.popular ? 'color: var(--gold-primary, #d97706); font-weight:700;' : ''}">
                        <span class="radio-custom"></span>
                        ${offer.title}
                    </div>
                    <div class="offer-price-block">
                        <div class="offer-current-price">${config.currency || 'RD$'}${offer.price.toLocaleString('en-US')}</div>
                        <div class="offer-old-price">${config.currency || 'RD$'}${offer.oldPrice.toLocaleString('en-US')}</div>
                    </div>
                </div>
                <div class="offer-features">
                    <div class="offer-feature">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <strong>${offer.shippingText}</strong>
                    </div>
                    <div class="offer-feature">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        Ahorras ${config.currency || 'RD$'}${offer.savings.toLocaleString('en-US')} (${offer.savingsPercent})
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                selectOffer(offer);
            });

            offersContainer.appendChild(card);
        });
    }

    // Update State & UI on Offer Selection
    function selectOffer(offer) {
        currentOffer = offer;
        selectedOfferIdInput.value = offer.id;
        selectedQtyInput.value = offer.qty;
        selectedTotalInput.value = offer.price;

        if (clientQtySelect) {
            clientQtySelect.value = offer.qty;
        }

        updateSummaryUI();

        // Hide offer section, show summary bar and scroll to form
        if (ofertaSection) ofertaSection.style.display = 'none';
        if (selectedOfferBar) {
            const shippingLabel = offer.qty >= 2 ? '· Envío GRATIS' : '';
            selectedOfferSummaryText.textContent = `${offer.qty === 1 ? '1 Unidad' : offer.qty + ' Unidades'} — ${config.currency || 'RD$'}${offer.price.toLocaleString('en-US')} ${shippingLabel}`;
            selectedOfferBar.style.display = 'flex';
        }

        // Smooth scroll to form
        if (datosFormSection) {
            setTimeout(() => {
                datosFormSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
        }
    }

    // Cambiar oferta — show offer selector again
    if (btnChangeOffer) {
        btnChangeOffer.addEventListener('click', () => {
            if (ofertaSection) {
                ofertaSection.style.display = '';
                ofertaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (selectedOfferBar) selectedOfferBar.style.display = 'none';
        });
    }

    // Sync Quantity Select dropdown with offers
    if (clientQtySelect) {
        clientQtySelect.addEventListener('change', (e) => {
            const qtyVal = parseInt(e.target.value);
            const matchedOffer = config.offers.find(o => o.qty === qtyVal);
            if (matchedOffer) {
                selectOffer(matchedOffer);
            } else {
                const basePrice = config.defaultPrice || 1720;
                const total = basePrice * qtyVal;
                selectedQtyInput.value = qtyVal;
                selectedTotalInput.value = total;
                summaryQtyBadge.textContent = `x${qtyVal}`;
                summaryFinalTotal.textContent = `${config.currency || 'RD$'}${total.toLocaleString('en-US')}`;
            }
        });
    }

    // Update Summary Sidebar
    function updateSummaryUI() {
        if (!summaryQtyBadge) return;
        summaryQtyBadge.textContent = `x${currentOffer.qty}`;
        summaryOldTotal.textContent = `${config.currency || 'RD$'}${currentOffer.oldPrice.toLocaleString('en-US')}`;
        summaryShippingText.textContent = currentOffer.qty >= 2 ? "GRATIS" : "Contra Entrega";
        summarySavingsTag.textContent = `-${config.currency || 'RD$'}${currentOffer.savings.toLocaleString('en-US')} (${currentOffer.savingsPercent})`;
        summaryFinalTotal.textContent = `${config.currency || 'RD$'}${currentOffer.price.toLocaleString('en-US')}`;
    }
    // Simple required-field validation (no format restrictions — any content is accepted)
    function validateForm() {
        let isValid = true;

        const fields = [
            { input: clientNameInput,   errId: 'err-name'    },
            { input: clientPhoneInput,  errId: 'err-phone'   },
            { input: clientAddressInput, errId: 'err-address' }
        ];

        fields.forEach(({ input, errId }) => {
            const err = document.getElementById(errId);
            if (!input) return;
            if (input.value.trim() === '') {
                if (err) err.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else {
                if (err) err.style.display = 'none';
                input.classList.remove('input-error');
            }
        });

        return isValid;
    }

    // Handle Order Submission
    let isSubmitting = false;

    function processOrderSubmit() {
        if (isSubmitting) return;

        if (!validateForm()) {
            const firstError = document.querySelector('.input-error');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        isSubmitting = true;
        submitOrderButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.7';
        });

        const name = clientNameInput.value.trim();
        const phone = clientPhoneInput.value.trim();
        const address = clientAddressInput.value.trim();
        const qty = parseInt(selectedQtyInput.value) || 1;
        const total = parseInt(selectedTotalInput.value) || currentOffer.price;

        // 1. Fire Meta Pixel 'Lead' event
        if (typeof fbq === 'function') {
            fbq('track', 'Lead', {
                content_name: 'Peel Shot Spray',
                currency: 'DOP',
                value: total
            });
        }

        // 2. Fire Meta Pixel 'Purchase' event immediately before opening WhatsApp
        if (typeof fbq === 'function') {
            fbq('track', 'Purchase', {
                content_name: 'Peel Shot Spray',
                content_type: 'product',
                quantity: qty,
                value: total,
                currency: 'DOP'
            });
        }

        // 3. Build WhatsApp URL
        const waNumber = (config.whatsapp && config.whatsapp.cleanNumber) ? config.whatsapp.cleanNumber : '18097651290';
        
        const textMessage = `Hola.

Quiero hacer un pedido contra entrega.

Producto:
Peel Shot

Cantidad: ${qty}

Total: RD$${total.toLocaleString('en-US')}

Nombre: ${name}

Teléfono: ${phone}

Dirección: ${address}

Quedo atento para confirmar mi envío.`;

        const encodedMessage = encodeURIComponent(textMessage);
        const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

        // Small delay to ensure pixel fires then open WhatsApp
        setTimeout(() => {
            window.location.href = waUrl;
            setTimeout(() => {
                isSubmitting = false;
                submitOrderButtons.forEach(btn => {
                    btn.disabled = false;
                    btn.style.opacity = '1';
                });
            }, 2000);
        }, 300);
    }

    submitOrderButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            processOrderSubmit();
        });
    });

    // Initialize UI
    renderOffers();
    updateSummaryUI();
});
