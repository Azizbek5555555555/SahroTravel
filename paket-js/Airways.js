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
    none7: 'Airlines',
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

    


    air1: 'Uzbekistan Airways. Uzbekistan AirlinesIn the past, caravans used the land routes of the Great Silk Road in search of the shortest possible routes. Today, the aircraft of "Uzbekistan Airways" fly along the old caravan routes, following the optimal flight routes. Regular flights began in Uzbekistan in 1932. However, there were no international flights on the schedule at that time. When Uzbekistan gained independence in 1991, the country had a diverse fleet of aircraft, all of which were made in the Soviet Union. In addition, the equipment was worn out too quickly (70%).To solve these problems, the national airline "Uzbekistan Airways" was founded in 1992.One of the strategic plans of the newly created company was to create a wide network of international air connections. The first international flights from Tashkent to various destinations in Asia were carried out by Soviet-made aircraft. At the same time, several Airbus A-310 and Boeing were purchased in Europe and the USA. These aircraft enabled Uzbekistan Airways to expand the geography of travel destinations. Today, Uzbekistan Airways flies to 40 countries around the world and has 45 offices in 25 countries',
    air2: 'DOCUMENTS',
    air3: '69 flights are operated weekly to the cities of the CIS countries, including 19 flights from Tashkent. Every week, 165 flights serve various destinations within Uzbekistan. Aircraft of Uzbekistan. Aircraft of Uzbekistan As part of the state program for the development of civil aviation, the company has replenished its aircraft fleet with the most modern and advanced airliners. For example, since January 2011, Uzbekistan Airways has removed outdated TU-154 aircraft from the airlines fleet. Now the companys technical fleet consists of 25 airliners of Western production. Among them are Boeing-767 and Boeing-757, Airbus A-310 and A-320 and RJ-85. By updating its fleet, the company strives to achieve an optimal combination of aircraft characteristics such as reliability, capacity, flight range and cost-effectiveness. Uzbekistan Airways has earned a reputation as one of the most reputable and trusted airlines. As a result of its successful work, the company was awarded the Flight Safety Foundation Diploma and the Boeing Recognition Award for the safety and reliable performance of Boeing aircraft operations over ten years.',
    air4: 'In 2005, Uzbekistan Airways received a special diploma "For outstanding achievements in the field of flight safety" from the International Aviation Safety Foundation. In 2009, the national airline of Uzbekistan successfully passed the IOSA audit developed by the International Air Transport Association (IATA). The list of standards (more than 900 names) covered all major areas of civil aviation. Uzbekistan Airways contributes to the development of international tourism, successfully cooperates with travel companies and actively participates in tourism fairs. Since, in addition to Tashkent airport, the airports of Samarkand, Bukhara, Termez and Khiva also have the status of international airports, travelers from all over the world can easily fly to these ancient cities on the Great Silk Road.',




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisetouren',
    none5: 'Informationen',
    none6: 'Zugang',
    none7: 'Fluglinien',
    none77: 'Wir stellen sicher, dass alle unsere Kunden die besten Dienstleistungen und Erfahrungen erhalten.',
    none78: 'Kontakt',
    none79: 'Nehmen Sie gerne Kontakt zu uns auf und vernetzen Sie sich mit uns!!',
    none80: 'Gulsara Str. 24, 100187 Taschkent, Usbekistan',
    none81: 'Abonnieren Sie unseren Newsletter, um weitere Updates und Neuigkeiten zu erhalten!',
    none82: 'Abonnieren',

    

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

    air1: 'Usbekistan Airways. Uzbekistan AirlinesIn der Vergangenheit nutzten die Karawanen die Landwege der Großen Seidenstraße auf der Suche nach möglichst kurzen Routen. Heute fliegen die Flugzeuge von „Uzbekistan Airways“ über die alten Karawanenwege und folgen dabei den optimalen Flugrouten. In Usbekistan begannen 1932 regelmäßige Flüge. Damals stehen jedoch keine internationalen Flüge auf dem Flugplan. Als Usbekistan 1991 seine Unabhängigkeit erlangte, verfügte das Land über eine vielfältige Flugzeugflotte, die alle in der Sowjetunion hergestellt worden waren. Darüber hinaus war die Ausrüstung zu schnell 70 % abgenutzt.Um diese Probleme zu lösen, wurde 1992 die nationale Fluggesellschaft „Uzbekistan Airways“ gegründet.Einer der strategischen Pläne des neu gegründeten Unternehmens war die Schaffung eines breiten Netzwerks internationaler Flugverbindungen. Die ersten internationalen Flüge von Taschkent zu verschiedenen Zielen in Asien wurden mit Flugzeugen sowjetischer Herstellung durchgeführt. Gleichzeitig wurden in Europa und den USA mehrere Airbus A-310 und Boeing gekauft. Diese Flugzeuge ermöglichten es „Uzbekistan Airways“, die Geographie der Reiseziele zu erweitern.Heute fliegt „Uzbekistan Airways“ 40 Länder der Welt an und verfügt über 45 Vertretungen in 25 Ländern.',
    air2: 'DOCUMENTS',
    air3: 'Wöchentlich werden 69 Flüge in die Städte der GUS-Staaten durchgeführt, darunter 19 Flüge aus Taschkent. Jede Woche bedienen 165 Flüge verschiedene Ziele innerhalb Usbekistans. Flugzeuge Usbekistans. Flugzeuge Usbekistans Im Rahmen des staatlichen Programms zur Entwicklung der Zivilluftfahrt hat das Unternehmen seine Flugzeugflotte mit den modernsten und fortschrittlichsten Verkehrsflugzeugen aufgefüllt. So hat Uzbekistan Airways seit Januar 2011 veraltete TU-154-Flugzeuge aus der Flotte der Fluggesellschaft genommen. Jetzt besteht die technische Flotte des Unternehmens aus 25 Verkehrsflugzeugen westlicher Produktion. Darunter sind Boeing-767 und Boeing-757, Airbus A-310 und A-320 und RJ-85. Durch die Aktualisierung seiner Flotte strebt das Unternehmen eine optimale Kombination von Flugzeugeigenschaften wie Zuverlässigkeit, Kapazität, Flugreichweite und Wirtschaftlichkeit an. Uzbekistan Airways hat sich als eine der renommiertesten und vertrauenswürdigsten Fluggesellschaften einen Namen gemacht. Als Ergebnis der erfolgreichen Arbeit wurde dem Unternehmen das Diplom der Flight Safety Foundation und der Boeing Recognition Award für die Sicherheit und zuverlässige Leistung des Boeing-Flugzeugbetriebs über zehn Jahre hinweg verliehen.',
    air4: 'Im Jahr 2005 erhielt Uzbekistan Airways von der International Aviation Safety Foundation ein Sonderdiplom „Für herausragende Leistungen im Bereich der Flugsicherheit“. Im Jahr 2009 bestand die nationale Fluggesellschaft Usbekistans erfolgreich das von der International Air Transport Association (IATA) entwickelte IOSA-Audit. Die Liste der Standards (mehr als 900 Namen) umfasste alle wichtigen Bereiche der Zivilluftfahrt. Uzbekistan Airways trägt zur Entwicklung des internationalen Tourismus bei, arbeitet erfolgreich mit Reiseunternehmen zusammen und nimmt aktiv an Tourismusmessen teil. Da neben dem Flughafen Taschkent auch die Flughäfen von Samarkand, Buchara, Termez und Chiwa den Status internationaler Flughäfen haben, können Reisende aus aller Welt bequem in diese alten Städte an der Großen Seidenstraße fliegen.',
    
    


    

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









