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
    none7: 'Railways',
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

    rail1: 'The state-owned railway company "Uzbekistan Airways" is one of the largest in the Central Asian region. It was founded in 1994. The company acquired assets and rolling stock that belonged to the territory of Uzbekistan, the former Central Asian Railway (also called the Trans-Caspian Railway). The Central Asian Railway was the main transport route in Uzbekistan, connecting Bukhara and Samarkand in the south with the capital in the northeast. The line also has two main branches leading to other parts of the country: one branch runs southeast to Termez and the other north, serving the Fergana Valley cities of Angren, Andijan, Fargana and Namangan.',
    rail2: 'Currently, the railways of Uzbekistan fully meet the needs of the country in the field of freight and passenger transportation. Currently, Uzbekistan has an extensive network of public railway lines, 3,986 kilometers long. The railway lines are constantly being repaired and reconstructed. More than 16 million passengers are transported annually. Uzbek railways take an active part in international passenger and freight transportation.',
    rail3: 'The Kungrad-Beynau-Aktau railway line, which leads to the Kazakh port of Aktau and further through Russia to European countries, is extremely important. This is the only direct connection from Central Asia to Europe. This main railway line gained even more importance after the Caucasus-Crimea railway ferry was opened in 2004, which is the shortest connection between southern Russia and Central Asia with Ukraine and Central Europe.',
    rail4: 'Due to the growing popularity of tourism on the Silk Road, the so-called Central Asian Transport Corridor, which connects countries such as Kazakhstan, Kyrgyzstan, Uzbekistan, Turkmenistan, Iran and Turkey by rail, is of particular importance. A significant part of this route runs through the territory of Uzbekistan - the "Golden Section of the Great Silk Road".',
    rail5: 'Train in Uzbekistan Among the various railway journeys along the Silk Road, the railway journey “The Silk Road from the train window” is particularly interesting. As is well known, the Great Silk Road began in the capital of the ancient city of Xian in China, reached Dunhuang, and then split into two main branches that crossed the Tarim Basin. The northern branch passed through Xinjiang, crossed the Tien Shan Mountains, passed through Semirechye (southeastern part of present-day Kazakhstan) and reached Chach – Tashkent. From there it crossed the Syr Darya River, then passed through the Jizzak steppe to Samarkand and further to Bukhara. From Bukhara, the road split into two main routes. One of them led north to Khorezm, the steppes of the Caspian coast and Russia. Another branch stretched southwest through Margiana and Khorasan to Persia and further to Asia Minor and the Levant. The route of the new train journey practically follows the tracks of the old caravans. The departure is from Druzba station on the border between China and Kazakhstan.',
    rail6: 'To make the journey on board as pleasant as possible, the train offers passengers comfort, courtesy and quality service. Each compartment has two large baby cots, an armchair, a wardrobe, bathrobes and slippers, air conditioning, a radio, a TV, a CD stereo cassette receiver, a DVD player, Internet access, a call button for the driver, a small table and luggage racks. Each compartment is adjacent to a bathroom with a sink, shower and toilet. The tourist train also has two dining cars, a kitchen car, a saloon car, a medical station, service and maintenance cars and sometimes a shower car. Tourists are accompanied by multilingual guides and qualified train staff.',
    rail7: 'Local rail travel has gained a lot of popularity in recent years. Since 2004, an electric high-speed train Registan, introduced by Uzbek Railways, has been running between Tashkent and Samarkand. However, since 2011, the high-speed train AV-E25 Afrosiab of Uzbek Railways has been running between these cities. The train leaves Tashkent at 7:00 am and returns in the evening. Afrosiab reaches a speed of up to 250 km/h, thus covering the distance between the two cities in 1.5 hours. From the platform of Tashkent railway station, the train departs smoothly and almost silently. The carriages are equipped with comfortable compartment tables, computers and video systems with monitors, as well as air conditioning that keeps the temperature in the passenger carriage at 22 degrees Celsius all year round. Wide panoramic windows allow passengers to fully enjoy the Central Asian landscapes unfolding behind the windows',
    rail8: 'Since 2005, another legendary city, Holy Bukhara, has been connected to the countrys capital by a fast Sharq train, which covers the route in 8 hours. In terms of comfort, the business and economy class passenger carriages of the Sharq train are in no way inferior to the Afrosiab express train.',
    rail9: 'Railway journeys along the Silk Road will forever remain in the hearts and memories of travelers; they provide a unique opportunity to immerse yourself in the fascinating history and culture of the most attractive ancient cities of Uzbekistan and explore their magnificent monuments.',


    




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisepakete',
    none5: 'Preise für Reisepakete',
    none6: 'Zugang',
    none7: 'Eisenbahnen',
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
    look7: 'Pakete',
    look8: 'Kirgisistan',
    look9: 'Tadschikistan',
    look10: 'Turkmenistan',
    look11: 'Usbekistan',
    look12: 'Kasachstan',

    rail1: 'Die staatliche Eisenbahngesellschaft „Uzbekistan Airways“ ist eine der größten in der zentralasiatischen Region. Sie wurde 1994 gegründet. Das Unternehmen erwarb Vermögenswerte und Fahrzeuge, die zum Territorium Usbekistans gehörten, der ehemaligen Zentralasiatischen Eisenbahn (auch Transkaspische Eisenbahn genannt). Die Zentralasiatische Eisenbahn war die Hauptverkehrsroute in Usbekistan und verband Buchara und Samarkand im Süden mit der Hauptstadt im Nordosten. Die Linie hat auch zwei Hauptzweige, die in andere Teile des Landes führen: Ein Zweig verläuft südöstlich nach Termez und der andere nach Norden und bedient die Städte des Fergana-Tals Angren, Andischan, Fargana und Namangan.',
    rail2: 'Derzeit erfüllen die Eisenbahnen Usbekistans die Bedürfnisse des Landes im Bereich des Güter- und Personentransports vollständig. Derzeit verfügt Usbekistan über ein 3.986 Kilometer langes ausgedehntes Netz öffentlicher Eisenbahnlinien. Die Eisenbahnlinien werden ständig repariert und rekonstruiert. Jährlich werden mehr als 16 Millionen Passagiere befördert. Die usbekischen Eisenbahnen nehmen aktiv am internationalen Personen- und Gütertransport teil.',
    rail3: 'Die Eisenbahnlinie Kungrad-Beynau-Aktau, die zum kasachischen Hafen Aktau und weiter über Russland in europäische Länder führt, ist äußerst wichtig. Dies ist die einzige direkte Verbindung von Zentralasien nach Europa. Diese Haupteisenbahnlinie gewann noch mehr an Bedeutung, nachdem 2004 die Eisenbahnfähre Kaukasus-Krim eröffnet wurde, die die kürzeste Verbindung zwischen Südrussland und Zentralasien mit der Ukraine und Mitteleuropa darstellt.',
    rail4: 'Aufgrund der wachsenden Beliebtheit des Tourismus auf der Seidenstraße kommt dabei dem sogenannten zentralasiatischen Transportkorridor eine besondere Bedeutung zu, der Länder wie Kasachstan, Kirgisistan, Usbekistan, Turkmenistan, Iran und die Türkei per Bahn verbindet. Ein bedeutender Teil dieser Route verläuft durch das Gebiet Usbekistans – der „Goldene Abschnitt der Großen Seidenstraße“.',
    rail5: 'Zug in Usbekistan Unter den verschiedenen Bahnreisen entlang der Seidenstraße ist die Bahnreise „Die Seidenstraße aus dem Zugfenster“ besonders interessant. Wie allgemein bekannt ist, begann die Große Seidenstraße in der Hauptstadt der antiken Stadt Xian in China, erreichte Dunhuang und teilte sich dann in zwei Hauptzweige, die das Tarimbecken durchquerten. Der nördliche Zweig durchquerte Xinjiang, überquerte das Tien Shan-Gebirge, durchquerte Semirechye (südöstlicher Teil des heutigen Kasachstan) und erreichte Chach – Taschkent. Von dort überquerte er den Fluss Syr Darya, führte dann durch die Jizzak-Steppe nach Samarkand und weiter nach Buchara. Von Buchara aus teilte sich die Straße in zwei Hauptwege. Einer von ihnen führte nach Norden nach Khorezm, in die Steppen der Kaspischen Küste und nach Russland. Ein anderer Zweig erstreckte sich südwestlich durch Margiana und Khorasan nach Persien und weiter nach Kleinasien und in die Levante. Die Route der neuen Bahnreise folgt praktisch den Spuren der alten Karawanen. Die Abfahrt erfolgt vom Bahnhof Druzba an der Grenze zwischen China und Kasachstan.',
    rail6: 'Um die Fahrt an Bord so angenehm wie möglich zu gestalten, bietet der Zug den Fahrgästen Komfort, Höflichkeit und hochwertigen Service. Jedes Abteil verfügt über zwei große Babybetten, einen Sessel, einen Kleiderschrank, Bademäntel und Hausschuhe, eine Klimaanlage, ein Radio, einen Fernseher, einen CD-Stereokassettenempfänger, einen DVD-Player, Internetzugang, eine Ruftaste für den Fahrer, einen kleinen Tisch und Gepäckablagen. An jedes Abteil grenzt ein Badezimmer mit Waschbecken, Dusche und Toilette. Der Touristenzug verfügt außerdem über zwei Speisewagen, einen Küchenwagen, einen Salonwagen, eine Krankenstation, Service- und Wartungswagen und manchmal einen Duschwagen. Touristen werden von mehrsprachigen Reiseleitern und qualifiziertem Zugpersonal begleitet.',
    rail7: 'Lokale Bahnreisen haben in den letzten Jahren stark an Popularität gewonnen. Seit 2004 verkehrt zwischen Taschkent und Samarkand ein von der usbekischen Eisenbahn eingeführter elektrischer Schnellzug Registan. Seit 2011 verkehrt zwischen diesen Städten jedoch der Hochgeschwindigkeitszug AV-E25 Afrosiab der usbekischen Eisenbahn. Der Zug verlässt Taschkent um 7:00 Uhr und kehrt abends zurück. Afrosiab erreicht eine Geschwindigkeit von bis zu 250 km/h und legt so die Strecke zwischen den beiden Städten in 1,5 Stunden zurück. Vom Bahnsteig des Taschkenter Bahnhofs fährt der Zug sanft und nahezu geräuschlos ab. Die Waggons sind mit bequemen Abteiltischen, Computern und Videosystemen mit Monitoren sowie einer Klimaanlage ausgestattet, die die Temperatur im Passagierwaggon das ganze Jahr über bei 22 Grad Celsius hält. Breite Panoramafenster ermöglichen es den Passagieren, die zentralasiatischen Landschaften, die sich hinter den Fenstern entfalten, in vollen Zügen zu genießen',
    rail8: 'Seit 2005 ist eine weitere legendäre Stadt, das Heilige Buchara, durch einen schnellen Sharq-Zug mit der Hauptstadt des Landes verbunden, der die Strecke in 8 Stunden zurücklegt. In puncto Komfort stehen die Business- und Economy-Class-Personenwagen des Sharq-Zuges dem Afrosiab-Expresszug in nichts nach.',
    rail9: 'Die Eisenbahnreisen entlang der Seidenstraße werden für immer im Herzen und Gedächtnis der Reisenden bleiben; sie bieten eine einzigartige Gelegenheit, in die faszinierende Geschichte und Kultur der attraktivsten antiken Städte Usbekistans einzutauchen und ihre prächtigen Monumente zu erkunden.',
    


    

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









