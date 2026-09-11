

const businessProfile = {
    slug: "parishar-rajbhandari",

    name: "Parishar Rajbhandari",
    title: "Manager",
    company: "Hamro Trading Concern Pvt. Ltd.",

    // Optional: short brand shown in the top bar. Falls back to
    // company initials if left empty.
    brandShort: "HTC",

    profileImage: "assets/profile/parishar.jpeg",
    logo: "assets/logos/company_logo.png",

    tagline: "Decor your space.",
    description:
        "We provide premium range of Curtains, carpets, vinyl parquets, laminate parquets, mattress, rugs etc to decorate your home and office.",

    phone: "+977 9855017454",
    whatsapp: "9855017454",
    email: "rajbhandariparishar@gmail.com",
    website: "https://parishar-rajbhandari-profile.vercel.app",

    address: "Chitwan, Nepal",
    // Optional: exact Google Maps link. If omitted a search URL is
    // built automatically from `address` + `company`.
    mapsUrl: "https://maps.app.goo.gl/oAwfcawXmEtwf24k6",

    handle: "@parishar_rajbhandari_",

    instagram: "https://www.instagram.com/parishar_rajbhandari_/?hl=en",
    facebook: "https://www.facebook.com/parishar.rajbhandari.7",
    linkedin: "https://www.linkedin.com/in/parishar-rajbhandari-00531541b/",
    tiktok: "",
    youtube: "",

    whatsappMessage:
        "Hello, I found your business profile through your NFC card and would like to connect.",

    services: [
        "Premium Curtains",
        "Carpets & Parquets",
        "Installation Services",
        "Stitching Service"
    ],

    businessCardImage: "assets/business-cards/business_card.png",
    vcardPhoto: "assets/profile/parishar.jpeg"
};

// ================================================================
//  RENDER ENGINE & CORE LOGIC
// ================================================================

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function setText(sel, val) {
    const el = $(sel);
    if (el) el.textContent = val || '';
}

function initialsOf(str) {
    return String(str || '')
        .split(/\s+/)
        .filter(Boolean)
        .map(w => w[0])
        .join('')
        .slice(0, 3)
        .toUpperCase();
}

function digitsOnly(v) {
    return String(v || '').replace(/[^\d+]/g, '');
}

function waNumber(v) {
    return String(v || '').replace(/\D/g, '');
}

