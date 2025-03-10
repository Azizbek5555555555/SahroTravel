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
    none7: 'Hotel',
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

    hot1: 'Book your accommodation in Uzbekistan at the best price! Most hotels in Uzbekistan are located near historical sites, the airport and the railway stations. There are hundreds of recommended hotels in Uzbekistan for leisure and business travelers, from budget to luxury. Here you can book any hotel in any city at the best price! We guarantee cheaper prices than Booking.com, Expedia, Agoda, etc.',
    hot2: 'Request for tour',
    hot3: 'Smoking All accommodation will be reserved as non-smoking rooms unless the client specifically requests a smoking room. Confirmation is subject to hotel availability. Payments For all contracted services, a certain amount of prepayment is required to hold the booking on a confirmed basis and the remaining balance can be paid either before your departure from your country or upon your arrival in Uzbekistan, but in any case before the commencement of the services. An agreement will be sent to the client along with the payment instructions. If you do not pay your balance by the agreed date, the Company reserves the right to cancel your booking or collect any outstanding amounts. All payments to SARBON TOURS should be free of bank charges and credit card transaction surcharges. SARBON TOUR is not responsible for any fees charged or collected by third parties and/or financial institutions payable by the Client as a result of credit card or other payment transactions related to the purchase of a tour and will not refund or repay any fees charged by such third parties in connection with payments made by Clients to SARBON TOURS. Cancellation Policy You may cancel your booking at any time provided you notify the Company in writing. All cancellations must be made by the person who submitted the booking form. Cancellations will incur the following fees: 30 days or more before departure - 10% of the booking cost 15-29 days before departure - 20% of the booking cost 1-14 days before departure - 50% of the booking cost',

    
    
    




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisepakete',
    none5: 'Preise für Reisepakete',
    none6: 'Zugang',
    none7: 'Hotel',
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

    hot1: 'Buchen Sie Ihre Unterkunft in Usbekistan zum besten Preis! Die meisten Hotels in Usbekistan befinden sich in der Nähe historischer Stätten, des Flughafens und der Bahnhöfe. Es gibt Hunderte empfehlenswerter Hotels in Usbekistan für Urlauber und Geschäftsreisende, von günstig bis luxuriös. Hier können Sie jedes Hotel in jeder Stadt zum besten Preis buchen! Wir garantieren günstigere Preise als Booking.com, Expedia, Agoda usw.',
    hot2: 'Anfrage für Tour',
    hot3: 'Rauchen Alle Unterkünfte werden als Nichtraucherzimmer reserviert, es sei denn, der Kunde verlangt ausdrücklich ein Raucherzimmer. Die Bestätigung hängt von der Verfügbarkeit des Hotels ab. Zahlungen Für alle vertraglich vereinbarten Dienstleistungen muss eine bestimmte Vorauszahlung geleistet werden, um die Buchung auf bestätigter Basis zu halten, und der Restbetrag kann entweder vor Ihrer Abreise aus Ihrem Land oder bei Ihrer Ankunft in Usbekistan, jedoch auf jeden Fall vor Beginn der Dienstleistungen, bezahlt werden. Zusammen mit den Zahlungsanweisungen wird dem Kunden eine Vereinbarung zugesandt. Wenn Sie Ihren Restbetrag nicht bis zum vereinbarten Zeitpunkt bezahlen, behält sich das Unternehmen das Recht vor, Ihre Buchung zu stornieren oder ausstehende Beträge einzufordern. Alle Zahlungen an SARBON TOURS sollten frei von Bankgebühren und Kreditkartentransaktionszuschlägen sein. SARBON TOUR ist nicht verantwortlich für Gebühren, die von Dritten und/oder Finanzinstituten erhoben oder eingezogen werden und vom Kunden als Folge von Kreditkarten- oder anderen Zahlungstransaktionen im Zusammenhang mit dem Kauf einer Tour zu zahlen sind, und wird keine Gebühren zurückerstatten oder zurückzahlen, die von solchen Dritten im Zusammenhang mit Zahlungen von Kunden an SARBON TOURS erhoben werden. Stornierungsbedingungen Sie können Ihre Buchung jederzeit stornieren, sofern Sie das Unternehmen schriftlich benachrichtigen. Alle Stornierungen müssen von der Person vorgenommen werden, die das Buchungsformular eingereicht hat. Bei Stornierungen werden folgende Gebühren erhoben: 30 Tage oder mehr vor Abreise – 10 % der Buchungskosten 15-29 Tage vor Abreise – 20 % der Buchungskosten 1-14 Tage vor Abreise – 50 % der Buchungskosten',

    
    

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









