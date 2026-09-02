
/*
=========================================================
PREMIUM DIGITAL BUSINESS PROFILE
---------------------------------------------------------
FOR A NEW USER:
Edit ONLY the `businessProfile` object below.

Everything else is automatic.
=========================================================
*/

const businessProfile = {

  // ---------------------------------------
  // BASIC INFORMATION
  // ---------------------------------------

  slug: "parishar-rajbhandari",

  name: "Parishar Rajbhandari",

  title: "Manager",

  company: "Hamro Trading Concern Pvt. Ltd.",

  profileImage:
    "assets/profile/parishar.jpeg",

  logo:
    "assets/logos/company_logo.png",


  // ---------------------------------------
  // INTRODUCTION
  // ---------------------------------------

  tagline:
    "Decor your space.",

  description:
    "We provide premium range of Curtains, carpets, vinyl parquets, laminate parquets, mattress, rugs etc to decorate your home and office.",


  // ---------------------------------------
  // CONTACT
  // ---------------------------------------

  phone:
    "+977 9855017454",

  whatsapp:
    "9855017454",

  email:
    "rajbhandariparishar@gmail.com",

  website:
    "https://parishar-rajbhandari-profile.vercel.app",


  // ---------------------------------------
  // LOCATION
  // ---------------------------------------

  address:
    "Chitwan, Nepal",

  /*
    Optional.
    Put your exact Google Maps URL here.

    Example:
    mapsUrl: "https://maps.google.com/?q=..."
  */

  mapsUrl:
    "https://maps.app.goo.gl/oAwfcawXmEtwf24k6",


  // ---------------------------------------
  // SOCIAL MEDIA
  // ---------------------------------------

  instagram:
    "https://www.instagram.com/parishar_rajbhandari_/?hl=en",

  facebook:
    "https://www.facebook.com/parishar.rajbhandari.7",

  linkedin:
    "https://www.linkedin.com/in/parishar-rajbhandari-00531541b/",

  youtube:
    "",

  tiktok:
    "",


  // ---------------------------------------
  // WHATSAPP MESSAGE
  // ---------------------------------------

  whatsappMessage:
    "Hello, I found your business profile through your NFC card and would like to know more about your services.",


  // ---------------------------------------
  // SERVICES
  // ---------------------------------------

  services: [
    "Premium Curtains",
    "Carpets and Parquets",
    "Installation Services",
    "Stitching Service"
  ],


  // ---------------------------------------
  // BUSINESS CARD IMAGE
  // ---------------------------------------

  businessCardImage:
    "assets/business-cards/business_card.png",


  /*
    PHOTO USED INSIDE VCARD.

    Recommended:
    Use a local / same-origin image.

    Example:
    "assets/profile/parishar.jpeg"
  */

  vcardPhoto:
    "assets/profile/parishar.jpeg"
};


/* =====================================================
   HELPERS
===================================================== */

const $ = (selector) =>
  document.querySelector(selector);


function setText(selector, value) {

  const element = $(selector);

  if (!element) return;

  element.textContent = value || "";
}


function hideIfEmpty(id, value) {

  const element =
    document.getElementById(id);

  if (!element) return;

  element.hidden = !value;
}


function digitsOnly(value) {

  return String(value || "")
    .replace(/[^\d+]/g, "");
}


function whatsappNumber(value) {

  return String(value || "")
    .replace(/\D/g, "");
}


function safeFilename(name, suffix) {

  const base =
    String(name || "business-profile")
      .normalize("NFKD")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .toLowerCase();

  return `${base || "business-profile"}${suffix}`;
}


/* =====================================================
   MAPS
===================================================== */

function getMapsUrl(profile) {

  if (profile.mapsUrl) {

    return profile.mapsUrl;
  }

  if (profile.address) {

    return (
      "https://www.google.com/maps/search/?api=1" +
      "&query=" +
      encodeURIComponent(profile.address)
    );
  }

  return "";
}


/* =====================================================
   SOCIALS
===================================================== */

