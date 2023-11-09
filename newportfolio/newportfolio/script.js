// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Add interactivity for the profile photo
const profilePhoto = document.querySelector(".profile-photo");

profilePhoto.addEventListener("mouseover", () => {
  profilePhoto.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
});

profilePhoto.addEventListener("mouseout", () => {
  profilePhoto.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
});
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Toggle the active class to expand/collapse the card
      card.classList.toggle("active");

      // Collapse other project cards when one is expanded
      projectCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("active");
        }
      });
    });
  });
});
// Add colorful background animation to the contact section
const contactSection = document.getElementById("contact");

contactSection.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX / window.innerWidth) * 10;
  const moveY = (e.clientY / window.innerHeight) * 10;

  contactSection.style.backgroundPosition = `${moveX}% ${moveY}%`;
});
// Add interactivity to tab switching
const educationItems = document.querySelectorAll(".education-item");
const educationDetails = document.querySelectorAll(".education-details");

educationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove active class from all items
    educationItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });

    // Add active class to clicked item
    item.classList.add("active");

    // Hide all education details
    educationDetails.forEach((detail) => {
      detail.style.display = "none";
    });

    // Display corresponding education detail
    educationDetails[index].style.display = "block";
  });
});
// Add an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  // Add a hover effect using mouseenter and mouseleave events
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "#1e90ff";
      card.style.color = "#fff";
    });

    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "#fff";
      card.style.color = "#333";
    });
  });
});
// JavaScript for the photo display section
// ...

// Lightbox functionality
function openLightbox(imageSrc, caption) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");

  lightboxImage.src = imageSrc;
  lightboxCaption.textContent = caption;

  lightbox.style.display = "block";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Attach click event to each gallery item
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imageSrc = item.querySelector("img").src;
    const caption = item.querySelector("img").getAttribute("data-caption");
    openLightbox(imageSrc, caption);
  });
});
