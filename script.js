// script.js
const testimonials = [
  "I received the best home care service. Thank you!",
  "Their nurses are kind, patient, and very professional.",
  "Highly recommend for anyone needing care for elderly parents.",
  "Very fast response and the nurse assigned was top-notch.",
  "They helped my dad recover quickly after surgery. 5 stars!",
  "Compassionate care and 100% reliable.",
  "Best nursing service we've ever hired.",
  "Thank you for your support during our tough times.",
  "Professional, warm, and efficient care.",
  "Your caregivers treated my mum like family.",
  "Superb communication and well-trained staff.",
  "I trust them completely with my grandma's care.",
  "Very affordable and trustworthy.",
  "My children felt safe with their caregivers.",
  "Top-notch service, friendly and always on time.",
  "A blessing to our home. Thank you again.",
  "Their service really stands out in Ota.",
  "Truly GOD’S OWN. Thank you for everything.",
  "Lifesavers. Literally.",
  "One word: EXCELLENT."
];

const container = document.getElementById("testimonial-container");

function showTestimonials() {
  container.innerHTML = "";
  testimonials.forEach(text => {
    const div = document.createElement("div");
    div.className = "testimonial";
    div.textContent = text;
    container.appendChild(div);
  });
}

showTestimonials();