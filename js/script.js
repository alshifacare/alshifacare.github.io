// ---------- Language Switch ----------

const urduBtn = document.getElementById("urduBtn");
const englishBtn = document.getElementById("englishBtn");
const translatableElements = document.querySelectorAll("[data-ur][data-en]");

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    document.body.dir = lang === "ur" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-en", lang === "en");
    document.body.classList.toggle("lang-ur", lang === "ur");
    document.documentElement.classList.toggle("lang-en", lang === "en");
    document.documentElement.classList.toggle("lang-ur", lang === "ur");

    translatableElements.forEach((element) => {
        const text = lang === "ur" ? element.dataset.ur : element.dataset.en;
        element.innerHTML = text;
    });

    document.title = lang === "ur"
        ? "AlShifaCare | DermaHeal Homeopathic & Herbal Package"
        : "AlShifaCare | DermaHeal Homeopathic & Herbal Package";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            lang === "ur"
                ? "DermaHeal by AlShifaCare is a Homeopathic & Herbal package containing herbal powder and homeopathic tablets. Order directly through WhatsApp anywhere in Pakistan."
                : "DermaHeal by AlShifaCare is a homeopathic and herbal package containing herbal powder and homeopathic tablets. Order directly through WhatsApp anywhere in Pakistan."
        );
    }

    urduBtn.classList.toggle("active", lang === "ur");
    englishBtn.classList.toggle("active", lang === "en");
    urduBtn.setAttribute("aria-pressed", String(lang === "ur"));
    englishBtn.setAttribute("aria-pressed", String(lang === "en"));
}

urduBtn.addEventListener("click", function () {
    applyLanguage("ur");
});

englishBtn.addEventListener("click", function () {
    applyLanguage("en");
});

applyLanguage("ur");

// ---------- Mobile Hamburger Menu ----------

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.querySelector(".menu-icon").textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after tapping a nav link or a language button
    navMenu.querySelectorAll("nav a, .language button").forEach((el) => {
        el.addEventListener("click", function () {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.querySelector(".menu-icon").textContent = "☰";
        });
    });

    // Close the menu if the person taps outside it
    document.addEventListener("click", function (event) {
        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);
        if (!clickedInsideMenu && !clickedToggle) {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.querySelector(".menu-icon").textContent = "☰";
        }
    });
}

// ---------- TikTok Contact Event Tracking ----------
document.querySelectorAll(".whatsapp-btn, .floating-whatsapp").forEach((button) => {
    button.addEventListener("click", function () {
        if (typeof ttq !== "undefined") {
            ttq.track("Contact");
        }
    });
});
