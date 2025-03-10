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
    none7: 'TURKMENISTAN "A COUNTRY OF A THOUSAND SECRETS"',
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



    tajik1: 'Dear guests,',
    tajik2: 'The “AVENTURA” TEAM has the honor to introduce you to another mysterious country in Central Asia, which is called Turkmenistan. You must definitely discover this very ancient country yourself. You will remember this trip for a long time and gain a lot of positive emotions and impressions that will remain in your memory for a long time.',
    tajik3: 'Turkmenistan is a very interesting country for travelers with many sights and monuments from ancient times to the present day, unique natural sites, unique culture and traditions. A trip to Turkmenistan can surprise and delight even the most experienced tourist. We offer you practical information to help you prepare your trip.',
    tajik4: 'VISA',
    tajik5: 'Tourists can enter the territory of Turkmenistan only with an entry visa. To obtain a tourist visa to Turkmenistan, you need visa support (invitation). The Immigration Service of Turkmenistan will consider the invitation application within 3 weeks. A visa can be obtained at the Embassy of Turkmenistan or at the land border if visa support is available. In addition, a 10-day visa can be obtained upon arrival at the international airport in Ashgabat.',
    tajik6: 'booking',
    tajik7: 'A trip to Turkmenistan is not so easy to plan and carry out on your own, so it is best to use the services of a competent travel agency. Before traveling to Turkmenistan, we recommend that you book a hotel or book a tour in advance. This will avoid problems with accommodation and organizing a route through Turkmenistan and save you time',
    tajik8: 'Registration',
    tajik9: 'Upon arrival in Turkmenistan, every foreign citizen must receive an immigration card, which indicates the hotels in which the tourist stayed. Every foreigner arriving in Turkmenistan must register with the Ministry of Tourism and Sports of the Republic of Turkmenistan within three working days (not counting the day of entry).',
    tajik10: 'Accommodation',
    tajik11: 'There is a wide choice of 4 and 5 star hotels in large cities of Turkmenistan such as Ashgabat, Dashoguz, Turkmenabad and Turkmenbashi. In other cities and outside the capital there are mainly 2 and 3 star hotels. Regardless of the category of the hotel, we recommend that you check when booking if there is hot water in the shower and if your room has a separate bathroom.',
    tajik12: 'currency, exchange office, plastic cards',
    tajik13: 'The currency of Turkmenistan is the manat (TMM), which is equal to 100 tenge. Paper money is in circulation in denominations of 10,000, 5,000, 1,000, 500, 100, 50, 10, 5 and 1 manat. Coins in denominations of 1,000, 500, 50, 20, 10, 5 and 1 tenge. The national currency is the only legal tender. The best place to exchange money is in banks, hotels and exchange offices. Banks are open Monday to Friday from 9:30 a.m. to 5:30 p.m. The easiest place to exchange US dollars is. Most exchange offices do not accept banknotes issued before 1996, as well as torn and old bills. It is advisable to take a large number of small dollar bills with you. There are ATMs in Ashgabat where you can withdraw money using a Visa card. Import and export of local currency is prohibited for foreigners. There are no restrictions on the import of foreign currency, but its quantity must be declared in the declaration. You can export an amount not exceeding the amount indicated in the declaration. To avoid problems at customs, it is advisable to keep receipts for currency exchange and receipts from shops. Credit cards are accepted only at the Vnesheconombank branch, in some large hotels and restaurants in Ashgabat, as well as at the branches of airlines. It is not possible to pay with them outside Ashgabat. Travelers checks can be exchanged only at Vnesheconombank and the National Bank of Turkmenistan in Ashgabat.',
    tajik14: 'Eat',
    tajik15: 'The basis of Turkmen cuisine is meat dishes. In different regions of the republic, lamb or camel meat, meat of mountain goats, quails and pheasants are used. Traditionally, Turkmens hardly use beef. The meat is fried in its own fat or on a spit over coals, and often baked in a clay oven - tandoor. For centuries, the Teke Turkmens have had a unique method of preserving meat - garyn. Small pieces of meat and lard are tightly placed in the stomach of a sheep or goat and rubbed with salt and red pepper. The sewn-up stomach is buried in hot sand for a day, and in the evening it is dug out and tied to a high stake so that the night breeze blows on it. This procedure is repeated several times. Meat dried in this way acquires a special taste and can be stored for a long time. On a hot afternoon, the guest will definitely be treated to chal, perhaps the most exotic Turkmen drink. To prepare chala, the housewife mixes warm, fresh camel milk with a special starter and leaves it in the shade for two days, stirring regularly and skimming off the fatty foam - agaran. The sour-tasting, slightly carbonated chal perfectly quenches thirst. Tipping is accepted only in large international hotels and high-class restaurants (usually up to 10% of the bill).',
    tajik16: 'Dress code',
    tajik17: 'There are no specific dress codes for everyday life, especially in Ashgabat and other big cities, where people, especially young people, have complete freedom in choosing what to wear. You can find women in traditional Islamic dress, but this is often a matter of personal choice rather than an obligation. In some areas, it is better not to wear shorts; the same rule applies when visiting religious sites, mosques, mausoleums, etc.',
    tajik18: 'Telephone communication',
    tajik19: 'The dialing code of Turkmenistan is +993, Ashgabat +99312. If you want to call Finland, dial 810 (international dialing code) + 358 (Finlands dialing code) + subscribers phone number. For international calls, you need to buy a phone card. For calls to Finland, we recommend purchasing a card with the highest denomination. A call from a hotel will cost significantly more.',
    tajik20: 'Important phone numbers',
    tajik21: 'Ambulance and Unified Rescue Service – 03, Police – 02, State Committee for Tourism and Sports of Turkmenistan: Tel.: (12) 354-777, 397-606, 397-771, 390-065 or 396-740, Information Desk – 222222 (Ashgabat)',
    tajik22: 'Electricity',
    tajik23: 'The mains voltage is 220 V, 50 Hz. The standard sockets are of the Eastern European type with two round pins without earthing.',
    tajik24: 'Weather',
    tajik25: 'The climate of Turkmenistan, which consists mainly of plains and deserts, is continental and dry. Milder weather prevails in mountainous regions and on the shores of the Caspian Sea, which forms the western border of the country. The lowest temperature of -32 °C has been recorded in desert regions in winter, the highest of up to +50 °C in summer. Even in summer, night temperatures in deserts can drop to +14-18 °C, resulting in temperature fluctuations of up to 30 °C.',
    tajik26: 'Winters in Turkmenistan are rather mild – temperature remains at around +8-9° C, with some light frosts falling to -15° C. Most of precipitation falls during this period. Summing up, the best time for Turkmenistan trip is the period of March-April and October-November. May and September as well as winter months can be relatively comfortable too. Summers are not recommended for traveling to Turkmenistan.',
    tajik27: 'Religion',
    tajik28: 'Glaubensrichtungen. Beim Besuch einer Moschee oder Kirche müssen Frauen leichte Mäntel (so dass kein Körperteil unbedeckt ist) und ein Kopftuch tragen. Männer, die eine Kirche betreten, müssen ihren Hut abnehmen. Eine weitere zu beachtende Sache ist der Besuch von Friedhöfen. Ausländer fotografieren gerne Gräber, weil sie ganz anders sind als die, die sie sonst sehen. Da sie alle auf dem Land liegen, mögen es die Einheimischen nicht, wenn Fremde dort zu lange herumlaufen, laut miteinander reden und lachen. Es ist offensichtlich, dass sie das beleidigen könnte, weil sie nicht wollen, dass die Geister ihrer Familienmitglieder belästigt werden. Es ist in Ordnung, w  Faiths. When visiting a mosque or church, women must wear light coats (so that no part of the body is uncovered) and a headscarf. Men entering a church must remove their hats. Another thing to note is visiting cemeteries. Foreigners like to take photos of graves because they are very different from the ones they usually see. Since they are all in the countryside, locals do not like strangers walking around there for too long, talking loudly and laughing. It is obvious that this could offend them because they do not want the spirits of their family members to be disturbed. It is OK to',
    tajik29: 'Holidays in 2024',
    tajik30: 'December 31st – January 1st, Sun.-Mon. New Years Day, March 8th, Fri. – International Womens Day, March 21st-22nd, Thurs.-Fri. – Navruz, date varies – Oraza Bayram, May 18th, Sat. – Constitution and National Flag Day, date varies – Kurban Bayram, September 27th, Fri. – Independence Day, October 6th, Sun. – Remembrance Day, December 12th, Thurs. – International Neutrality Day',
    tajik31: 'Water',
    tajik32: 'Do not be afraid of drinking tea/coffee, eating soup etc. Concerning plain water, we always give to our client’s bottled mineral water, which is safe and very good for the health. However, it is not recommended to drink tap water.',
    tajik33: 'Souvenirs',
    tajik34: 'Carpets are undoubtedly the most popular Turkmen items in the world. The mistresses make them exclusively by hand, using tools and looms that have not changed for hundreds of years. The intricacy of the ornaments on Turkmen carpets is impressive! When you look at them, you see a three-dimensional picture. The only weak point of a souvenir of this kind is its price. Turkmens also know the value of their horses, so you cannot take an Akhal-Teke horse out of the country, no matter how much you pay for it. However, in stores you can find numerous statuettes depicting this horse and horses of other species. Made of wood or clay, one of them will surely decorate your desk.'
    

   




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisepakete',
    none5: 'Preise für Reisepakete',
    none6: 'Zugang',
    none7: 'TURKMENISTAN„EIN LAND TAUSEND GEHEIMNISSE“',
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

    

    tajik1: 'Liebe Gäste,',
    tajik2: 'Das „AVENTURA“-TEAM hat die Ehre, Ihnen ein weiteres geheimnisvolles Land in Zentralasien vorzustellen, das Turkmenistan heißt. Sie müssen dieses sehr alte Land unbedingt selbst entdecken. Sie werden sich noch lange an diese Reise erinnern und viele positive Emotionen und Eindrücke gewinnen, die Ihnen lange in Erinnerung bleiben werden.',
    tajik3: 'Turkmenistan ist für Reisende ein sehr interessantes Land mit vielen Sehenswürdigkeiten und Denkmälern aus der Antike bis in die Gegenwart, einzigartigen Naturschauplätzen, einzigartiger Kultur und Traditionen. Eine Reise nach Turkmenistan kann selbst den erfahrensten Touristen überraschen und begeistern. Wir bieten Ihnen praktische Informationen, die Ihnen bei der Vorbereitung Ihrer Reise helfen.',
    tajik4: 'VISUM',
    tajik5: 'Touristen können das Territorium Turkmenistans nur mit einem Einreisevisum betreten. Um ein Touristenvisum für Turkmenistan zu erhalten, benötigen Sie eine Visaunterstützung (Einladung). Die Einwanderungsbehörde Turkmenistans prüft den Einladungsantrag innerhalb von 3 Wochen. Ein Visum kann bei der Botschaft Turkmenistans oder an der Landgrenze beantragt werden, wenn Visaunterstützung verfügbar ist. Darüber hinaus kann bei der Ankunft am internationalen Flughafen in Aschgabat ein 10-Tage-Visum beantragt werden.',
    tajik6: 'Buchung',
    tajik7: 'Eine Reise nach Turkmenistan lässt sich nicht so einfach auf eigene Faust planen und durchführen, daher ist es am besten, die Dienste eines kompetenten Reisebüros in Anspruch zu nehmen. Bevor Sie nach Turkmenistan reisen, empfehlen wir Ihnen, im Voraus ein Hotel zu buchen oder eine Tour zu buchen. Dies verhindert Probleme mit der Unterkunft und der Organisation einer Route durch Turkmenistan und spart Ihnen Zeit',
    tajik8: 'Anmeldung',
    tajik9: 'Bei der Ankunft in Turkmenistan muss jeder ausländische Staatsbürger eine Einwanderungskarte erhalten, auf der die Hotels angegeben sind, in denen der Tourist übernachtet hat. Jeder Ausländer, der in Turkmenistan ankommt, muss sich innerhalb von drei Werktagen (den Tag der Einreise nicht mitgerechnet) beim Ministerium für Tourismus und Sport der Republik Turkmenistan anmelden.',
    tajik10: 'Unterkunft',
    tajik11: 'In großen Städten Turkmenistans wie Ashgabat, Dashoguz, Turkmenabad und Turkmenbashi gibt es eine große Auswahl an 4- und 5-Sterne-Hotels. In anderen Städten und außerhalb der Hauptstadt gibt es hauptsächlich 2- und 3-Sterne-Hotels. Unabhängig von der Kategorie des Hotels empfehlen wir Ihnen, bei der Buchung zu prüfen, ob in der Dusche warmes Wasser vorhanden ist und ob Ihr Zimmer über ein separates Badezimmer verfügt.',
    tajik12: 'Währung, Wechselstube, Plastikkarten',
    tajik13: 'Die Währung Turkmenistans ist der Manat (TMM), der 100 Tenge entspricht. Papiergeld ist in den Stückelungen 10.000, 5.000, 1.000, 500, 100, 50, 10, 5 und 1 Manat im Umlauf. Münzen in den Stückelungen 1000, 500, 50, 20, 10, 5 und 1 Tenge. Die Landeswährung ist das einzige gesetzliche Zahlungsmittel. Geld wechseln Sie am besten in Banken, Hotels und Wechselstuben. Banken sind montags bis freitags von 09.30 bis 17.30 Uhr geöffnet. Am einfachsten tauschen Sie US-Dollar. Die meisten Wechselstuben akzeptieren keine Banknoten, die vor 1996 ausgegeben wurden, sowie zerrissene und alte Scheine. Es ist ratsam, eine große Anzahl kleiner Dollarscheine mitzunehmen. In Ashgabat gibt es Geldautomaten, an denen Sie mit einer Visa-Karte Geld abheben können. Der Import und Export der Landeswährung ist für Ausländer verboten. Der Import von Fremdwährung ist nicht beschränkt, aber ihre Menge muss in der Erklärung angegeben werden. Sie können einen Betrag exportieren, der den in der Erklärung angegebenen Betrag nicht überschreitet. Um Probleme beim Zoll zu vermeiden, ist es ratsam, Quittungen für den Geldwechsel und Quittungen aus Geschäften aufzubewahren. Kreditkarten werden nur in der Filiale der Vnesheconombank, in einigen großen Hotels und Restaurants in Ashgabat sowie in den Filialen der Fluggesellschaften akzeptiert. Außerhalb von Ashgabat ist es nicht möglich, damit zu bezahlen. Reiseschecks können nur bei der Vnesheconombank und der Nationalbank von Turkmenistan in Ashgabat umgetauscht werden.',
    tajik14: 'Essen',
    tajik15: 'Die Grundlage der turkmenischen Küche sind Fleischgerichte. In verschiedenen Regionen der Republik wird Lamm- oder Kamelfleisch, Fleisch von Bergziegen, Wachteln und Fasanen verwendet. Traditionell verwenden Turkmenen kaum Rindfleisch. Das Fleisch wird in seinem eigenen Fett oder am Spieß über Kohlen gebraten und oft in einem Lehmofen - Tandoor - gebacken. Seit Jahrhunderten haben die Teke-Turkmenen eine einzigartige Methode zur Konservierung von Fleisch - Garyn. Kleine Fleischstücke und Schmalz werden fest in den Magen eines Schafs oder einer Ziege gelegt und mit Salz und rotem Pfeffer eingerieben. Der zugenähte Magen wird einen Tag lang in heißem Sand vergraben und abends ausgegraben und an einen hohen Pfahl gebunden, damit die Nachtbrise darauf weht. Dieser Vorgang wird mehrmals wiederholt. Auf diese Weise getrocknetes Fleisch erhält einen besonderen Geschmack und kann lange gelagert werden. An einem heißen Nachmittag wird der Gast auf jeden Fall mit Chal verwöhnt, dem vielleicht exotischsten turkmenischen Getränk. Um Chala zuzubereiten, mischt die Hausfrau warme, frische Kamelmilch mit einem speziellen Starter und lässt sie zwei Tage lang im Schatten stehen, wobei sie regelmäßig umrührt und den fettigen Schaum – Agaran – abschöpft. Der säuerlich schmeckende, leicht kohlensäurehaltige Chal löscht perfekt den Durst. Trinkgeld wird nur in großen internationalen Hotels und erstklassigen Restaurants akzeptiert (normalerweise bis zu 10 % der Rechnung).',
    tajik16: 'Kleiderordnung',
    tajik17: 'Es gibt keine besonderen Kleidervorschriften für den Alltag, insbesondere in Aschgabat und anderen großen Städten, wo die Menschen, vor allem junge Menschen, völlige Freiheit in der Kleiderwahl haben. Sie können Frauen in traditioneller islamischer Kleidung finden, aber dies ist oft eher eine Frage der persönlichen Wahl als eine Verpflichtung. In einigen Gegenden ist es besser, keine Shorts zu tragen; die gleiche Regel gilt beim Besuch religiöser Stätten, Moscheen, Mausoleen usw.',
    tajik18: 'Telefonkommunikation',
    tajik19: 'Vorwahl von Turkmenistan ist +993, Aschgabat +99312. Wenn Sie nach Finnland telefonieren möchten, wählen Sie 810 (internationale Vorwahl) + 358 (Vorwahl Finnlands) + Telefonnummer des Teilnehmers. Für internationale Anrufe müssen Sie eine Telefonkarte kaufen. Für Gespräche mit Finnland empfehlen wir, eine Karte mit dem höchsten Nennwert zu erwerben. Ein Anruf von einem Hotel kostet deutlich mehr.',
    tajik20: 'Wichtige Telefonnummern',
    tajik21: 'Krankenwagen und einheitlicher Rettungsdienst – 03, Polizei – 02, Staatliches Komitee für Tourismus und Sport Turkmenistans: Tel.: (12) 354-777, 397-606, 397-771, 390-065 oder 396-740, Informationsschalter – 222222 (Aschgabat)',
    tajik22: 'Strom',
    tajik23: 'Die Netzspannung beträgt 220 V, 50 Hz. Standardmäßig sind Steckdosen osteuropäischen Typs mit zwei runden Stiften ohne Erdung.',
    tajik24: 'Wetter',
    tajik25: 'Das Klima in Turkmenistan, das hauptsächlich aus Ebenen und Wüsten besteht, ist kontinental und trocken. Milderes Wetter herrscht in Bergregionen und an den Ufern des Kaspischen Meeres, das die westliche Grenze des Landes bildet. Die niedrigste Temperatur von -32 °C wurde im Winter in Wüstenregionen gemessen, die höchste von bis zu +50 °C im Sommer. Selbst im Sommer können die Nachttemperaturen in Wüsten auf +14-18 °C fallen, was zu Temperaturschwankungen von bis zu 30 °C führt.',
    tajik26: 'Winters in Turkmenistan are rather mild – temperature remains at around +8-9° C, with some light frosts falling to -15° C. Most of precipitation falls during this period. Summing up, the best time for Turkmenistan trip is the period of March-April and October-November. May and September as well as winter months can be relatively comfortable too. Summers are not recommended for traveling to Turkmenistan.',
    tajik27: 'Religion',
    tajik28: 'Die am weitesten verbreiteten Religionen in Turkmenistan waren Zoroastrismus, Buddhismus und Christentum, wie in anderen Ländern Zentralasiens. Seit der arabischen Eroberung im 7. und 8. Jahrhundert war der Islam die vorherrschende Religion. Heute sind die überwiegende Mehrheit der Gläubigen in Turkmenistan Moslems-Sunniten des Khanifit-Zweiges. Ein kleiner Teil der einheimischen Bevölkerung, vertreten durch die Ureinwohner Irans, sind Moslems-Schiiten. Eine große Rolle in der turkmenischen Gesellschaft hat der Sufismus gespielt – ein mystischer Zweig des muslimischen Dogmas, der sich durch die Kombination von Metaphysik und Askese auszeichnet, die Lehre von der schrittweisen Annäherung an die Erkenntnis Gottes durch mystische Liebe. Der Sufismus beeinflusste die Literatur, die nationale Kunst und sogar das politische Leben der Einheimischen stark. Im 20. Jahrhundert bildete sich eine große Bevölkerungsgemeinschaft europäischen Ursprungs. Dazu gehören orthodoxe Christen, Katholiken und Lutheraner. Der Staat beherbergt orthodoxe christliche und katholische Kirchen sowie eine Reihe anderer religiöser Glaubensrichtungen. Beim Besuch einer Moschee oder Kirche müssen Frauen leichte Mäntel (so dass kein Körperteil unbedeckt ist) und ein Kopftuch tragen. Männer, die eine Kirche betreten, müssen ihren Hut abnehmen. Eine weitere zu beachtende Sache ist der Besuch von Friedhöfen. Ausländer fotografieren gerne Gräber, weil sie ganz anders sind als die, die sie sonst sehen. Da sie alle auf dem Land liegen, mögen es die Einheimischen nicht, wenn Fremde dort zu lange herumlaufen, laut miteinander reden und lachen. Es ist offensichtlich, dass sie das beleidigen könnte, weil sie nicht wollen, dass die Geister ihrer Familienmitglieder belästigt werden. Es ist in Ordnung, w',
    tajik29: 'Feiertage im Jahr 2024',
    tajik30: '31. Dezember – 1. Januar, So.–Mo. Neujahr, 8. März, Fr. – Internationaler Frauentag, 21.–22. März, Do.–Fr. – Navruz, Datum variiert – Oraza Bayram, 18. Mai, Sa. – Tag der Verfassung und der Staatsflagge, Datum variiert – Kurban Bayram, 27. September, Fr. – Unabhängigkeitstag, 6. Oktober, So. – Gedenktag, 12. Dezember, Do. – Internationaler Tag der Neutralität',
    tajik31: 'Wasser',
    tajik32: 'Do not be afraid of drinking tea/coffee, eating soup etc. Concerning plain water, we always give to our client’s bottled mineral water, which is safe and very good for the health. However, it is not recommended to drink tap water.',
    tajik33: 'Souvenirs',
    tajik34: 'Teppiche sind zweifellos die beliebtesten turkmenischen Gegenstände auf der ganzen Welt. Die Herrinnen stellen sie ausschließlich von Hand her, mit Werkzeugen und Webstühlen, die sich seit Hunderten von Jahren nicht verändert haben. Die Feinheit der Ornamente auf turkmenischen Teppichen ist beeindruckend! Wenn Sie sie betrachten, sehen Sie ein dreidimensionales Bild. Die einzige Schwachstelle eines Souvenirs dieser Art ist sein Preis. Die Turkmenen wissen auch um den Wert ihrer Pferde. Sie können also kein Achal-Tekkiner-Pferd außer Landes bringen, egal wie viel Sie dafür bezahlen. In Geschäften finden Sie jedoch zahlreiche Statuetten, die dieses Pferd und Pferde anderer Arten darstellen. Aus Holz oder Ton gefertigt, wird eine davon sicherlich Ihren Schreibtisch schmücken.',

    

    

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









