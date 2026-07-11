// ---------- Language Switch ----------

const urduBtn = document.getElementById("urduBtn");
const englishBtn = document.getElementById("englishBtn");

const heading = document.querySelector(".hero-left h1");
const product = document.querySelector(".hero-left h2");
const subtitle = document.querySelector(".hero-left p");
const orderBtn = document.querySelector(".button");

urduBtn.addEventListener("click", function () {

    document.documentElement.lang = "ur";

    heading.innerHTML = "قدرتی انداز میں جلد کی بہتر نگہداشت";

    product.innerHTML = "DermaHeal";

    subtitle.innerHTML = "ہومیوپیتھک اور ہربل پیکیج";

    orderBtn.innerHTML = "واٹس ایپ پر آرڈر کریں";

});

englishBtn.addEventListener("click", function () {

    document.documentElement.lang = "en";

    heading.innerHTML = "Natural Support For Healthy Skin";

    product.innerHTML = "DermaHeal";

    subtitle.innerHTML = "Homeopathic & Herbal Package";

    orderBtn.innerHTML = "Order on WhatsApp";

});