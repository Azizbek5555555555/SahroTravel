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
    none7: 'KAZAKHSTAN "A GIANT OF CENTRAL ASIA"',
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

   
    kazak1: 'Dear guests,',
    kazak2: 'The “AVENTURA” TEAM would like to draw your attention to the next destination, which is no less exciting place on your Central Asian itinerary and is considered a giant of this region, which borders two more giants, Russia on one side and China on the other. We tell you about Kazakhstan, the centuries-old origin of Central Asias nomadic tribes. Today it is quite a modern and leading country in the region. Central Asias largest and most influential nation has gained worldwide recognition for its oil industry and progressive aspirations, and its tourist attractions deserve the same recognition. The best place for foreign travelers is the southern former capital Almaty, which should be considered for your next stop in Kazakhstan for several reasons. The Almaty region alone offers cultural and natural entertainment, so many visitors never get beyond this point. The former capital, Almaty, is full of theme parks, bazaars, shopping malls and museums, while the surrounding mountains offer seasonal sports, cable car rides and endless hiking opportunities.',
    kazak3: 'VISA',
    kazak4: 'Citizens of Finland do not need a visa to enter Kazakhstan. Moreover, they can stay in this country for up to 30 days without a visa and registration. Upon arrival in Kazakhstan, you only need to show your passport to enter this country! Please note that the passport must be valid for at least 6 months before the date of your visit to this country. To be on the safe side, we recommend that you take a photocopy of your passport with you on your trip.',
    kazak5: 'Currency, exchange office, cards',
    kazak6: 'The currency in Kazakhstan is the tenge, which has been in use since 1993, when it replaced the Russian ruble. The currency of Kazakhstan has the currency code KZT. The Kazakhstani tenge has been relatively stable against the US dollar since 2016. Despite this, the Kazakhstani tenge is not a strong currency. 100 tenge will cost about $0.2 in 2023. The tenge is technically divided into 100 tiyin. In fact, the tiyin coins were withdrawn from circulation in February 2001, and after 2012 they did not receive legal tender status. Today, you may find a tiyin coin on the street. In this case - if you are lucky - keep it as a souvenir! Tenge coins today have denominations of 1, 2, 5, 10, 20, 50, 100 and 200 KZT. However, the smaller denomination coins are rarely used as they are worth little. Most often you will come across 100 KZT and 200 KZT coins. The most common banknotes in circulation are 500, 1000, 2000 and 5000 KZT. Goods and various services can only be paid for in tenge, so it is better to think in advance about having some cash with you. US dollars, euros and some other currencies can be exchanged in banks and official exchange offices in Kazakhstan, where more favorable exchange rates usually apply. In large cities, The currency in Kazakhstan is the tenge, which has been in use since 1993, when it replaced the Russian ruble. The currency of Kazakhstan has the currency code KZT. The Kazakhstani tenge has been relatively stable against the US dollar since 2016. Despite this, the Kazakhstani tenge is not a strong currency. 100 tenge will cost about $0.2 in 2023. The tenge is technically divided into 100 tiyin. In fact, the tiyin coins were withdrawn from circulation in February 2001, and after 2012 they did not receive legal tender status. Today, you may find a tiyin coin on the street. In this case - if you are lucky - keep it as a souvenir! Tenge coins today have denominations of 1, 2, 5, 10, 20, 50, 100 and 200 KZT. However, the smaller denomination coins are rarely used as they are worth little. Most often you will come across 100 KZT and 200 KZT coins. The most common banknotes in circulation are 500, 1000, 2000 and 5000 KZT. Goods and various services can only be paid for in tenge, so it is better to think in advance about having some cash with you. US dollars, euros and some other currencies can be exchanged in banks and official exchange offices in Kazakhstan, where more favorable exchange rates usually apply. In big cities,',
    kazak7: 'Electricity',
    kazak8: 'Kazakhstan uses Type C and Type F plugs, so you will need an adapter. Type C has two round pins and is most likely the adapter you used when traveling in Europe. Type F has the same two round pins but has earth terminals on the side. The standard voltage is 220V and the frequency is 50Hz. Socket outlets usually accept Type C and Type F plugs. Travelers from the EU may need a power adapter.',
    kazak9: 'Time zone',
    kazak10: 'There are two time zones in Kazakhstan: UTC+5 and UTC+6. (UTC is Coordinated Universal Time.) Almaty is in the UTC+6 zone. Recently, the government of Kazakhstan abolished the time zone difference. From February 2024, there will be no time zones in this country. The time difference between Kazakhstan and the EU countries is 5 hours in winter and 4 hours in summer.',
    kazak11: 'religion',
    kazak12: 'Islam is the predominant religion in Kazakhstan. The majority of the population identifies as Sunni Muslims. However, the country is known for its religious tolerance and different religions live together peacefully.',
    kazak13: 'Language',
    kazak14: 'Kazakh and Russian are the official languages. In tourist hotels and in the big cities you will probably understand English, but a few basic Kazakh or Russian phrases are helpful.',
    kazak15: 'Eat',
    kazak16: 'When it comes to food in Kazakhstan, meat is king. In fact, Kazakhs have the most meat-rich diet in the world, even more so than the Philippines. Traditional food had to be adapted to a nomadic way of life. Things like portability, durability, and energy-rich meals were crucial to sustaining these migratory groups on long journeys across the grasslands. Even today, Kazakhstan is a meat-rich country. Sheep, cattle, and horses are staples throughout the country. And beverages like sour horse and camel milk are popular. While still rooted in traditional flavors and techniques, modern Kazakh cuisine has also absorbed influences from international culinary trends, resulting in a dynamic and evolving food scene.',
    kazak17: 'Dress',
    kazak18: 'If youre wondering what clothes to pack, remember that Kazakhstan has an extremely continental climate. In summer, temperatures can reach over 45°C! So youll need light clothing to beat the heat. In winter, temperatures can go as low as -30°C, so youll obviously need plenty of warm clothing to protect you from the cold. And no matter what the conditions are, youll need long-sleeved tops and long pants to cover your arms and legs when visiting religious sites. A hat and sunglasses will protect you from the sun in the summer months, while a light jacket will protect you from the breeze in the cooler months of the year. Contrary to popular belief, Kazakhstan is actually quite liberal. Although most of the population is Muslim, the country is not officially a Muslim country and many cultures and religions coexist and are welcome here. Kazakhs consider their homeland to be secular and modern and there are no strict rules here about how women and men should dress. However, when visiting religious sites such as mosques and mausoleums, it is recommended not to wear clothes that leave parts of the body exposed. It is advisable to wear clothes that cover the upper and lower body. There are no special dress codes for everyday life, especially in Almaty and other large cities, where people, especially young people, have complete freedom in clothing.',
    kazak19: 'Telephone communication',
    kazak20: 'The country code for Kazakhstan (E.164) is +7. If you want to call a number in Kazakhstan from anywhere in the world, please dial the international number of that country instead of the Kazakh number. This is your IDD and the country code with the area code.',
    kazak21: 'Important phone numbers',
    kazak22: 'Emergency numbers and other important telephone numbers in Kazakhstan 101 – Fire brigade 102 – Police 103 – Ambulance 112 – Rescue service 171 – International and interregional telephone service regulations 118 – Telephone directory enquiries',
    kazak23: 'Weather',
    kazak24: 'The territory of Kazakhstan stretches for more than 3000 km from west to east and almost 2000 km from north to south. The climatic peculiarities are due to the size of the country. While the temperature in the north can reach -50 degrees below zero in winter, in the south melons ripen and cotton grows in summer. The climate in Kazakhstan (except for the south) is strongly continental with average temperatures between -4 °C and -19 °C in January and between +19…+26 °C in July. In winter the temperature can drop to -45 °C and rise to +30 °C in summer.',
    kazak25: 'Holidays in 2024',
    kazak26: 'International Womens Day (March 8) Nauryz (March 21-22) Capital Day (July 6) Independence Day (December 16)',
    kazak27: 'Souvenirs',
    kazak28: 'All good things come to an end, but that doesnt mean you cant take a piece of Kazakhstan home with you after your vacation. Some of the countrys most authentic gifts include:',
    kazak29: 'BAGGAGE',
    kazak30: 'Chocolate – Sweets from the local company Rakhat (Рахат) are as colorful as they are delicious. You can even buy chocolate bars wrapped to look like the flag of Kazakhstan. “Kazakhstan” cognac – This high-quality brandy is made by the local company Bacchus and is famous in the region. Handcrafted felt items – These colorful hats, kippahs and vests are still worn by some Kazakhs today. Felt slippers – They are comfortable and easy to carry and are often decorated with traditional patterns. Wooden boxes – These hand-carved masterpieces can be a lovely souvenir of your trip. Small rugs – Rugs of every size and price range can be found in most bazaars and specialty shops.',
    
    




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisepakete',
    none5: 'Preise für Reisepakete',
    none6: 'Zugang',
    none7: 'KASACHSTAN„EIN RIESE ZENTRALASIENS“',
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

    kazak1: 'Liebe Gäste,',
    kazak2: 'Das „AVENTURA“-TEAM möchte Ihre Aufmerksamkeit auf das nächste Ziel lenken, das auf Ihrer zentralasiatischen Reiseroute kein weniger aufregender Ort ist und als Gigant dieser Region gilt, die an zwei weitere Giganten grenzt, auf der einen Seite an Russland und auf der anderen Seite an China. Wir erzählen Ihnen von Kasachstan, dem jahrhundertealten Ursprung der zentralasiatischen Nomadenstämme. Heute ist es ein ziemlich modernes und führendes Land in der Region. Zentralasiens größte und einflussreichste Nation hat weltweite Anerkennung für ihre Ölindustrie und ihre fortschrittlichen Bestrebungen erlangt, und ihre Touristenattraktionen verdienen die gleiche Anerkennung. Der beste Ort für ausländische Reisende ist die südlich gelegene ehemalige Hauptstadt Almaty, die aus mehreren Gründen für Ihren nächsten Stopp in Kasachstan in Betracht gezogen werden sollte. Allein die Region Almaty bietet kulturelle und natürliche Unterhaltung, sodass viele Besucher nie über diesen Punkt hinauskommen. Die ehemalige Hauptstadt Almaty ist voller Freizeitparks, Basare, Einkaufszentren und Museen, während die umliegenden Berge saisonale Sportarten, Seilbahnfahrten und endlose Wandermöglichkeiten bieten.',
    kazak3: 'VISUM',
    kazak4: 'Die Bürger Finnlands benötigen für die Einreise nach Kasachstan kein Visum. Außerdem können sie sich bis zu 30 Tage ohne Visum und Registrierung in diesem Land aufhalten. Bei Ihrer Ankunft in Kasachstan müssen Sie zur Einreise in dieses Land nur Ihren Reisepass vorzeigen! Bitte beachten Sie, dass der Reisepass vor dem Datum Ihres Besuchs in diesem Land noch mindestens 6 Monate gültig sein muss. Um auf Nummer sicher zu gehen, empfehlen wir Ihnen, eine Fotokopie Ihres Reisepasses mit auf die Reise zu nehmen.',
    kazak5: 'Währung, Wechselstube, Karten',
    kazak6: 'Die Währung in Kasachstan ist der Tenge, der seit 1993 im Einsatz ist und damals den russischen Rubel ersetzte. Die Währung Kasachstans hat den Währungscode KZT. Der kasachische Tenge ist seit 2016 gegenüber dem US-Dollar relativ stabil. Trotzdem ist der kasachische Tenge keine starke Währung. 100 Tenge kosten im Jahr 2023 etwa 0,2 $. Der Tenge ist technisch in 100 Tiyin unterteilt. Tatsächlich wurden die Tiyin-Münzen im Februar 2001 aus dem Verkehr gezogen und nach 2012 erhielten sie keinen Status als gesetzliches Zahlungsmittel. Heute finden Sie vielleicht eine Tiyin-Münze auf der Straße. In diesem Fall – wenn Sie Glück haben – behalten Sie sie als Souvenir! Die Tenge-Münzen haben heute die Nennwerte 1, 2, 5, 10, 20, 50, 100 und 200 KZT. Allerdings werden die Münzen mit dem kleineren Nennwert selten verwendet, da sie wenig wert sind. Am häufigsten werden Sie auf 100-KZT- und 200-KZT-Münzen stoßen. Die am häufigsten im Umlauf befindlichen Banknoten sind 500, 1000, 2000 und 5000 KZT. Waren und verschiedene Dienstleistungen dürfen nur in Tenge bezahlt werden, daher ist es besser, im Voraus darüber nachzudenken, etwas Bargeld dabei zu haben. US-Dollar, Euro und einige andere Währungen können in den Banken und offiziellen Wechselstuben in Kasachstan umgetauscht werden, wo in der Regel günstigere Wechselkurse gelten. In großen Städten sind Wechselstuben rund um die Uhr geöffnet; es gibt auch viele Geldautomaten. Bankkarten (Visa, Master Card, Euro Card) werden zur Zahlung fast in allen Einkaufszentren und Hotels in Städten akzeptiert. Wenn Sie jedoch eine Reise außerhalb der Städte planen, sollten Sie besser etwas Bargeld dabei haben. Übersteigt der ein- oder ausgeführte Bargeldbetrag 10.000 US-Dollar, unterliegt er der obligatorischen Zollanmeldung (außer Bargeld aus oder in die Mitgliedsstaaten der Eurasischen Zollunion). Wechseln Sie KEIN Geld auf der Straße oder bei einem zwielichtigen Händler auf einem der Freiluftbasare (wie dem Grünen Basar in Almaty). Geldwechsel in einer Bank in Kasachstan ist ziemlich unkompliziert und unterscheidet sich nicht von anderen Orten auf der Welt. Beachten Sie diese Punkte: Bringen Sie Ihren Reisepass mit. Ihre Banknoten in Fremdwährung müssen sauber und knackig sein und dürfen keine Abnutzungserscheinungen aufweisen. Die meisten Banken haben von 09:00 bis 17:00 Uhr geöffnet und sind am Wochenende geschlossen. Sie können Geld am Flughafen wechseln, müssen aber mit einem etwas schlechteren Wechselkurs rechnen. Reiseschecks werden in Kasachstan meist nicht akzeptiert.',
    kazak7: 'Strom',
    kazak8: 'In Kasachstan werden Stecker vom Typ C und Typ F verwendet, Sie benötigen also einen Adapter. Typ C hat zwei runde Stifte und ist höchstwahrscheinlich der Adapter, den Sie auf Reisen in Europa verwendet haben. Typ F hat die gleichen zwei runden Stifte, aber Erdungsklemmen an der Seite. Die Standardspannung beträgt 220 V und die Frequenz 50 Hz. Steckdosen akzeptieren normalerweise Stecker vom Typ C und Typ F. Reisende aus der EU benötigen möglicherweise einen Netzadapter.',
    kazak9: 'Zeitzone',
    kazak10: 'In Kasachstan gibt es zwei Zeitzonen: UTC+5 und UTC+6. (UTC ist die koordinierte Weltzeit.) Almaty liegt in der Zone UTC+6. Vor Kurzem hat die Regierung von Kasachstan den Zeitzonenunterschied abgeschafft. Ab Februar 2024 gibt es in diesem Land keine Zeitzonen mehr. Der Zeitunterschied zwischen Kasachstan und den EU-Ländern beträgt im Winter 5 Stunden und im Sommer 4 Stunden.',
    kazak11: 'Religion',
    kazak12: 'Der Islam ist die vorherrschende Religion in Kasachstan. Die Mehrheit der Bevölkerung bezeichnet sich als sunnitische Muslime. Das Land ist jedoch für seine religiöse Toleranz bekannt und verschiedene Religionen leben friedlich zusammen.',
    kazak13: 'Sprache',
    kazak14: 'Kasachisch und Russisch sind die Amtssprachen. In Touristenhotels und in den großen Städten wird man wahrscheinlich Englisch verstehen, aber ein paar grundlegende kasachische oder russische Sätze sind hilfreich.',
    kazak15: 'Essen',
    kazak16: 'Wenn es um Essen in Kasachstan geht, ist Fleisch das A und O. Tatsächlich ernähren sich die Kasachen am fleischreichsten auf der Welt, sogar mehr als die Philippinen. Die traditionelle Nahrung musste an eine nomadische Lebensweise angepasst sein. Dinge wie Tragbarkeit, Haltbarkeit und energiereiche Mahlzeiten waren entscheidend, um diese wandernden Gruppen auf langen Reisen durch das Grasland zu ernähren. Auch heute noch ist Kasachstan ein fleischreiches Land. Schafe, Rinder und Pferde sind Grundnahrungsmittel im ganzen Land. Und Getränke wie saure Pferde- und Kamelmilch sind beliebt. Die moderne kasachische Küche ist zwar immer noch in traditionellen Aromen und Techniken verwurzelt, hat aber auch Einflüsse internationaler kulinarischer Trends aufgenommen, was zu einer dynamischen und sich entwickelnden Gastronomieszene geführt hat.',
    kazak17: 'Kleid',
    kazak18: 'Wenn Sie sich fragen, welche Kleidung Sie mitnehmen sollen, denken Sie daran, dass in Kasachstan ein extrem kontinentales Klima herrscht. Im Sommer können die Temperaturen über 45 °C erreichen! Sie benötigen daher leichte Kleidung, um die Hitze zu überstehen. Im Winter können die Temperaturen bis zu -30 °C betragen. Sie benötigen also natürlich ausreichend warme Kleidung, um sich vor der Kälte zu schützen. Und egal, wie die Bedingungen sind, Sie benötigen langärmelige Oberteile und lange Hosen, um Ihre Arme und Beine zu bedecken, wenn Sie religiöse Stätten besuchen. Ein Hut und eine Sonnenbrille schützen Sie in den Sommermonaten vor der Sonne, während eine leichte Jacke Sie in den kühleren Monaten des Jahres vor der Brise schützt. Entgegen der landläufigen Meinung ist Kasachstan eigentlich recht liberal. Obwohl der Großteil der Bevölkerung Muslime sind, ist das Land offiziell kein muslimisches Land und viele Kulturen und Religionen koexistieren und sind hier willkommen. Die Kasachen betrachten ihre Heimat als säkular und modern und es gibt hier keine strengen Regeln, wie sich Frauen und Männer kleiden sollen. Beim Besuch religiöser Stätten wie Moscheen und Mausoleen wird jedoch empfohlen, keine Kleidung zu tragen, die Teile des Körpers freilässt. Es ist ratsam, Kleidung zu tragen, die den Ober- und Unterkörper bedeckt. Es gibt keine besonderen Kleidungsvorschriften für den Alltag, insbesondere in Almaty und anderen großen Städten, wo die Menschen, vor allem junge Menschen, völlige Freiheit in der Kleidung haben.',
    kazak19: 'Telefonkommunikation',
    kazak20: ' Die Landesvorwahl für Kasachstan (E.164) lautet +7. Wenn Sie von irgendwo auf der Welt eine Nummer in Kasachstan anrufen möchten, wählen Sie bitte die internationale Nummer dieses Landes anstelle der kasachischen Nummer. Das ist Ihre IDD und die Landesvorwahl mit der Ortsvorwahl. ',
    kazak21: 'Wichtige Telefonnummern',
    kazak22: 'Notrufnummern und andere wichtige Telefonnummern in Kasachstan 101 – Feuerwehr 102 – Polizei 103 – Krankenwagen 112 – Rettungsdienst 171 – Internationale und interregionale Telefondienstordnung 118 – Telefonauskunft',
    kazak23: 'Wetter',
    kazak24: 'Das Gebiet Kasachstans erstreckt sich über mehr als 3000 km von West nach Ost und fast 2000 km von Nord nach Süd. Die klimatischen Besonderheiten sind auf die Ausdehnung des Landes zurückzuführen. Während die Temperatur im Norden im Winter bis zu -50 Grad unter Null erreichen kann, reifen im Süden im Sommer Melonen und wächst Baumwolle. Das Klima in Kasachstan (mit Ausnahme des Südens) ist stark kontinental mit Durchschnittstemperaturen zwischen -4 °C und -19 °C im Januar und zwischen +19…+26 °C im Juli. Im Winter kann die Temperatur auf -45 °C fallen und im Sommer auf +30 °C steigen.',
    kazak25: 'Feiertage im Jahr 2024',
    kazak26: 'Internationaler Frauentag (8. März) Nauryz (21.-22. März) Tag der Hauptstadt (6. Juli) Unabhängigkeitstag (16. Dezember)',
    kazak27: 'Souvenirs',
    kazak28: 'Alles Schöne hat ein Ende, aber das heißt nicht, dass Sie nach Ihrem Urlaub nicht ein Stück Kasachstan mit nach Hause nehmen können. Zu den authentischsten Geschenken des Landes gehören:',
    kazak29: 'GEPÄCK',
    kazak30: 'Schokolade – Süßigkeiten der lokalen Firma Rakhat (Рахат) sind ebenso farbenfroh wie lecker. Sie können sogar Schokoriegel kaufen, die so verpackt sind, dass sie wie die Flagge von Kasachstan aussehen. „Kasachstan“-Cognac – Dieser hochwertige Brandy wird von der lokalen Firma Bacchus hergestellt und ist in der Region berühmt. Handgefertigte Filzartikel – Diese farbenfrohen Hüte, Kippas und Westen werden noch heute von einigen Kasachen getragen. Filzpantoffeln – Sie sind bequem und leicht zu transportieren und oft mit traditionellen Mustern verziert. Holzkisten – Diese handgeschnitzten Meisterwerke können ein schönes Andenken an Ihre Reise sein. Kleine Teppiche – Teppiche jeder Größe und Preisklasse finden Sie auf den meisten Basaren und in Fachgeschäften.',
    
    

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









