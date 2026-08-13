// Application logic to populate links and image from config.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONFIG === "undefined") {
    console.warn("CONFIG object not found. Using default HTML values.");
    return;
  }

  // Update Profile Image & Alt
  const profileImg = document.getElementById("profile-img");
  if (profileImg) {
    if (CONFIG.profileImage) {
      profileImg.src = CONFIG.profileImage;
      profileImg.style.display = "block";
    }
    if (CONFIG.profileAlt) {
      profileImg.alt = CONFIG.profileAlt;
    }
  }

  // Helper function to update href for elements matching data-link attribute
  const updateLinks = (linkKey, url) => {
    if (!url) return;
    const elements = document.querySelectorAll(`[data-link="${linkKey}"]`);
    elements.forEach(el => {
      if (el.tagName.toLowerCase() === "a") {
        el.href = url;
      }
    });
  };

  // Update social links
  updateLinks("whatsapp", CONFIG.whatsapp);
  updateLinks("instagram", CONFIG.instagram);
  updateLinks("linkedin", CONFIG.linkedin);
  updateLinks("meetup", CONFIG.meetup);

  // Update Email link & text display
  if (CONFIG.email) {
    const emailEls = document.querySelectorAll('[data-link="email"]');
    emailEls.forEach(el => {
      if (el.tagName.toLowerCase() === "a") {
        el.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONFIG.email)}`;
      }
      const emailTextSpan = el.querySelector(".email-text");
      if (emailTextSpan) {
        emailTextSpan.textContent = CONFIG.email;
      }
    });
  }
});
