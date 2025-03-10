'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



function setupDropdowns() {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      this.setAttribute("open", "true");
    });

    dropdown.addEventListener("mouseleave", function () {
      this.removeAttribute("open");
    });
  });
}

// Sahifa yuklanganda dropdownlar ishlashi uchun
document.addEventListener("DOMContentLoaded", setupDropdowns);

// SPA (Single Page Application) ishlatilsa yoki dinamik yuklash bo‘lsa, ushbu kodni qayta ishga tushirish kerak
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    setupDropdowns();
  }
});




document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});










document.addEventListener('DOMContentLoaded', function () {
  const flagButtons = document.querySelectorAll('.flag-button');

  // Store translations
  const translations = {
      en: {


    none1: 'Our contacts:',
    none2: 'home',
    none3: 'About Us',
    none4: 'Travel packages',
    none5: 'Travel package prices',
    none6: 'Access',
    none7: 'UZBEKISTAN "PEARL OF THE GREAT SILK ROAD"',
    none77: 'We ensure that all our customers receive the best services and experiences.',
    none78: 'contact',
    none79: 'Please feel free to contact us and network with us!!',
    none80: 'Gulsara St. 24, 100187 Tashkent, Uzbekistan',
    none81: 'Subscribe to our newsletter to receive more updates and news! !!',
    none82: 'Subscribe',




    look1: 'Our service',
    look2: 'Visa',
    look3: 'Hotel',
    look4: 'Transport',
    look5: 'Airlines',
    look6: 'Railways',
    look7: 'Packages',
    look8: 'Kyrgyzstan',
    look9: 'Tajikistan',
    look10: 'Turkmenistan',
    look11: 'Uzbekistan',
    look12: 'Kazakhstan',




   




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisepakete',
    none5: 'Preise für Reisepakete',
    none6: 'Zugang',
    none7: 'USBEKISTAN„PERLE DER GROSSEN SEIDENSTRASSE“',
    none77: 'Wir stellen sicher, dass alle unsere Kunden die besten Dienstleistungen und Erfahrungen erhalten.',
    none78: 'Kontakt',
    none79: 'Nehmen Sie gerne Kontakt zu uns auf und vernetzen Sie sich mit uns!!',
    none80: 'Gulsara Str. 24, 100187 Taschkent, Usbekistan',
    none81: 'Abonnieren Sie unseren Newsletter, um weitere Updates und Neuigkeiten zu erhalten!',
    none82: 'Abonnieren:',

    

    look1: 'Unser Service',
    look2: 'Visum',
    look3: 'Hotel',
    look4: 'Transport',
    look5: 'Fluglinien',
    look6: 'Eisenbahnen',
    look7: 'Pakete',
    look8: 'Kirgisistan',
    look9: 'Tadschikistan',
    look10: 'Turkmenistan',
    look11: 'Usbekistan',
    look12: 'Kasachstan',

    

    
    

    

      }
  };

  // Function to apply translation
  function applyTranslation(language) {
      const translation = translations[language];

      if (!translation) return;

      Object.keys(translation).forEach(key => {
          let element = document.getElementById(key);
          if (element) {
              element.textContent = translation[key];
          }
      });
  }

  // Check saved language or default to English
  let selectedLanguage = localStorage.getItem('language') || 'en';
  applyTranslation(selectedLanguage);

  // Update language when button is clicked
  flagButtons.forEach(button => {
      button.addEventListener('click', function () {
          let newLanguage = this.getAttribute('data-language');
          localStorage.setItem('language', newLanguage);
          applyTranslation(newLanguage);
      });
  });
  console.log(flagButtons); // Konsolda tekshirib ko'ring

});









