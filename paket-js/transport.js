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
    none4: 'Travel tours',
    none5: 'Information',
    none6: 'Access',
    none7: 'Transport',
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
    look7: 'Destinations',
    look8: 'Kyrgyzstan',
    look9: 'Tajikistan',
    look10: 'Turkmenistan',
    look11: 'Uzbekistan',
    look12: 'Kazakhstan',

    
    trans1: 'Our company "SAHRO TRAVEL" has the honor to offer you transportation services in Uzbekistan for our guests and tourists from the windows of new branded and modern vehicles, easily, with comfort and softness traveling along the routes of the Great Silk Road between Samarkand, Shakhrizabz, Bukhara and Khiva. The motor capabilities of CARBON TOURS meet all the necessary criteria for an excellent trip for both groups and individuals. Individual travelers can take advantage of LACETTI GLS DOHC 2010 For groups of 3 to 8 people, it is ideal to use a minivan JOYLONG or KING LONG 2018 For groups from 14 to 45 people, we offer a large bus YUTONG BUS 2015 For groups from 25 to 53 people, we offer a large bus ZHONGTONG BUS 2019 All cars are equipped with summer-winter air conditioning systems',
    trans3: 'Manufactured in:',
    trans4: 'Uzbekistan',
    trans5: 'Seating:',
    trans6: 'Capacities:',
    trans7: 'equipment:',
    trans8: 'audio system, air conditioning, TV and microphone',
    trans9: 'Founding date',
    trans10: '2. For small groups of 3-6 people, the trip is made with the minibus “HUNDAY GRAND STAREX” (2020), which is equipped with air conditioning, microphone and audio system.',
    trans11: 'Manufactured in:',
    trans12: 'South Korea',
    trans13: 'Seating:',
    trans14: 'Capacities:',
    trans15: 'equipment:',
    trans16: 'audio system, air conditioning, TV and microphone',
    trans17: 'Founding date',
    trans18: '4. YUTONG ZK6107',
    trans19: 'Manufactured in:',
    trans20: 'Seating:',
    trans21: 'Capacities:',
    trans22: 'equipment:',
    trans23: 'audio system, air conditioning, TV and microphone',
    trans24: 'Founding date:',
    trans25: 'Manufactured in:',
    trans26: 'Seating:',
    trans27: 'Capacities:',
    trans28: 'equipment:',
    trans29: 'audio system, air conditioning, TV and microphone',
    trans30: 'Founding date:',
    trans31: 'Manufactured in:',
    trans32: 'Uzbekistan',
    trans33: 'Seats:',
    trans34: 'Capacities:',
    trans35: 'Equipment:',
    trans36: 'audio system, air conditioning, TV and microphone',
    trans37: 'Founding date:',
    




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisetouren',
    none5: 'Informationen',
    none6: 'Zugang',
    none7: 'Transport',
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
    look7: 'Reiseziele',
    look8: 'Kirgisistan',
    look9: 'Tadschikistan',
    look10: 'Turkmenistan',
    look11: 'Usbekistan',
    look12: 'Kasachstan',

    trans1: 'Unser Unternehmen „SAHRO TRAVEL“ hat die Ehre, unseren Gästen und Touristen Transportdienstleistungen in Usbekistan anzubieten, und zwar aus den Fenstern neuer Marken- und moderner Fahrzeuge, die bequem, komfortabel und sanft auf den Routen der Großen Seidenstraße zwischen Samarkand, Schachrisabs, Buchara und Chiwa reisen. Die Motorkapazitäten von CARBON TOURS erfüllen alle notwendigen Kriterien für eine hervorragende Reise sowohl für Gruppen als auch für Einzelpersonen. Einzelreisende können den LACETTI GLS DOHC 2010 nutzen. Für Gruppen von 3 bis 8 Personen ist die Nutzung eines Minivans JOYLONG oder KING LONG 2018 ideal. Für Gruppen von 14 bis 45 Personen bieten wir einen großen Bus YUTONG BUS 2015 an. Für Gruppen von 25 bis 53 Personen bieten wir einen großen Bus ZHONGTONG BUS 2019 an. Alle Autos sind mit Sommer-Winter-Klimaanlagen ausgestattet.',
    trans3: 'Hergestellt in:',
    trans4: 'Usbekistan',
    trans5: 'Sitzplätze:',
    trans6: 'Kapazitäten:',
    trans7: 'Ausrüstung:',
    trans8: 'Audiosystem, Klimaanlage, Fernseher und Mikrofon',
    trans9: 'Gründungsdatum:',
    trans10: '2. Für kleine Gruppen von 3-6 Personen erfolgt die Fahrt mit dem Kleinbus „HUNDAY GRAND STAREX“ (2020), der mit Klimaanlage, Mikrofon und Audiosystem ausgestattet ist.',
    trans11: 'Hergestellt in:',
    trans12: 'Südkorea',
    trans13: 'Sitzplätze:',
    trans14: 'Kapazitäten:',
    trans15: 'Ausrüstung:',
    trans16: 'Audiosystem, Klimaanlage, Fernseher und Mikrofon',
    trans17: 'Gründungsdatum:',
    trans18: '4. YUTONG ZK6107',
    trans19: 'Hergestellt in:',
    trans20: 'Sitzplätze:',
    trans21: 'Kapazitäten:',
    trans22: 'Ausrüstung:',
    trans23: 'Audiosystem, Klimaanlage, Fernseher und Mikrofon',
    trans24: 'Gründungsdatum:',
    trans25: 'Hergestellt in:',
    trans26: 'Sitzplätze:',
    trans27: 'Kapazitäten:',
    trans28: 'Ausrüstung:',
    trans29: 'Audiosystem, Klimaanlage, Fernseher und Mikrofon',
    trans30: 'Gründungsdatum:',
    trans31: 'Hergestellt in:',
    trans32: 'Usbekistan',
    trans33: 'Sitzplätze:',
    trans34: 'Kapazitäten:',
    trans35: 'Ausrüstung:',
    trans36: 'Audiosystem, Klimaanlage, Fernseher und Mikrofon',
    trans37: 'Gründungsdatum:',

    

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









