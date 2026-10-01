const CONFIG = {
    productName: "PEEL SHOT",
    tagline: "Spray Renovador de Tono Corporal Exfoliante",
    category: "Cuidado corporal / Skincare",
    format: "Spray 100ml / 3.38 fl.oz",
    
    // Pricing
    currency: "RD$",
    currencyCode: "DOP",
    defaultPrice: 1720,
    defaultOldPrice: 2390,
    defaultSavings: 670,

    // Theme Color Tokens (Matching the Golden Yellow packaging)
    colors: {
        primary: "#d97706",       // Warm Golden Amber
        primaryDark: "#b45309",   // Deep Amber
        accentYellow: "#f59e0b",  // Bright Golden Yellow
        accentSoft: "#fef3c7",    // Soft Warm Yellow Cream
        bgPage: "#fffdf5",        // Warm Cream Page BG
        textPrimary: "#1c1917",   // Warm Charcoal Dark
        alertRed: "#dc2626"
    },

    // Offers Configuration
    offers: [
        {
            id: 1,
            title: "1 Unidad",
            subtitle: "Tratamiento individual",
            qty: 1,
            price: 1720,
            oldPrice: 2390,
            savings: 670,
            savingsPercent: "28%",
            popular: false,
            badge: "",
            shippingText: "Pago contra entrega disponible",
            shippingCost: 0
        },
        {
            id: 2,
            title: "🔥 2 Unidades",
            subtitle: "Tratamiento completo recomendado",
            qty: 2,
            price: 2490,
            oldPrice: 4780,
            savings: 2290,
            savingsPercent: "48%",
            popular: true,
            badge: "MÁS VENDIDO - 48% OFF",
            shippingText: "Envío GRATIS a todo el país",
            shippingCost: 0
        }
    ],

    // WhatsApp Configuration
    whatsapp: {
        number: "8097651290",
        cleanNumber: "18097651290",
        url: "https://wa.me/18097651290",
        messageTemplate: (data) => `Hola.

Quiero hacer un pedido contra entrega.

Producto:
Peel Shot

Cantidad: ${data.qty} ${data.qty === 1 ? 'Unidad' : 'Unidades'}

Total: RD$${parseInt(data.total).toLocaleString('en-US')}

Nombre: ${data.name}

Teléfono: ${data.phone}

Dirección: ${data.address}

Quedo atento para confirmar mi envío.`
    },

    // Meta Pixel ID
    pixelId: "1806304374058727",

    // Benefits (Cosmetic language, no medical promises)
    benefits: [
        { icon: "✨", title: "Unifica la Apariencia", desc: "Ayuda a unificar visualmente el tono en zonas oscurecidas." },
        { icon: "🌾", title: "Cuidado Suave", desc: "Fórmula acondicionadora enriquecida para revitalizar la piel." },
        { icon: "💨", title: "Formato Spray 100ml", desc: "Fácil y rápida aplicación uniforme en cualquier zona corporal." },
        { icon: "🎯", title: "Zonas Específicas", desc: "Ideal para axilas, entrepierna, cuello, codos y rodillas." },
        { icon: "💧", title: "Textura Ligera", desc: "Rápida absorción sin dejar sensación grasosa ni pegajosa." },
        { icon: "☀️", title: "Piel Radiante", desc: "Aporta un aspecto más suave, fresco, luminoso y cuidado." }
    ],

    // Target Zones / Problem-Solution
    targetZones: [
        { zone: "Axilas", desc: "Cuidado práctico para zonas propensas al roce y tono desigual." },
        { zone: "Entre Piernas", desc: "Sensación de frescura y ayuda a suavizar la apariencia de zonas oscuras." },
        { zone: "Cuello", desc: "Formato spray para aplicar de forma limpia y rápida sin manchas." },
        { zone: "Codos y Rodillas", desc: "Humectación intensiva para combatir la apariencia opaca y reseca." },
        { zone: "Otras Zonas", desc: "Cualquier área corporal donde desees lucir un tono de piel renovado." }
    ],

    // Step-by-Step How To Use
    howToUseSteps: [
        { step: 1, title: "Paso 1: Prepara la Zona", desc: "Lava y seca suavemente la zona corporal donde aplicarás el spray." },
        { step: 2, title: "Paso 2: Rocía Peel Shot", desc: "Aplica uniformemente manteniendo el spray a unos 15 cm de distancia." },
        { step: 3, title: "Paso 3: Distribuye Suavemente", desc: "Distribuye con toques suaves hasta su completa absorción." },
        { step: 4, title: "Paso 4: Rutina Diaria", desc: "Integra en tu cuidado diario para mantener una piel radiante y cuidada." }
    ],

    // Includes
    includes: [
        "1x Peel Shot Spray Corporal (100ml / 3.38 fl.oz)",
        "Dosificador spray de alta precisión con aplicador transparente",
        "Fórmula cosmética ligera de rápida absorción",
        "Garantía de producto original",
        "Pago 100% contra entrega al recibir en tu puerta"
    ],

    // Trust Badges
    trustBadges: [
        { icon: "✔️", label: "Producto Original" },
        { icon: "🔒", label: "Compra Segura" },
        { icon: "💵", label: "Pago Contra Entrega" },
        { icon: "🚚", label: "Envíos en Rep. Dom." }
    ],

    // Delivery Info
    shipping: {
        santoDomingo: "24–48 horas",
        interior: "48–72 horas",
        note: "Pago 100% contra entrega. Pagas en efectivo al mensajero."
    },

    // FAQs
    faq: [
        {
            question: "¿Para qué sirve Peel Shot?",
            answer: "Peel Shot es un spray cosmético corporal formulado para brindar cuidado y ayudar a mejorar la apariencia visual de zonas con tono desigual o apariencia oscurecida."
        },
        {
            question: "¿En qué zonas puedo utilizarlo?",
            answer: "Es ideal para axilas, entrepierna, cuello, codos, rodillas y otras partes del cuerpo que desees cuidar y lucir con una apariencia más uniforme."
        },
        {
            question: "¿Puedo utilizarlo en las axilas y entre piernas?",
            answer: "Sí, su formato spray permite una aplicación práctica, higiénica y uniforme en axilas y entrepierna."
        },
        {
            question: "¿Cómo se utiliza?",
            answer: "Aplica sobre la piel limpia y seca, distribuye ligeramente y deja que se absorba por completo. Puedes utilizarlo diariamente dentro de tu rutina corporal."
        },
        {
            question: "¿Cuánto tarda el envío?",
            answer: "En Santo Domingo la entrega toma de 24 a 48 horas. Para las provincias del interior del país, el tiempo estimado es de 48 a 72 horas."
        },
        {
            question: "¿Realizan pago contra entrega?",
            answer: "¡Sí, totalmente! Pagas en efectivo directamente al mensajero al momento de recibir el producto en tu domicilio."
        },
        {
            question: "¿Hacen envíos a todo el país?",
            answer: "Sí, enviamos a todas las provincias y municipios de República Dominicana con la modalidad de pago contra entrega."
        }
    ],

    // Testimonials
    testimonials: [
        {
            name: "Carolina S.",
            location: "Santo Domingo",
            stars: 5,
            comment: "Me encantó el formato en spray. Es súper cómodo para las axilas antes de vestirme. Se absorbe rapidísimo y deja la piel súper suave.",
            verified: true,
            avatar: "perfil-testimonios/perfil1.jpg",
            image: "testimonios/testi1.avif"
        },
        {
            name: "Valeria M.",
            location: "Santiago",
            stars: 5,
            comment: "Llevo varios días usándolo en los codos y la entrepierna. La verdad la piel se ve mucho más uniforme y fresca. Lo recomiendo bastante.",
            verified: true,
            avatar: "perfil-testimonios/perfil2.jpg",
            image: "testimonios/testi2.avif"
        },
        {
            name: "Elena R.",
            location: "La Vega",
            stars: 5,
            comment: "El envío llegó súper rápido en 24 horas y pagué al entregármelo. El envase dorado es muy bonito y rinde bastante.",
            verified: true,
            avatar: "perfil-testimonios/perfil3.jpg",
            image: "testimonios/testi3.avif"
        },
        {
            name: "Yamilka T.",
            location: "San Cristóbal",
            stars: 5,
            comment: "Compré la oferta de 2 unidades por RD$2,490 para aprovechar el envío gratis. Excelente servicio y producto muy recomendado.",
            verified: true,
            avatar: "perfil-testimonios/perfil4.jpg",
            image: "testimonios/testi4.avif"
        }
    ],

    // SEO Meta
    seo: {
        title: "Peel Shot Spray Corporal | Cuidado y Tono Uniforme",
        description: "Peel Shot Spray Corporal. Ayuda a unificar visualmente el tono de axilas, entrepierna, cuello, codos y rodillas. Pago contra entrega en República Dominicana.",
        ogImage: "producto/peel_shot_product.png"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