function mapsUrl(p) {
    if (p.mapsUrl) return p.mapsUrl;
    if (p.address) {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address + ' ' + (p.company || ''))}`;
    }
    return '';
}

function safeFilename(name, suffix) {
    const base = String(name || 'profile')
        .normalize('NFKD')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();
    return `${base || 'profile'}${suffix}`;
}

function socialEntries(p) {
    return [
        {
            key: 'instagram',
            label: 'Instagram',
            icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
            url: p.instagram
        },
        {
            key: 'facebook',
            label: 'Facebook',
            icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/></svg>`,
            url: p.facebook
        },
        {
            key: 'linkedin',
            label: 'LinkedIn',
            icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>`,
            url: p.linkedin
        },
        {
            key: 'tiktok',
            label: 'TikTok',
            icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
            url: p.tiktok
        },
        {
            key: 'youtube',
            label: 'YouTube',
            icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
            url: p.youtube
        }
    ].filter(item => Boolean(item.url));
}

// ----------------------------------------------------------------
//  RENDER PROFILE
// ----------------------------------------------------------------
function renderProfile(p) {
    // ---- Document / meta -----------------------------------------
    document.title = `${p.name} | ${p.company || 'Digital Business Card'}`;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${p.name} | ${p.company || 'Digital Business Card'}`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', p.tagline || p.description || 'Digital business profile.');

    const ogImage = document.querySelector('#ogImage');
    if (ogImage && p.profileImage) ogImage.setAttribute('content', p.profileImage);

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', p.description || `${p.name} - ${p.company || 'Digital Business Card'}`);
    }

    // ---- Top brand bar -------------------------------------------
    const brandShort = p.brandShort || initialsOf(p.company || p.name || 'NFC');
    setText('#brandPill', brandShort);
    setText('#brandCompany', p.brandShort || p.company || p.name);

    // ---- Split name for two-tier typography ----------------------
    const nameParts = (p.name || '').trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    setText('#nameFirst', firstName);
    setText('#nameLast', lastName);

    // Title / Subline
    const subline = [p.title, p.company].filter(Boolean).join(' • ');
    setText('#personTitle', subline);

    // Tagline & Bio
    setText('#tagline', p.tagline ? `"${p.tagline}"` : '');
    setText('#description', p.description);
    setText('#ctaText', p.tagline ? `Let's connect — ${p.tagline}` : "Let's create something meaningful together.");
    setText('#footerCompany', p.company || p.name);
    setText('#footerTagline', `${p.company || p.name} Digital Profile`);

    // Profile photo
    const img = $('#profileImage');
    if (img) {
        img.src = p.profileImage;
        img.alt = `${p.name} photo`;
        img.onerror = () => {
            img.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="420">
                    <rect width="100%" height="100%" fill="#181a1c"/>
                    <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
                        fill="#ffffff" font-size="120" font-weight="800" font-family="'Plus Jakarta Sans', sans-serif">${(firstName || 'P')[0]}</text>
                </svg>`
            );
        };
    }

    // Right Rail: Handle text
    setText('#heroHandle', p.handle || (firstName ? `@${firstName.toLowerCase()}` : ''));

    // Right Rail: Logo
    const logoImg = $('#brandLogoImg');
    const logoText = $('#brandLogoText');
    if (logoImg) {
        if (p.logo) {
            logoImg.src = p.logo;
            logoImg.hidden = false;
            if (logoText) logoText.hidden = true;
            logoImg.onerror = () => {
                logoImg.hidden = true;
                if (logoText) {
                    logoText.textContent = initialsOf(p.company || 'htc').toLowerCase();
                    logoText.hidden = false;
                }
            };
        } else {
            logoImg.hidden = true;
            if (logoText) {
                logoText.textContent = initialsOf(p.company || 'htc').toLowerCase();
                logoText.hidden = false;
            }
        }
    }

    // Right Rail: Social Icons
    if (p.linkedin && $('#railLinkedin')) $('#railLinkedin').href = p.linkedin;
    if (p.instagram && $('#railInstagram')) $('#railInstagram').href = p.instagram;
    if (p.tiktok && $('#railTiktok')) {
        $('#railTiktok').href = p.tiktok;
    } else if (p.whatsapp && $('#railTiktok')) {
        const wa = waNumber(p.whatsapp);
        $('#railTiktok').href = `https://wa.me/${wa}?text=${encodeURIComponent(p.whatsappMessage || '')}`;
    }
    if (p.facebook && $('#railFacebook')) $('#railFacebook').href = p.facebook;

    // ---- Contact Information Details -----------------------------
    const phoneDigits = digitsOnly(p.phone);

    setText('#phoneValue', p.phone);
    if ($('#phoneValueLink')) $('#phoneValueLink').href = phoneDigits ? `tel:${phoneDigits}` : '#';
    if ($('#phoneCard')) $('#phoneCard').href = phoneDigits ? `tel:${phoneDigits}` : '#';
    if ($('#ctaCallButton')) $('#ctaCallButton').href = phoneDigits ? `tel:${phoneDigits}` : '#';
    if ($('#dockCall')) $('#dockCall').href = phoneDigits ? `tel:${phoneDigits}` : '#';
    setText('#phoneCardValue', p.phone);

    const wa = waNumber(p.whatsapp);
    const waUrl = wa ? `https://wa.me/${wa}?text=${encodeURIComponent(p.whatsappMessage || '')}` : '#';
    setText('#whatsappValue', p.phone || p.whatsapp);
    setText('#whatsappCardValue', p.phone || p.whatsapp);
    if ($('#whatsappValueLink')) $('#whatsappValueLink').href = waUrl;
    if ($('#whatsappButton')) $('#whatsappButton').href = waUrl;
    if ($('#ctaWhatsAppButton')) $('#ctaWhatsAppButton').href = waUrl;
    if ($('#dockWhatsApp')) $('#dockWhatsApp').href = waUrl;

    // "Message Me" Primary Action Button (Reference Design)
    const messageMeBtn = $('#callButton');
    if (messageMeBtn) messageMeBtn.href = waUrl;

    // Email
    setText('#emailValue', p.email);
    setText('#emailCardValue', p.email);
    if ($('#emailValueLink')) $('#emailValueLink').href = p.email ? `mailto:${p.email}` : '#';
    if ($('#emailCard')) $('#emailCard').href = p.email ? `mailto:${p.email}` : '#';

    // Website
    const displayWeb = (p.website || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
    setText('#websiteValue', displayWeb);
    setText('#websiteCardValue', displayWeb);
    if ($('#websiteValueLink')) $('#websiteValueLink').href = p.website || '#';
    if ($('#websiteCard')) $('#websiteCard').href = p.website || '#';

    // Address & Map
    setText('#addressValue', p.address);
    setText('#locationText', p.address);
    setText('#locationSub', p.company);

    const handleMapClick = (e) => {
        if (e) e.preventDefault();
        const url = mapsUrl(p);
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    };
    if ($('#addressLink')) $('#addressLink').onclick = handleMapClick;
    if ($('#mapsButton')) $('#mapsButton').onclick = handleMapClick;

    // Current Year in footer
    setText('#currentYear', new Date().getFullYear());

    // Services list
    renderServices(p.services);

    // Social accounts list
    renderSocials(p);

    // Business card preview
    renderBusinessCard(p);
}

// ----------------------------------------------------------------
//  SERVICES RENDERER
// ----------------------------------------------------------------
function renderServices(services = []) {
    const section = $('#servicesSection');
    const grid = $('#servicesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (!services || !services.length) {
        if (section) section.style.display = 'none';
        return;
    }
    if (section) section.style.display = '';

    services.forEach((svc, i) => {
        const div = document.createElement('div');
        div.className = 'service-item';
        div.innerHTML = `
            <div class="service-left">
                <span class="service-idx">${String(i + 1).padStart(2, '0')}</span>
                <span class="service-name"></span>
            </div>
            <span class="service-arrow">&rarr;</span>
        `;
        div.querySelector('.service-name').textContent = svc;
        grid.appendChild(div);
    });
}

// ----------------------------------------------------------------
//  SOCIAL NETWORKS RENDERER
// ----------------------------------------------------------------
function renderSocials(p) {
    const section = $('#socialSection');
    const grid = $('#socialGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const entries = socialEntries(p);
    if (!entries.length) {
        if (section) section.style.display = 'none';
        return;
    }
    if (section) section.style.display = '';

    entries.forEach(({ label, icon, url }) => {
        const a = document.createElement('a');
        a.className = 'social-pill';
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `
            <div class="social-pill-icon">${icon}</div>
            <span>${label}</span>
        `;
        grid.appendChild(a);
    });
}

// ----------------------------------------------------------------
//  BUSINESS CARD PREVIEW
// ----------------------------------------------------------------
function renderBusinessCard(p) {
    const section = $('#businessCardSection');
    const preview = $('#businessCardPreview');
    if (!p.businessCardImage) {
        if (section) section.style.display = 'none';
        return;
    }
    if (section) section.style.display = '';
    if (preview) {
        preview.src = p.businessCardImage;
        preview.alt = `${p.name} Business Card`;
        preview.onerror = () => {
            if (section) section.style.display = 'none';
        };
    }
}

// ----------------------------------------------------------------
//  VCARD GENERATION (Optimized with base64 embedded photo)
// ----------------------------------------------------------------
let cachedPhoto = { base64: '', mimeType: '' };

async function imageToBase64(url) {
    if (!url) return { base64: '', mimeType: '' };
    try {
        const res = await fetch(url, { cache: 'force-cache' });
        if (!res.ok) throw new Error();
        const blob = await res.blob();
        return await new Promise((resolve) => {
            const r = new FileReader();
            r.onload = () => {
                const s = String(r.result || '');
                const comma = s.indexOf(',');
                resolve({
                    base64: comma >= 0 ? s.slice(comma + 1) : '',
                    mimeType: blob.type || 'image/jpeg'
                });
            };
            r.onerror = () => resolve({ base64: '', mimeType: '' });
            r.readAsDataURL(blob);
        });
    } catch {
        return { base64: '', mimeType: '' };
    }
}

async function preloadPhoto() {
    const url = businessProfile.vcardPhoto || businessProfile.profileImage;
    if (url) cachedPhoto = await imageToBase64(url);
}

function escapeVCard(v) {
    return String(v || '')
        .replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\n')
        .replace(/;/g, '\\;')
        .replace(/,/g, '\\,');
}

function foldVCardLine(line) {
    if (!line || line.length <= 72) return line;
    const chunks = [];
    for (let i = 0; i < line.length; i += 72) {
        chunks.push(line.slice(i, i + 72));
    }
    return chunks.join('\r\n ');
}

async function generateVCard(p) {
    const photo = cachedPhoto.base64 ? cachedPhoto : await imageToBase64(p.vcardPhoto || p.profileImage);

    const socialLines = [
        p.instagram && `item1.URL:${escapeVCard(p.instagram)}\r\nitem1.X-ABLabel:Instagram`,
        p.facebook && `item2.URL:${escapeVCard(p.facebook)}\r\nitem2.X-ABLabel:Facebook`,
        p.linkedin && `item3.URL:${escapeVCard(p.linkedin)}\r\nitem3.X-ABLabel:LinkedIn`,
        p.website && `item4.URL:${escapeVCard(p.website)}\r\nitem4.X-ABLabel:Website`
    ].filter(Boolean);

    const photoLine = photo.base64 ?
        `PHOTO;TYPE=${(photo.mimeType || 'image/jpeg').split('/')[1].toUpperCase()};ENCODING=b:${photo.base64}` :
        '';

    const raw = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${escapeVCard(p.name)}`,
        `N:${escapeVCard(p.name)};;;`,
        p.company && `ORG:${escapeVCard(p.company)}`,
        p.title && `TITLE:${escapeVCard(p.title)}`,
        p.phone && `TEL;TYPE=CELL,VOICE:${escapeVCard(p.phone)}`,
        p.whatsapp && `TEL;TYPE=WORK,VOICE:${escapeVCard(p.whatsapp)}`,
        p.email && `EMAIL;TYPE=INTERNET:${escapeVCard(p.email)}`,
        p.address && `ADR;TYPE=WORK:;;${escapeVCard(p.address)};;;`,
        p.website && `URL:${escapeVCard(p.website)}`,
        p.description && `NOTE:${escapeVCard(p.description)}`,
        ...socialLines,
        photoLine,
        'END:VCARD'
    ].filter(Boolean).join('\r\n');

    return raw.split('\r\n').map(foldVCardLine).join('\r\n');
}

function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2500);
}

async function saveContact() {
    showToast('Preparing contact card...');
    const vcard = await generateVCard(businessProfile);
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    downloadBlob(blob, safeFilename(businessProfile.name, '.vcf'));
    showToast('Contact file downloaded. Tap to save to phone.');
}

function getCardFilename(p) {
    const path = (p.businessCardImage || '').split('/').pop() || '';
    const ext = (path.match(/\.[a-z0-9]+$/i) || ['.png'])[0].toLowerCase();
    return safeFilename(p.name, `-card${ext}`);
}

async function downloadCard() {
    const url = businessProfile.businessCardImage;
    if (!url) return;
    try {
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) throw new Error();
        const blob = await res.blob();
        downloadBlob(blob, getCardFilename(businessProfile));
        showToast('Card image downloaded.');
    } catch {
        const a = document.createElement('a');
        a.href = url;
        a.download = getCardFilename(businessProfile);
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        a.remove();
        showToast('Opening card image.');
    }
}

async function shareCard() {
    const url = businessProfile.businessCardImage;
    if (!url) return;
    try {
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) throw new Error();
        const blob = await res.blob();
        const file = new File([blob], getCardFilename(businessProfile), { type: blob.type || 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                title: `${businessProfile.name} - Business Card`,
                text: `${businessProfile.name}${businessProfile.company ? ' · ' + businessProfile.company : ''}`,
                files: [file]
            });
            return;
        }
        if (navigator.share) {
            await navigator.share({
                title: `${businessProfile.name} - Business Card`,
                text: `${businessProfile.name}${businessProfile.company ? ' · ' + businessProfile.company : ''}`,
                url: window.location.href
            });
            return;
        }
        await downloadCard();
    } catch (e) {
        if (e?.name !== 'AbortError') await downloadCard();
    }
}

async function shareProfile() {
    try {
        if (navigator.share) {
            await navigator.share({
                title: `${businessProfile.name}${businessProfile.company ? ' · ' + businessProfile.company : ''}`,
                text: businessProfile.tagline || `Digital profile for ${businessProfile.name}`,
                url: window.location.href
            });
            return;
        }
        await navigator.clipboard.writeText(window.location.href);
        showToast('Profile link copied to clipboard.');
    } catch (e) {
        if (e?.name !== 'AbortError') {
            try {
                await navigator.clipboard.writeText(window.location.href);
                showToast('Profile link copied to clipboard.');
            } catch {
                showToast('Sharing not available.');
            }
        }
    }
}

function showToast(msg) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove('show'), 2800);
}

async function copyText(val) {
    try {
        await navigator.clipboard.writeText(val);
        showToast('Copied to clipboard.');
    } catch {
        const ta = document.createElement('textarea');
        ta.value = val;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        showToast('Copied to clipboard.');
    }
}

// ----------------------------------------------------------------
//  EVENT LISTENERS & INTERACTIONS
// ----------------------------------------------------------------
function setupInteractions() {
    // Save contact buttons
    const saveBtn = $('#saveContactButton');
    if (saveBtn) saveBtn.addEventListener('click', saveContact);

    const dockSave = $('#dockSave');
    if (dockSave) dockSave.addEventListener('click', saveContact);

    // Share buttons
    const shareBtn = $('#shareProfileButton');
    if (shareBtn) shareBtn.addEventListener('click', shareProfile);

    const dockShare = $('#dockShare');
    if (dockShare) dockShare.addEventListener('click', shareProfile);

    // Card buttons
    const dlCardBtn = $('#downloadCardButton');
    if (dlCardBtn) dlCardBtn.addEventListener('click', downloadCard);

    const shareCardBtn = $('#shareCardButton');
    if (shareCardBtn) shareCardBtn.addEventListener('click', shareCard);

    // Copy to clipboard triggers
    document.querySelectorAll('[data-copy-target]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetId = btn.dataset.copyTarget;
            const targetEl = document.getElementById(targetId);
            if (targetEl?.textContent) {
                await copyText(targetEl.textContent.trim());
            }
        });
    });

    // Read more toggle
    const desc = $('#description');
    const readBtn = $('#readMoreButton');
    if (desc && readBtn) {
        requestAnimationFrame(() => {
            if (desc.scrollHeight > desc.clientHeight + 6) {
                readBtn.hidden = false;
            }
        });
        readBtn.addEventListener('click', () => {
            const isClamped = desc.style.display === '-webkit-box' || !desc.style.display;
            if (isClamped) {
                desc.style.display = 'block';
                readBtn.textContent = 'Show Less ↑';
            } else {
                desc.style.display = '';
                readBtn.textContent = 'Read More →';
            }
        });
    }
}

// ----------------------------------------------------------------
//  INITIALIZE
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    renderProfile(businessProfile);
    setupInteractions();
    preloadPhoto();
});

// Run immediate render as well in case DOMContentLoaded already fired
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    renderProfile(businessProfile);
    setupInteractions();
    preloadPhoto();
}