function socialEntries(profile) {

  return [

    {
      key: "instagram",
      label: "Instagram",
      icon: "◎",
      url: profile.instagram
    },

    {
      key: "facebook",
      label: "Facebook",
      icon: "f",
      url: profile.facebook
    },

    {
      key: "linkedin",
      label: "LinkedIn",
      icon: "in",
      url: profile.linkedin
    },

    {
      key: "youtube",
      label: "YouTube",
      icon: "▶",
      url: profile.youtube
    },

    {
      key: "tiktok",
      label: "TikTok",
      icon: "♪",
      url: profile.tiktok
    }

  ].filter(item => item.url);
}


/* =====================================================
   RENDER PROFILE
===================================================== */

function renderProfile(profile) {

  document.title =
    `${profile.name} | ${profile.company || "Business Profile"}`;


  setText("#name", profile.name);

  setText("#title", profile.title);

  setText("#company", profile.company);

  setText("#tagline", profile.tagline);

  setText("#phoneValue", profile.phone);

  setText("#emailValue", profile.email);

  setText(
    "#websiteValue",
    String(profile.website || "")
      .replace(/^https?:\/\//, "")
  );

  setText("#addressValue", profile.address);

  setText("#locationText", profile.address);

  setText("#description", profile.description);

  setText(
    "#footerCompany",
    profile.company || profile.name
  );


  /* PROFILE IMAGE */

  const profileImage =
    $("#profileImage");

  if (profileImage) {

    profileImage.src =
      profile.profileImage || "";

    profileImage.alt =
      `${profile.name} profile photo`;

    profileImage.onerror = () => {

      const initial =
        (profile.name || "B")
          .trim()
          .charAt(0)
          .toUpperCase();

      profileImage.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="600">

            <rect
              width="100%"
              height="100%"
              fill="#161310"
            />

            <text
              x="50%"
              y="53%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="#d8b36a"
              font-size="180"
              font-family="Arial">

              ${initial}

            </text>

          </svg>
        `);
    };
  }


  /* TELEPHONE */

  const tel =
    digitsOnly(profile.phone);

  $("#callButton").href =
    tel ? `tel:${tel}` : "#";

  $("#phoneCard").href =
    tel ? `tel:${tel}` : "#";

  $("#ctaCallButton").href =
    tel ? `tel:${tel}` : "#";

  $("#mobileCall").href =
    tel ? `tel:${tel}` : "#";


  /* WHATSAPP */

  const wa =
    whatsappNumber(profile.whatsapp);

  const waUrl = wa
    ? `https://wa.me/${wa}?text=${encodeURIComponent(
        profile.whatsappMessage || ""
      )}`
    : "";

  $("#whatsappButton").href =
    waUrl || "#";

  $("#ctaWhatsAppButton").href =
    waUrl || "#";

  $("#mobileWhatsApp").href =
    waUrl || "#";


  /* EMAIL */

  $("#emailCard").href =
    profile.email
      ? `mailto:${profile.email}`
      : "#";


  /* WEBSITE */

  $("#websiteCard").href =
    profile.website || "#";


  /* LOCATION */

  $("#mapsButton").onclick = () => {

    const url =
      getMapsUrl(profile);

    if (!url) {

      showToast(
        "Location is not configured."
      );

      return;
    }

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };


  $("#locationCard").onclick = () => {

    $("#mapsButton").click();
  };


  /* HIDE EMPTY SECTIONS */

  hideIfEmpty(
    "contactSection",
    profile.phone ||
    profile.email ||
    profile.website
  );

  hideIfEmpty(
    "locationSection",
    profile.address ||
    profile.mapsUrl
  );


  renderServices(profile.services);

  renderSocials(profile);

  renderBusinessCard(profile);


  /* SEO */

  const ogImage =
    $("#ogImage");

  if (
    ogImage &&
    profile.profileImage
  ) {

    ogImage.setAttribute(
      "content",
      profile.profileImage
    );
  }

  const description =
    document.querySelector(
      'meta[name="description"]'
    );

  if (description) {

    description.setAttribute(
      "content",
      profile.description ||
      `${profile.name} - ${profile.company || "Business Profile"}`
    );
  }
}


/* =====================================================
   SERVICES
===================================================== */

function renderServices(services = []) {

  const section =
    $("#servicesSection");

  const grid =
    $("#servicesGrid");

  grid.innerHTML = "";

  if (!services.length) {

    section.hidden = true;

    return;
  }

  section.hidden = false;


  services.forEach(
    (service, index) => {

      const item =
        document.createElement("div");

      item.className =
        "service-item";

      item.innerHTML = `
        <span class="service-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="service-name"></span>
      `;

      item
        .querySelector(".service-name")
        .textContent = service;

      grid.appendChild(item);
    }
  );
}


/* =====================================================
   SOCIAL MEDIA
===================================================== */

function renderSocials(profile) {

  const section =
    $("#socialSection");

  const grid =
    $("#socialGrid");

  grid.innerHTML = "";

  const entries =
    socialEntries(profile);


  if (!entries.length) {

    section.hidden = true;

    return;
  }

  section.hidden = false;


  entries.forEach(
    ({ label, icon, url }) => {

      const item =
        document.createElement("a");

      item.className =
        "social-item";

      item.href = url;

      item.target = "_blank";

      item.rel =
        "noopener noreferrer";

      item.innerHTML = `
        <span class="social-icon">
          ${icon}
        </span>

        <span class="social-name">
        </span>

        <span class="social-arrow">
          ↗
        </span>
      `;

      item
        .querySelector(".social-name")
        .textContent = label;

      grid.appendChild(item);
    }
  );
}


/* =====================================================
   BUSINESS CARD
===================================================== */

function renderBusinessCard(profile) {

  const section =
    $("#businessCardSection");

  const preview =
    $("#businessCardPreview");


  if (!profile.businessCardImage) {

    section.hidden = true;

    return;
  }

  section.hidden = false;

  preview.src =
    profile.businessCardImage;

  preview.alt =
    `${profile.name} business visiting card`;


  preview.onerror = () => {

    section.hidden = true;

    showToast(
      "Business card image could not be loaded."
    );
  };
}


/* =====================================================
   VCARD
===================================================== */

function escapeVCard(value) {

  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}


function foldVCardLine(line) {

  const max = 72;

  const chars =
    Array.from(line);

  const lines = [];


  while (chars.length > max) {

    lines.push(
      chars
        .splice(0, max)
        .join("")
    );
  }


  if (chars.length) {

    lines.push(
      chars.join("")
    );
  }


  return lines.join(
    "\r\n "
  );
}


/* =====================================================
   IMAGE -> BASE64
===================================================== */

async function imageToBase64Data(imageUrl) {

  if (!imageUrl) {

    return {
      base64: "",
      mimeType: ""
    };
  }


  try {

    const response =
      await fetch(
        imageUrl,
        {
          cache: "no-cache"
        }
      );


    if (!response.ok) {

      throw new Error(
        "Image fetch failed"
      );
    }


    const blob =
      await response.blob();


    return await new Promise(
      (resolve, reject) => {

        const reader =
          new FileReader();


        reader.onload = () => {

          const result =
            String(
              reader.result || ""
            );


          const comma =
            result.indexOf(",");


          resolve({

            base64:
              comma >= 0
                ? result.slice(
                    comma + 1
                  )
                : "",

            mimeType:
              blob.type ||
              "image/jpeg"
          });
        };


        reader.onerror = reject;

        reader.readAsDataURL(
          blob
        );
      }
    );

  } catch {

    /*
      IMPORTANT:
      vCard creation still works without
      the photo if the image cannot be
      fetched.
    */

    return {
      base64: "",
      mimeType: ""
    };
  }
}


function buildVCardPhotoField(
  base64,
  mimeType
) {

  if (!base64) {

    return "";
  }


  const extension =
    (
      mimeType ||
      "image/jpeg"
    )
      .split("/")
      [1]
      ?.split(";")[0] ||
    "jpeg";


  return (
    `PHOTO;ENCODING=b;TYPE=` +
    `${extension.toUpperCase()}:` +
    base64
  );
}


/* =====================================================
   GENERATE VCARD
===================================================== */

async function generateVCard(
  profile
) {

  const photo =
    await imageToBase64Data(
      profile.vcardPhoto ||
      profile.profileImage
    );


  const socialLines = [

    profile.instagram &&
      `item1.URL:${escapeVCard(
        profile.instagram
      )}\r\n` +
      `item1.X-ABLabel:Instagram`,

    profile.facebook &&
      `item2.URL:${escapeVCard(
        profile.facebook
      )}\r\n` +
      `item2.X-ABLabel:Facebook`,

    profile.linkedin &&
      `item3.URL:${escapeVCard(
        profile.linkedin
      )}\r\n` +
      `item3.X-ABLabel:LinkedIn`,

    profile.website &&
      `item4.URL:${escapeVCard(
        profile.website
      )}\r\n` +
      `item4.X-ABLabel:Website`

  ].filter(Boolean);


  const photoLine =
    buildVCardPhotoField(
      photo.base64,
      photo.mimeType
    );


  const raw = [

    "BEGIN:VCARD",

    "VERSION:3.0",

    `FN:${escapeVCard(
      profile.name
    )}`,

    `N:${escapeVCard(
      profile.name
    )};;;`,

    profile.company &&
      `ORG:${escapeVCard(
        profile.company
      )}`,

    profile.title &&
      `TITLE:${escapeVCard(
        profile.title
      )}`,

    profile.phone &&
      `TEL;TYPE=CELL,VOICE:${escapeVCard(
        profile.phone
      )}`,

    /*
      Store WhatsApp as another phone number.
      This makes it visible in common Contacts apps.
    */

    profile.whatsapp &&
      profile.whatsapp !== profile.phone &&
      `TEL;TYPE=WORK,VOICE:${escapeVCard(
        profile.whatsapp
      )}`,

    profile.email &&
      `EMAIL;TYPE=INTERNET:${escapeVCard(
        profile.email
      )}`,

    profile.address &&
      `ADR;TYPE=WORK:;;${escapeVCard(
        profile.address
      )};;;`,

    profile.website &&
      `URL:${escapeVCard(
        profile.website
      )}`,

    profile.description &&
      `NOTE:${escapeVCard(
        profile.description
      )}`,

    ...socialLines,

    photoLine,

    "END:VCARD"

  ]
    .filter(Boolean)
    .join("\r\n");


  return raw
    .split("\r\n")
    .map(foldVCardLine)
    .join("\r\n");
}


/* =====================================================
   DOWNLOAD BLOB
===================================================== */

function downloadBlob(
  blob,
  filename
) {

  const url =
    URL.createObjectURL(blob);


  const anchor =
    document.createElement("a");

  anchor.href = url;

  anchor.download = filename;

  anchor.rel = "noopener";


  document.body.appendChild(
    anchor
  );

  anchor.click();

  anchor.remove();


  setTimeout(
    () => URL.revokeObjectURL(url),
    2500
  );
}


/* =====================================================
   SAVE CONTACT
=====================================================

   THIS IS THE IMPORTANT FIX.

   Old behavior:
   ----------------
   Generate .vcf
   -> browser downloads it
   -> user has to find/open it manually.

   New behavior:
   ----------------
   Generate .vcf
   -> create real File object
   -> use native Web Share when available
   -> Android/iPhone can hand it to Contacts
   -> fallback to download on unsupported browsers.
===================================================== */

async function saveContact() {

  const button =
    $("#saveContactButton");

  const originalHTML =
    button.innerHTML;


  try {

    button.disabled = true;

    button.innerHTML = `
      <span class="btn-icon">⋯</span>
      <span>Preparing</span>
    `;


    const vcard =
      await generateVCard(
        businessProfile
      );


    const file =
      new File(
        [vcard],
        safeFilename(
          businessProfile.name,
          ".vcf"
        ),
        {
          type:
            "text/vcard;charset=utf-8"
        }
      );


    /*
      STEP 1:
      Native file sharing.

      This is the preferred method for
      mobile browsers that support it.
    */

    if (
      navigator.share &&
      navigator.canShare
    ) {

      let canShareFile = false;


      try {

        canShareFile =
          navigator.canShare({
            files: [file]
          });

      } catch {

        canShareFile = false;
      }


      if (canShareFile) {

        await navigator.share({

          title:
            `${businessProfile.name} Contact`,

          text:
            `Save ${businessProfile.name} to your contacts.`,

          files: [file]
        });


        showToast(
          "Contact shared. Choose Contacts to save it."
        );

        return;
      }
    }


    /*
      STEP 2:
      Some browsers expose share() but
      don't allow file sharing.

      Use the normal vCard download.
    */

    if (navigator.share) {

      try {

        await navigator.share({
          title:
            `${businessProfile.name} Contact`,
          text:
            "Open the downloaded contact file to save it."
        });

        return;

      } catch (error) {

        if (
          error?.name ===
          "AbortError"
        ) {

          return;
        }
      }
    }


    /*
      STEP 3:
      Universal fallback.
    */

    downloadBlob(
      file,
      safeFilename(
        businessProfile.name,
        ".vcf"
      )
    );


    showToast(
      "Contact file downloaded. Open it to save the contact."
    );


  } catch (error) {

    /*
      User closed the share sheet.
      This is not an error that needs
      another message.
    */

    if (
      error?.name ===
      "AbortError"
    ) {

      return;
    }


    /*
      Last-resort fallback.
    */

    try {

      const vcard =
        await generateVCard(
          businessProfile
        );


      const blob =
        new Blob(
          [vcard],
          {
            type:
              "text/vcard;charset=utf-8"
          }
        );


      downloadBlob(
        blob,
        safeFilename(
          businessProfile.name,
          ".vcf"
        )
      );


      showToast(
        "Contact file downloaded. Open it to save the contact."
      );

    } catch {

      showToast(
        "Could not create the contact file."
      );
    }


  } finally {

    button.disabled = false;

    button.innerHTML =
      originalHTML;
  }
}


/* =====================================================
   BUSINESS CARD DOWNLOAD
===================================================== */

function getImageFileName(profile) {

  const path =
    String(
      profile.businessCardImage || ""
    );

  const name =
    path.split("/").pop() || "";

  const match =
    name.match(
      /\.[a-z0-9]+$/i
    );


  const extension =
    match
      ? match[0].toLowerCase()
      : ".png";


  return safeFilename(
    profile.name,
    `-business-card${extension}`
  );
}


async function downloadExistingBusinessCard() {

  if (
    !businessProfile.businessCardImage
  ) {

    return;
  }


  try {

    const response =
      await fetch(
        businessProfile.businessCardImage,
        {
          cache: "no-cache"
        }
      );


    if (!response.ok) {

      throw new Error(
        "Download failed"
      );
    }


    const blob =
      await response.blob();


    downloadBlob(
      blob,
      getImageFileName(
        businessProfile
      )
    );


    showToast(
      "Business card saved."
    );


  } catch {

    const anchor =
      document.createElement("a");

    anchor.href =
      businessProfile.businessCardImage;

    anchor.download =
      getImageFileName(
        businessProfile
      );

    anchor.target = "_blank";

    anchor.rel = "noopener";


    document.body.appendChild(
      anchor
    );

    anchor.click();

    anchor.remove();


    showToast(
      "Opening the original business card."
    );
  }
}


/* =====================================================
   SHARE BUSINESS CARD
===================================================== */

async function shareExistingBusinessCard() {

  const imageUrl =
    businessProfile.businessCardImage;


  if (!imageUrl) return;


  try {

    const response =
      await fetch(
        imageUrl,
        {
          cache: "no-cache"
        }
      );


    if (!response.ok) {

      throw new Error(
        "Image fetch failed"
      );
    }


    const blob =
      await response.blob();


    const file =
      new File(
        [blob],
        getImageFileName(
          businessProfile
        ),
        {
          type:
            blob.type || "image/png"
        }
      );


    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({
        files: [file]
      })
    ) {

      await navigator.share({

        title:
          `${businessProfile.name} - Business Card`,

        text:
          businessProfile.company ||
          businessProfile.name,

        files: [file]
      });

      return;
    }


    if (navigator.share) {

      await navigator.share({

        title:
          `${businessProfile.name} - Business Card`,

        text:
          businessProfile.company ||
          businessProfile.name,

        url:
          window.location.href
      });

      return;
    }


    await downloadExistingBusinessCard();


  } catch (error) {

    if (
      error?.name ===
      "AbortError"
    ) {

      return;
    }


    await downloadExistingBusinessCard();
  }
}


/* =====================================================
   SHARE PROFILE
===================================================== */

async function shareProfile() {

  const data = {

    title:
      `${businessProfile.name}${
        businessProfile.company
          ? " - " + businessProfile.company
          : ""
      }`,

    text:
      businessProfile.tagline ||
      `Business profile for ${businessProfile.name}`,

    url:
      window.location.href
  };


  try {

    if (navigator.share) {

      await navigator.share(
        data
      );

      return;
    }


    if (
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {

      await navigator.clipboard.writeText(
        window.location.href
      );

      showToast(
        "Profile link copied."
      );

      return;
    }


    showToast(
      "Sharing is not available in this browser."
    );


  } catch (error) {

    if (
      error?.name !==
      "AbortError"
    ) {

      showToast(
        "Could not share the profile."
      );
    }
  }
}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

  const toast =
    $("#toast");


  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      3000
    );
}


/* =====================================================
   COPY
===================================================== */

async function copyText(value) {

  try {

    if (
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {

      await navigator.clipboard.writeText(
        value
      );

      showToast(
        "Copied to clipboard."
      );

      return;
    }


    /*
      Fallback for older browsers.
    */

    const textarea =
      document.createElement("textarea");

    textarea.value = value;

    textarea.style.position =
      "fixed";

    textarea.style.opacity = "0";

    document.body.appendChild(
      textarea
    );

    textarea.select();

    document.execCommand(
      "copy"
    );

    textarea.remove();


    showToast(
      "Copied to clipboard."
    );


  } catch {

    showToast(
      "Copy is not available."
    );
  }
}


/* =====================================================
   INTERACTIONS
===================================================== */

function setupInteractions() {

  /* SAVE CONTACT */

  $("#saveContactButton")
    .addEventListener(
      "click",
      saveContact
    );


  $("#mobileSaveContact")
    .addEventListener(
      "click",
      saveContact
    );


  /* SHARE PROFILE */

  $("#shareProfileButton")
    .addEventListener(
      "click",
      shareProfile
    );


  $("#shareProfileTop")
    .addEventListener(
      "click",
      shareProfile
    );


  /* BUSINESS CARD */

  $("#downloadCardButton")
    .addEventListener(
      "click",
      downloadExistingBusinessCard
    );


  $("#shareCardButton")
    .addEventListener(
      "click",
      shareExistingBusinessCard
    );


  /* COPY BUTTONS */

  document
    .querySelectorAll(
      "[data-copy-target]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          async event => {

            /*
              Stop the surrounding
              phone/email link.
            */

            event.preventDefault();

            event.stopPropagation();


            const target =
              document.getElementById(
                button.dataset.copyTarget
              );


            if (
              target &&
              target.textContent
            ) {

              await copyText(
                target.textContent
              );
            }
          }
        );
      }
    );


  /* READ MORE */

  const aboutCard =
    document.querySelector(
      ".about-panel"
    );

  const readMore =
    $("#readMoreButton");


  requestAnimationFrame(
    () => {

      const description =
        $("#description");


      if (
        description.scrollHeight >
        description.clientHeight + 8
      ) {

        readMore.hidden = false;
      }
    }
  );


  readMore.addEventListener(
    "click",
    () => {

      const expanded =
        aboutCard.classList.toggle(
          "expanded"
        );


      readMore.innerHTML =
        expanded
          ? "Show Less <span>↑</span>"
          : "Read More <span>→</span>";
    }
  );
}


/* =====================================================
   PAGE LOAD
===================================================== */

renderProfile(
  businessProfile
);

setupInteractions();
