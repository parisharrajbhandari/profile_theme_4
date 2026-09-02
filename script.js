/*
=========================================================
PREMIUM DIGITAL BUSINESS PROFILE (FIXED & IMPROVED)
---------------------------------------------------------
*/

const businessProfile = {

  // BASIC INFORMATION
  slug: "parishar-rajbhandari",
  name: "Parishar Rajbhandari",
  title: "Manager",
  company: "Hamro Trading Concern Pvt. Ltd.",
  profileImage: "assets/profile/parishar.jpeg",
  logo: "assets/logos/company_logo.png",

  // INTRODUCTION
  tagline: "Decor your space.",
  description:
    "We provide a premium range of Curtains, Carpets, Vinyl Parquets, Laminate Parquets, Mattresses, Rugs, and custom home/office interior solutions.",

  // CONTACT INFORMATION
  phone: "+977 9855017454",
  whatsapp: "9779855017454", 
  email: "rajbhandariparishar@gmail.com",
  website: "https://parishar-rajbhandari-profile.vercel.app",

  // LOCATION
  address: "Chitwan, Nepal",
  mapsUrl: "https://maps.app.goo.gl/oAwfcawXmEtwf24k6",

  // SOCIAL MEDIA
  instagram: "https://www.instagram.com/parishar_rajbhandari_/?hl=en",
  facebook: "https://www.facebook.com/parishar.rajbhandari.7",
  linkedin: "https://www.linkedin.com/in/parishar-rajbhandari-00531541b/",
  youtube: "",
  tiktok: "",

  // WHATSAPP DEFAULT MESSAGE
  whatsappMessage:
    "Hello Parishar, I came across your digital profile and would like to inquire about your interior decor products and services.",

  // SERVICES
  services: [
    "Premium Curtains & Drapery",
    "Carpets, Rugs & Vinyl/Laminate Parquet",
    "Custom Mattress & Furnishings",
    "Professional Stitching & Installation"
  ],

  // MEDIA & VCARD
  businessCardImage: "assets/business-cards/business_card.png",
  vcardPhoto: "assets/profile/parishar.jpeg"
};

/* =====================================================
   SAFE DOM HELPERS
===================================================== */

const $ = (selector) => document.querySelector(selector);

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value || "";
}

function setHref(selector, url) {
  const el = $(selector);
  if (el) el.href = url || "#";
}

function setClick(selector, handler) {
  const el = $(selector);
  if (el) el.onclick = handler;
}

function hideIfEmpty(id, value) {
  const el = document.getElementById(id);
  if (el) el.hidden = !value;
}

function digitsOnly(value) {
  return String(value || "").replace(/[^\d+]/g, "");
}

function formatWhatsAppNumber(value) {
  let cleaned = String(value || "").replace(/\D/g, "");
  if (cleaned.length === 10 && cleaned.startsWith("98")) {
    cleaned = "977" + cleaned;
  }
  return cleaned;
}

function safeFilename(name, suffix) {
  const base = String(name || "business-profile")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();

  return `${base || "business-profile"}${suffix}`;
}

/* =====================================================
   MAPS & SOCIAL UTILITIES
===================================================== */

function getMapsUrl(profile) {
  if (profile.mapsUrl) return profile.mapsUrl;
  if (profile.address) {
    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(profile.address)
    );
  }
  return "";
}

function socialEntries(profile) {
  return [
    { key: "instagram", label: "Instagram", icon: "◎", url: profile.instagram },
    { key: "facebook", label: "Facebook", icon: "f", url: profile.facebook },
    { key: "linkedin", label: "LinkedIn", icon: "in", url: profile.linkedin },
    { key: "youtube", label: "YouTube", icon: "▶", url: profile.youtube },
    { key: "tiktok", label: "TikTok", icon: "♪", url: profile.tiktok }
  ].filter((item) => Boolean(item.url));
}

/* =====================================================
   RENDER PROFILE CONTENT & LINKS
===================================================== */

