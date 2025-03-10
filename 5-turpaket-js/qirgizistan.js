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
    none7: 'KYRGYZSTAN“A FAIRY TALE FROM THE LAND OF NOMADS”"',
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

    



    qirz1: 'Dear guests,',
    qirz2: 'The “AVENTURA” TEAM will be happy to give you some tips for your upcoming trip to Kyrgyzstan – a country that could be compared to a piece of paradise in the middle of picturesque mountains!!!',
    qirz3: 'With the following information we would like to give you some important travel tips and at the same time ask you to take the time to read them carefully. We wish you a pleasant stay and a wonderful and eventful trip.',
    qirz4: 'ENTRY / VISA',
    qirz5: 'Until 2020, EU citizens do not need a visa to enter Kyrgyzstan. When you arrive in Kyrgyzstan, you only need to show your passport to enter these countries! Please note that the passport must be valid for at least 6 months beyond the length of your stay. To be on the safe side, we advise you to take a photocopy of your passport with you on your trip.',
    qirz6: 'WEATHER',
    qirz7: 'The climate in Kyrgyzstan is continental and dry due to the distance from seas and oceans, as well as the mountains located almost in the center of the continent. The reason for this is the dry air throughout the country, due to which there are an average of 247 sunny days a year. Usually, temperatures in Kyrgyzstan are very different. For example, in summer, the Fergana Valley reaches almost 30 degrees Celsius, but in valleys high in the mountains the average temperature in winter is about -30 degrees. The most optimal temperatures without strong contrasts are near Lake Issyk-Kul, where comfortable temperatures prevail all year round, from zero degrees in winter to plus 18-25 degrees in summer. By the way Precipitation: this is also constant and the values ​​​​fluctuate greatly. If the high slopes reach an annual norm of a couple of thousand millimeters, Issyk-Kul can boast only a hundred. Kyrgyzstan is one of the sunniest countries in the world, but even here there are some valleys where clouds almost constantly darken the sky. Guests can fully enjoy the sun during a tour in Kyrgyzstan. It is cloudy here only in winter and the first days of spring. In the high mountains there is snow all year round, and in winter the thickness on the slopes can reach a meter, since the main amount of precipitation falls precisely in autumn and winter. September can be considered the most comfortable month to visit Kyrgyzstan, when the gentle autumn sun is not so hot. The purpose of a trip to Kyrgyzstan influences the choice of the most favorable seasons. You can walk on the high mountain pastures from May to mid-autumn, but hiking and horseback riding are best in the southern part of the country from May to October and in the northern part from April onwards. If you want to conquer the mountain peaks, this pastime is possible all year round, but it is worth climbing to the highest peaks in summer.',
    qirz8: 'CLOTHING AND THINGS TO TAKE ON A TRIP',
    qirz9: 'Based on the countrys climate data, light shirts, shorts, pants and dresses are the preferred clothing in summer. It is best if cotton makes up the majority of the fibers. It allows the body to breathe. Due to the fact that humidity is low in Kyrgyzstan, high temperatures are tolerated relatively easily. People with sensitive eyes and skin should always wear sunglasses and sunscreen. Since you are coming to the mountainous country, you may need your trekking shoes and a walking stick. As shoes in the city, open sandals are enough. From the side of the local culture, there are no restrictions on the style and color of clothing. Except in religious places, it is not recommended to appear in outfits that leave hips, calves, shoulders and, in the case of women, an open neck exposed. If you are invited into a house, you should take off your shoes before entering.',
    qirz10: 'CURRENCY',
    qirz11: 'If you are packing your luggage and preparing for your trip to Kyrgyzstan, you have probably wondered what the currency is like in this country and how much money you should take with you. The official currency in Kyrgyzstan is the Som. Below you will find information to help you orient yourself.',
    qirz12: 'It is better to bring 50-100 dollar/euro bills rather than smaller ones. Exchange offices may exchange small bills at a lower rate.',
    qirz13: 'WATER',
    qirz14: 'Dont worry about the water quality in the villages you visit and stay in. Since the water undergoes heat treatment, you dont need to be afraid to drink tea/coffee, eat soup, etc. As for normal water, we always give our customers bottled mineral water, which is safe and very good for health. However, drinking tap water is not recommended.',
    qirz15: 'ELECTRICITY',
    qirz16: 'There is no electricity in mountainous areas above 2,000 m above sea level. In yurt camps there is a generator, which is usually turned on from 7:00 p.m. to 8:00 p.m. and from 10:00 p.m. to 11:00 p.m., so you can charge your phones and cameras. The sockets in Kyrgyzstan are European-style.',
    qirz17: 'RELIGION',
    qirz18: 'You can therefore wear whatever you want and do not have to cover yourself. Only when visiting a mosque or church do women have to wear light coats (so that no part of the body is uncovered) and a headscarf. Men entering a church must remove their hats.',
    qirz20: 'Holidays',
    qirz21: 'January 1st – New Year’s Day, January 7th – Orthodox Christmas, February 23rd – Defender of the Fatherland Day, March 8th – International Women’s Day, March 21st – Nowruz, April 7th – People’s April Revolution Day, May 1st – Labour Day, May 5th – Constitution Day, May 9th – Victory Day, Orozo Ait (Eid al-Fitr) and Kurman Ait (Eid al-Adha) – date changes annually, August 31st – Independence Day, November 7th-8th – Days of History and Remembrance of Ancestors.',
    qirz22: 'KYRGYZSTAN CUISINE',
    qirz23: 'Traditional Kyrgyz cuisine is based on mutton, beef and horse meat, as well as various dairy products. The cooking techniques and main ingredients are strongly influenced by the countrys historically nomadic way of life. Many cooking techniques are therefore geared towards the long-term preservation of food. Mutton and beef are the most popular types of meat, although many Kyrgyz cannot afford them on a regular basis these days.',
    qirz24: 'Kyrgyzstan is home to many different nationalities and their different cuisines. In major cities such as Bishkek, Osh, Jalal-Abad and Karakol, various national and international cuisines can be found. Non-Kyrgyz cuisines that are particularly common and popular in Kyrgyzstan include Uyghur, Dungan, Uzbek and Turkish cuisines, which represent the largest minorities in the country.',
    qirz25: 'SAFETY & SECURITY',
    qirz26: 'It is safe and secure if you decide to walk around the city alone. Most of the hotels we offer to our guests are located in the city center, where the streets are well lit. The crime rate in our country is like everywhere else in the world. In any case, always choose bright streets and stay where there are people.',
    qirz27: 'What to do and not to do in Kyrgyzstan',
    qirz28: 'Do the following: Say hello (preferably in the Kyrgyz language – Salam Aleikum) when you arrive (however, it is considered strange for Kyrgyz to repeat this when you see the same person); Break the bread (national bread – Lepeshka) with your hands. It is not allowed to cut it; Accept food and drink with your right hand or with both hands. People believe that evil spirits do everything with the left hand; When entering a mosque, use your right leg first (while you must enter a toilet with your left leg first); Sleep in the yurt with your feet pointing towards the door; If you see food on the ground or floor, pick it up and put it higher so that the birds can eat it; Always ask permission before taking a photo and respect their answer. Generally, people like this and they even ask you to take a photo of them; Women must cover their heads when entering a church or a mosque; Say thank you (Kyrgyz – rahmat) when you receive something; If you want to show respect to a person, shake his or her hands; Take off your shoes when entering a yurt or house; If someone invites you to eat, come to the table and take at least a piece of something.',
    qirz29: 'Not:',
    qirz30: 'Whistle in a room or yurt. People think they may run out of money; Step over the fire pit. Fire is sacred to nomads; Touch peoples hats and dont throw your own on the ground. People say you get a terrible headache if you twist or fold your hat; Point a knife at someone. Walk on with the knife handle first; Spill milk; Be surprised if the Kyrgyz give you a half-full traditional cup of tea; Throw food in the trash can; Act (too) aggressively. In many countries you can negotiate 30-50% off, but not in Kyrgyzstan. Usually people cant give you more than 5%; Be too surprised if the nomads give you a sheeps head as a first course. This way they show you respect. You should eat at least a little bit. One way out without offending them is to say you are a vegetarian. However, if you decide to do so, remember to behave as a vegetarian in their presence the entire time.',
    qirz31: 'SOUVENIRS',
    qirz32: 'If you want to buy souvenirs, you can buy ones made of leather, wood or felt. These are the main materials used to make traditional souvenirs. Depending on where you come from, they can even be practical! For example, felt hats, scarves and pajamas are ideal for the cold winter. They are not just souvenirs, but very popular with the locals.',
    




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisepakete',
    none5: 'Preise für Reisepakete',
    none6: 'Zugang',
    none7: 'KIRGISISTAN„EIN MÄRCHEN AUS DEM NOMADENLAND“',
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

    
    qirz1: 'Liebe Gäste,',
    qirz2: 'Das „AVENTURA“-TEAM gibt Ihnen gerne ein paar Tipps für Ihre bevorstehende Reise nach Kirgisistan – ein Land, das mit einem Stück Paradies inmitten malerischer Berge verglichen werden könnte!!!',
    qirz3: 'Mit den folgenden Informationen möchten wir Ihnen einige wichtige Reisetipps geben und Sie gleichzeitig bitten, sich die Zeit zu nehmen, diese aufmerksam durchzulesen. Wir wünschen Ihnen einen angenehmen Aufenthalt und eine wunderbare und erlebnisreiche Reise.',
    qirz4: 'EINREISE / VISUM',
    qirz5: 'Bis 2020 benötigen EU-Bürger kein Visum für die Einreise nach Kirgisistan. Bei der Ankunft in Kirgisistan müssen Sie zur Einreise in diese Länder lediglich Ihren Reisepass vorzeigen! Bitte beachten Sie, dass der Reisepass noch mindestens 6 Monate über die Aufenthaltsdauer hinaus gültig sein muss. Um auf Nummer sicher zu gehen, raten wir Ihnen, eine Fotokopie Ihres Reisepasses mit auf die Reise zu nehmen.',
    qirz6: 'WETTER',
    qirz7: 'Das Klima in Kirgisistan ist kontinental und aufgrund der Entfernung von Meeren und Ozeanen trocken, ebenso wie die Berge, die fast im Zentrum des Kontinents liegen. Der Grund dafür ist die trockene Luft im gesamten Land, aufgrund derer es im Durchschnitt 247 Sonnentage im Jahr gibt. Normalerweise sind die Temperaturen in Kirgisistan sehr unterschiedlich. Im Sommer beispielsweise erreicht das Fergana-Tal fast 30 Grad Celsius, aber in Tälern hoch in den Bergen beträgt die Durchschnittstemperatur im Winter etwa -30 Grad. Die optimalsten Temperaturen ohne starke Kontraste gibt es in der Nähe des Issyk-Kul-Sees, wo das ganze Jahr über angenehme Temperaturen herrschen, von null Grad im Winter bis zu plus 18-25 Grad im Sommer. Apropos Niederschlag: Auch dieser ist konstant und die Werte schwanken stark. Wenn die hohen Hänge eine jährliche Norm von ein paar Tausend Millimetern erreichen, kann Issyk-Kul nur mit hundert aufwarten. Kirgisistan ist eines der sonnigsten Länder der Welt, aber auch hier gibt es einige Täler, in denen Wolken fast ständig den Himmel verdunkeln. Gäste können die Sonne während einer Tour in Kirgisistan in vollen Zügen genießen. Bewölkt ist es hier nur im Winter und in den ersten Frühlingstagen. In den hohen Bergen liegt das ganze Jahr über Schnee, und im Winter kann die Dicke an den Hängen einen Meter erreichen, da die Hauptniederschlagsmenge gerade im Herbst und Winter fällt. Der September kann als der angenehmste Monat für einen Besuch in Kirgisistan angesehen werden, wenn die sanfte Herbstsonne nicht so heiß ist. Der Zweck einer Reise nach Kirgisistan beeinflusst die Wahl der günstigsten Jahreszeiten. Sie können von Mai bis Mitte Herbst auf den Hochgebirgsweiden spazieren gehen, aber Wandern und Reiten sind im südlichen Teil des Landes von Mai bis Oktober und im nördlichen Teil ab April am besten möglich. Wenn Sie die Berggipfel erobern möchten, ist diese Freizeitbeschäftigung das ganze Jahr über möglich, aber es lohnt sich, im Sommer auf die höchsten Gipfel zu klettern.',
    qirz8: 'KLEIDUNG UND DINGE, DIE SIE AUF EINE REISE MITNEHMEN SOLLTEN',
    qirz9: 'Basierend auf den Klimadaten des Landes sind leichte Hemden, Shorts, Hosen und Kleider die bevorzugte Kleidung im Sommer. Am besten ist es, wenn Baumwolle den Großteil der Fasern ausmacht. Sie lässt den Körper atmen. Aufgrund der Tatsache, dass die Luftfeuchtigkeit in Kirgisistan niedrig ist, werden hohe Temperaturen relativ leicht vertragen. Menschen mit empfindlichen Augen und Haut sollten immer eine Sonnenbrille und Sonnenschutz tragen. Da Sie in das bergige Land kommen, benötigen Sie möglicherweise Ihre Trekkingschuhe und einen Wanderstock. Als Schuhe in der Stadt reichen offene Sandalen aus. Von Seiten der lokalen Kultur gibt es keine Einschränkungen hinsichtlich des Stils und der Farbe der Kleidung. Außer an religiösen Orten ist es nicht empfehlenswert, in Outfits zu erscheinen, die Hüften, Waden, Schultern und bei Frauen einen offenen Hals frei lassen. Wenn Sie in ein Haus eingeladen werden, sollten Sie vor dem Betreten Ihre Schuhe ausziehen.',
    qirz10: 'WÄHRUNG',
    qirz11: 'Wenn Sie gerade dabei sind, Ihr Gepäck zu packen und Ihre Reise nach Kirgisistan vorzubereiten, haben Sie sich bestimmt schon einmal gefragt, wie die Währung in diesem Land ist und wie viel Geld Sie mitnehmen sollten. Die offizielle Währung in Kirgisistan ist der Som. Nachfolgend finden Sie Informationen, die Ihnen bei der Orientierung helfen.',
    qirz12: 'Es ist besser, 50-100-Dollar-/Euro-Scheine mitzubringen als kleinere. Wechselstuben wechseln kleine Scheine möglicherweise zu einem niedrigeren Kurs.',
    qirz13: 'WASSER',
    qirz14: 'Machen Sie sich keine Sorgen über die Wasserqualität in den Dörfern, die Sie besuchen und in denen Sie übernachten. Da das Wasser einer Wärmebehandlung unterzogen wird, brauchen Sie keine Angst zu haben, Tee/Kaffee zu trinken, Suppe zu essen usw. Was normales Wasser betrifft, geben wir unseren Kunden immer Mineralwasser in Flaschen, das sicher und sehr gut für die Gesundheit ist. Es wird jedoch nicht empfohlen, Leitungswasser zu trinken.',
    qirz15: 'STROM',
    qirz16: 'In Bergregionen über 2.000 m über dem Meeresspiegel gibt es keinen Strom. In Jurtenlagern gibt es einen Generator, der normalerweise von 19:00 bis 20:00 Uhr und von 22:00 bis 23:00 Uhr eingeschaltet ist. Dann können Sie Ihre Telefone und Kameras aufladen. Die Steckdosen in Kirgisistan sind europäischer Art.',
    qirz17: 'RELIGION',
    qirz18: 'Sie können daher tragen, was Sie möchten, und müssen sich nicht verhüllen. Nur beim Besuch einer Moschee oder Kirche müssen Frauen leichte Mäntel (so dass kein Körperteil unbedeckt ist) und ein Kopftuch tragen. Männer, die eine Kirche betreten, müssen ihren Hut abnehmen.',
    qirz20: 'Feiertage',
    qirz21: '1. Januar – Neujahr, 7. Januar – Orthodoxes Weihnachtsfest, 23. Februar – Tag des Vaterlandsverteidigers, 8. März – Internationaler Frauentag, 21. März – Nowruz, 7. April – Tag der Aprilrevolution des Volkes, 1. Mai – Tag der Arbeit, 5. Mai – Tag der Verfassung, 9. Mai – Tag des Sieges, Orozo Ait (Eid al-Fitr) und Kurman Ait (Eid al-Adha) – Datum ändert sich jährlich, 31. August – Unabhängigkeitstag, 7.-8. November – Tage der Geschichte und des Gedenkens an die Vorfahren.',
    qirz22: 'KIRGISISCHER KÜCHEN',
    qirz23: 'Die traditionelle kirgisische Küche basiert auf Hammel-, Rind- und Pferdefleisch sowie verschiedenen Milchprodukten. Die Zubereitungstechniken und Hauptzutaten sind stark von der historisch nomadischen Lebensweise des Landes geprägt. Viele Kochtechniken sind daher auf die langfristige Konservierung von Lebensmitteln ausgerichtet. Hammel- und Rindfleisch sind die beliebtesten Fleischsorten, obwohl sich viele Kirgisen diese heutzutage nicht mehr regelmäßig leisten können.',
    qirz24: 'Kirgisistan ist die Heimat vieler verschiedener Nationalitäten und ihrer verschiedenen Küchen. In größeren Städten wie Bischkek, Osch, Dschalalabat und Karakol findet man verschiedene nationale und internationale Küchen. Zu den nicht-kirgisischen Küchen, die in Kirgisistan besonders verbreitet und beliebt sind, gehören die uigurische, dunganische, usbekische und türkische Küche, die die größten Minderheiten im Land darstellen.',
    qirz25: 'SAFETY & SECURITY',
    qirz26: 'Es ist sicher und geschützt, wenn Sie sich entscheiden, alleine durch die Stadt zu gehen. Die meisten Hotels, die wir unseren Gästen anbieten, liegen im Stadtzentrum, wo die Straßen gut beleuchtet sind. Die Kriminalitätsrate in unserem Land ist wie überall auf der Welt. Wählen Sie auf jeden Fall immer helle Straßen und bleiben Sie dort, wo Menschen sind.',
    qirz27: 'Was man in Kirgisistan tun und lassen sollte',
    qirz28: 'Tun Sie Folgendes: Sagen Sie Hallo (vorzugsweise in der kirgisischen Sprache – Salam Aleikum), wenn Sie ankommen (es gilt jedoch für Kirgisen als seltsam, dies zu wiederholen, wenn Sie dieselbe Person sehen); Brechen Sie das Brot (nationales Brot – Lepeshka) mit den Händen. Es ist nicht erlaubt, es zu schneiden; Nehmen Sie Essen und Trinken mit der rechten Hand oder mit beiden Händen an. Die Leute glauben, dass böse Geister alles mit der linken Hand tun. Wenn Sie eine Moschee betreten, benutzen Sie zuerst Ihr rechtes Bein (während Sie eine Toilette zuerst mit dem linken Bein betreten müssen); Schlafen Sie in der Jurte mit den Füßen zur Tür zeigend; Wenn Sie Essen auf dem Boden oder Fußboden sehen, heben Sie es auf und legen Sie es höher, damit die Vögel es fressen können; Fragen Sie immer um Erlaubnis, bevor Sie ein Foto machen, und respektieren Sie ihre Antwort. Im Allgemeinen mögen die Leute das und sie bitten Sie sogar, ein Foto von ihnen zu machen; Frauen müssen ihre Köpfe bedecken, wenn sie eine Kirche oder eine Moschee betreten; Sagen Sie Danke (Kirgisisch – rahmat), wenn Sie etwas bekommen; Wenn Sie einer Person Respekt erweisen möchten, schütteln Sie ihr beide Hände; Ziehen Sie Ihre Schuhe aus, wenn Sie eine Jurte oder ein Haus betreten; Wenn Sie jemand zum Essen einlädt, kommen Sie an den Tisch und nehmen Sie sich zumindest ein Stück von etwas.',
    qirz29: 'Nicht:',
    qirz30: 'Pfeifen Sie in einem Zimmer oder einer Jurte. Die Leute glauben, dass sie vielleicht kein Geld mehr haben; Steigen Sie über die Feuerstelle. Feuer ist für Nomaden heilig; Berühren Sie die Hüte der Leute und werfen Sie Ihre eigenen nicht auf den Boden. Die Leute sagen, Sie bekommen schreckliche Kopfschmerzen, wenn Sie Ihren Hut verdrehen oder falten; Richten Sie ein Messer auf jemanden. Gehen Sie zuerst mit dem Messergriff weiter; Verschütten Sie Milch; Seien Sie überrascht, wenn Ihnen die Kirgisen eine halbvolle traditionelle Tasse Tee geben; Werfen Sie Lebensmittel in den Mülleimer; Handeln Sie (zu) aggressiv. In vielen Ländern können Sie 30-50 % Rabatt heraushandeln, aber nicht in Kirgisistan. Normalerweise können die Leute Ihnen nicht mehr als 5 % geben; Seien Sie zu überrascht, wenn Ihnen die Nomaden als ersten Gang einen Schafskopf geben. Auf diese Weise zeigen sie Ihnen Respekt. Sie sollten zumindest ein bisschen essen. Ein Ausweg, ohne sie zu beleidigen, ist zu sagen, dass Sie Vegetarier sind. Wenn Sie sich jedoch dafür entscheiden, vergessen Sie nicht, sich in ihrer Gegenwart während der gesamten Zeit als Vegetarier zu verhalten.',
    qirz31: 'SOUVENIRS',
    qirz32: 'Wenn Sie Souvenirs kaufen möchten, können Sie welche aus Leder, Holz oder Filz kaufen. Dies sind die Hauptmaterialien, aus denen traditionelle Souvenirs hergestellt werden. Je nachdem, woher Sie kommen, können sie sogar praktisch sein! Filzhüte, -schals und -schlafanzüge sind beispielsweise ideal für den kalten Winter. Sie sind nicht nur Souvenirs, sondern bei den Einheimischen sehr beliebt.',


    

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









