// ---------- Language Switch ----------

const urduBtn = document.getElementById("urduBtn");
const englishBtn = document.getElementById("englishBtn");
const translatableElements = document.querySelectorAll("[data-ur][data-en]");

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    document.body.dir = lang === "ur" ? "rtl" : "ltr";

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