function renderProfile(profile) {
  document.title = `${profile.name} | ${profile.company || "Business Profile"}`;

  setText("#name", profile.name);
  setText("#title", profile.title);
  setText("#company", profile.company);
  setText("#tagline", profile.tagline);
  setText("#description", profile.description);

  setText("#phoneValue", profile.phone);
  setText("#emailValue", profile.email);
  setText("#websiteValue", String(profile.website || "").replace(/^https?:\/\//, ""));
  setText("#addressValue", profile.address);
  setText("#locationText", profile.address);
  setText("#footerCompany", profile.company || profile.name);

  const profileImage = $("#profileImage");
  if (profileImage) {
    profileImage.src = profile.profileImage || "";
    profileImage.alt = `${profile.name} profile photo`;
    profileImage.onerror = () => {
      const initial = (profile.name || "B").trim().charAt(0).toUpperCase();
      profileImage.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
            <rect width="100%" height="100%" fill="#161310"/>
            <text x="50%" y="53%" dominant-baseline="middle" text-anchor="middle" fill="#d8b36a" font-size="180" font-family="Arial">${initial}</text>
          </svg>
        `);
    };
  }

  const logoImage = $("#companyLogo");
  if (logoImage && profile.logo) {
    logoImage.src = profile.logo;
    logoImage.alt = `${profile.company} Logo`;
  }

  const tel = digitsOnly(profile.phone);
  const telUrl = tel ? `tel:${tel}` : "#";
  setHref("#callButton", telUrl);
  setHref("#phoneCard", telUrl);
  setHref("#ctaCallButton", telUrl);
  setHref("#mobileCall", telUrl);

  const wa = formatWhatsAppNumber(profile.whatsapp || profile.phone);
  const waUrl = wa
    ? `https://wa.me/${wa}?text=${encodeURIComponent(profile.whatsappMessage || "")}`
    : "#";

  setHref("#whatsappButton", waUrl);
  setHref("#ctaWhatsAppButton", waUrl);
  setHref("#mobileWhatsApp", waUrl);

  const mailUrl = profile.email ? `mailto:${profile.email}` : "#";
  setHref("#emailCard", mailUrl);
  setHref("#emailButton", mailUrl);

  const webUrl = profile.website || "#";
  setHref("#websiteCard", webUrl);
  setHref("#websiteButton", webUrl);

  const mapsHandler = (e) => {
    if (e) e.preventDefault();
    const url = getMapsUrl(profile);
    if (!url) {
      showToast("Location is not configured.");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  setClick("#mapsButton", mapsHandler);
  setClick("#locationCard", mapsHandler);

  hideIfEmpty("contactSection", profile.phone || profile.email || profile.website);
  hideIfEmpty("locationSection", profile.address || profile.mapsUrl);

  renderServices(profile.services);
  renderSocials(profile);
  renderBusinessCard(profile);

  const ogImage = $("#ogImage");
  if (ogImage && profile.profileImage) {
    ogImage.setAttribute("content", profile.profileImage);
  }

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      "content",
      profile.description || `${profile.name} - ${profile.company || "Business Profile"}`
    );
  }
}

function renderServices(services = []) {
  const section = $("#servicesSection");
  const grid = $("#servicesGrid");
  if (!grid) return;
  grid.innerHTML = "";

  if (!services.length) {
    if (section) section.hidden = true;
    return;
  }
  if (section) section.hidden = false;

  services.forEach((service) => {
    const item = document.createElement("div");
    item.className = "service-item";
    item.innerHTML = `<span class="service-number">-</span><span class="service-name"></span>`;
    item.querySelector(".service-name").textContent = service;
    grid.appendChild(item);
  });
}

function renderSocials(profile) {
  const section = $("#socialSection");
  const grid = $("#socialGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const entries = socialEntries(profile);
  if (!entries.length) {
    if (section) section.hidden = true;
    return;
  }
  if (section) section.hidden = false;

  entries.forEach(({ label, icon, url }) => {
    const item = document.createElement("a");
    item.className = "social-item";
    item.href = url;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    item.innerHTML = `<span class="social-icon">${icon}</span><span class="social-name"></span><span class="social-arrow">↗</span>`;
    item.querySelector(".social-name").textContent = label;
    grid.appendChild(item);
  });
}

function renderBusinessCard(profile) {
  const section = $("#businessCardSection");
  const preview = $("#businessCardPreview");
  if (!section || !preview) return;

  if (!profile.businessCardImage) {
    section.hidden = true;
    return;
  }

  section.hidden = false;
  preview.src = profile.businessCardImage;
  preview.alt = `${profile.name} business card`;
  preview.onerror = () => { section.hidden = true; };
}

/* =====================================================
   VCARD GENERATION & SAVING (SYNCHRONOUS FIX)
===================================================== */

// Global cache for the photo to ensure saveContact runs synchronously 
let cachedVCardPhoto = { base64: "", type: "" };

async function preloadVCardPhoto() {
  const imageUrl = businessProfile.vcardPhoto || businessProfile.profileImage;
  if (!imageUrl) return;

  try {
    const response = await fetch(imageUrl, { cache: "force-cache" });
    if (!response.ok) return;
    const blob = await response.blob();

    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const comma = result.indexOf(",");
      let ext = (blob.type || "").split("/")[1] || "JPEG";
      if (ext.toLowerCase() === "jpg") ext = "JPEG";

      cachedVCardPhoto = {
        base64: comma >= 0 ? result.slice(comma + 1) : "",
        type: ext.toUpperCase()
      };
    };
    reader.readAsDataURL(blob);
  } catch (e) {
    console.warn("Failed to preload vCard photo", e);
  }
}

function escapeVCard(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function foldVCardLine(line) {
  const max = 72;
  const chars = Array.from(line);
  const lines = [];
  while (chars.length > max) {
    lines.push(chars.splice(0, max).join(""));
  }
  if (chars.length) lines.push(chars.join(""));
  return lines.join("\r\n ");
}

// Removed async keyword to prevent gesture loss
function generateVCard(profile) {
  const socialLines = [
    profile.instagram && `item1.URL:${escapeVCard(profile.instagram)}\r\nitem1.X-ABLabel:Instagram`,
    profile.facebook && `item2.URL:${escapeVCard(profile.facebook)}\r\nitem2.X-ABLabel:Facebook`,
    profile.linkedin && `item3.URL:${escapeVCard(profile.linkedin)}\r\nitem3.X-ABLabel:LinkedIn`,
    profile.website && `item4.URL:${escapeVCard(profile.website)}\r\nitem4.X-ABLabel:Website`
  ].filter(Boolean);

  const photoLine = cachedVCardPhoto.base64
    ? `PHOTO;TYPE=${cachedVCardPhoto.type};ENCODING=b:${cachedVCardPhoto.base64}`
    : "";

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCard(profile.name)}`,
    `N:${escapeVCard(profile.name)};;;`,
    profile.company && `ORG:${escapeVCard(profile.company)}`,
    profile.title && `TITLE:${escapeVCard(profile.title)}`,
    profile.phone && `TEL;TYPE=CELL,VOICE:${escapeVCard(profile.phone)}`,
    profile.whatsapp && `TEL;TYPE=WORK,VOICE:+${formatWhatsAppNumber(profile.whatsapp)}`,
    profile.email && `EMAIL;TYPE=INTERNET:${escapeVCard(profile.email)}`,
    profile.address && `ADR;TYPE=WORK:;;${escapeVCard(profile.address)};;;`,
    profile.website && `URL:${escapeVCard(profile.website)}`,
    profile.description && `NOTE:${escapeVCard(profile.description)}`,
    ...socialLines,
    photoLine,
    "END:VCARD"
  ].filter(Boolean);

  return lines.map(foldVCardLine).join("\r\n");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.style.display = "none";
  anchor.href = url;
  anchor.download = filename;
  
  document.body.appendChild(anchor);
  anchor.click();
  
  // Cleanup safely
  setTimeout(() => {
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }, 3000);
}

// Completely Synchronous saveContact implementation
function saveContact() {
  try {
    const vcardString = generateVCard(businessProfile);
    const fileName = safeFilename(businessProfile.name, ".vcf");
    
    // Create Blob directly and force a native download
    const blob = new Blob([vcardString], { type: "text/vcard" });
    downloadBlob(blob, fileName);
    
    showToast("Contact file downloaded. Open to save.");
  } catch (error) {
    showToast("Could not export contact file.");
  }
}

/* =====================================================
   MEDIA SHARE & COPY HELPERS
===================================================== */

async function shareProfile() {
  const data = {
    title: `${businessProfile.name}${businessProfile.company ? " - " + businessProfile.company : ""}`,
    text: businessProfile.tagline || `Business profile for ${businessProfile.name}`,
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(data);
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Profile link copied to clipboard.");
      return;
    }
  } catch (error) {
    if (error?.name !== "AbortError") {
      showToast("Could not share profile.");
    }
  }
}

async function copyText(value) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(value);
      showToast("Copied to clipboard.");
      return;
    }
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("Copied to clipboard.");
  } catch {
    showToast("Copy unavailable.");
  }
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => { toast.classList.remove("show"); }, 3000);
}

/* =====================================================
   INTERACTION BINDINGS
===================================================== */

function setupInteractions() {
  setClick("#saveContactButton", saveContact);
  setClick("#mobileSaveContact", saveContact);

  setClick("#shareProfileButton", shareProfile);
  setClick("#shareProfileTop", shareProfile);

  setClick("#downloadCardButton", () => {
    if (businessProfile.businessCardImage) {
      const a = document.createElement("a");
      a.href = businessProfile.businessCardImage;
      a.download = safeFilename(businessProfile.name, "-business-card.png");
      a.click();
    }
  });

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const target = document.getElementById(button.dataset.copyTarget);
      if (target && target.textContent) {
        await copyText(target.textContent);
      }
    });
  });

  const aboutCard = document.querySelector(".about-panel");
  const readMore = $("#readMoreButton");

  if (aboutCard && readMore) {
    const description = $("#description");
    if (description && description.scrollHeight > description.clientHeight + 8) {
      readMore.hidden = false;
    }

    readMore.addEventListener("click", () => {
      const expanded = aboutCard.classList.toggle("expanded");
      readMore.innerHTML = expanded
        ? "Show Less <span>↑</span>"
        : "Read More <span>→</span>";
    });
  }
}

/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderProfile(businessProfile);
  setupInteractions();
  // Preload the vCard photo silently in the background
  preloadVCardPhoto();
});