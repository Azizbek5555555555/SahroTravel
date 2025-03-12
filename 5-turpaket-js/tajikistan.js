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
    none7: 'TAJIKISTAN “A PARADISE IN THE MOUNTAINS”',
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

    

    tajik1: 'Dear guests,',
    tajik2: 'The “AVENTURA” TEAM is delighted that you have decided to take part in the exciting journey along the pearls of Central Asia. Tajikistan never ceases to impress foreign guests with its beautiful nature and unique customs and traditions.',
    tajik3: 'With the following information we would like to give you some important travel tips and at the same time ask you to take the time to read them carefully. We wish you a pleasant stay and a wonderful and eventful trip in Tajikistan.',
    tajik4: 'ENTRY / VISA',
    tajik5: 'Until 2019, EU citizens do not need a visa to enter Tajikistan. When you arrive in Tajikistan, you only need to show your passport to enter the country! Please note that your passport must be valid for at least 6 months beyond the length of your stay. To be on the safe side, we recommend that you take a photocopy of your passport with you on your trip.',
    tajik6: 'WEATHER',
    tajik7: 'The climate of Tajikistan is continental, with strong variations in daily and seasonal temperatures. It is characterized by intense sunshine, dryness, clear skies, and uneven distribution of precipitation between seasons. The ruggedness of the terrain plays an important role in the distribution of heat and moisture. Precipitation and air temperature vary considerably depending on the altitude and location of the mountains. In central Tajikistan, at altitudes of 1,500–2,000 m, annual precipitation is 1,800 mm, while in the south of the country, at altitudes of 300–500 m, it drops to 200 mm. In the eastern Pamirs, at altitudes of 4,000 m, the average is only 60 mm. There are about 275 sunny days per year.',
    tajik8: 'CLOTHING AND THINGS TO TAKE ON A TRIP',
    tajik9: 'Based on the countrys climate data, light shirts, shorts, pants and dresses are the preferred clothing in summer. It is best if cotton makes up the majority of the fibers. It allows the body to breathe. Due to the fact that humidity is low in Kyrgyzstan, high temperatures are tolerated relatively easily. People with sensitive eyes and skin should always wear sunglasses and sunscreen. Since you are coming to the mountainous country, you may need your trekking shoes and a walking stick. As shoes in the city, open sandals are enough. From the side of the local culture, there are no restrictions on the style and color of clothing. Except in religious places, it is not recommended to appear in outfits that leave hips, calves, shoulders and, in the case of women, an open neck exposed. If you are invited into a house, you should take off your shoes before entering.',
    tajik10: 'The average annual rainfall at altitudes between 1,200 and 3,200 m is 560–650 mm. The average annual temperature is +5.4 °C. Dust storms are common from June to October. The dust stays in the air for several days and can only settle during heavy rain.',
    tajik11: 'CLOTHING AND THINGS TO TAKE ON A TRIP',
    tajik12: 'Based on the countrys climate data, light shirts, shorts, pants and dresses are the preferred clothing in summer. It is best if cotton makes up the majority of the fibers. It allows the body to breathe. Due to the fact that the humidity in Tajikistan is low, high temperatures are tolerated relatively easily. People with sensitive eyes and skin should always wear sunglasses and sunscreen. Since you are coming to the mountainous country, you may need your trekking shoes and a walking stick. As shoes in the city, open sandals are enough. From the side of the local culture, there are no restrictions on the style and color of the clothes. Except in religious places, it is not recommended to appear in outfits that leave hips, calves, shoulders and, in the case of women, an open neck exposed. If you are invited into a house, you should take off your shoes before entering.',
    tajik13: 'CURRENCY',
    tajik14: 'If you are in the process of packing your luggage and preparing your trip to Tajikistan, you have probably wondered what the currency in this country is like and how much money you should take with you. The official currency in Tajikistan is the somoni. Below you will find information to help you orient yourself. It is better to bring 50-100 dollar/euro bills rather than smaller ones. Exchange offices may exchange small bills at a lower rate. There are no problems with changing money in Dushanbe: currency exchange is only allowed in the banks. Banks are open until 5:00 p.m., some banks are even open 24 hours a day. Exchanging money on the street or in the bazaar is not allowed. When changing money at the bank, you may be required to present your passport. In small towns and villages you have the opportunity to exchange your money, but sometimes you can miss the bank opening hours. For this reason, it is highly recommended to change money in the capital. Credit cards are accepted only in big cities, usually Visa and Mastercard.',
    tajik15: 'WATER',
    tajik16: 'Dont worry about the water quality in the villages you visit and stay in. Since the water undergoes heat treatment, you dont need to be afraid to drink tea/coffee, eat soup, etc. As for normal water, we always give our customers bottled mineral water, which is safe and very good for health. However, drinking tap water is not recommended.',
    tajik17: 'ELECTRICITY',
    tajik18: 'There is no electricity in mountainous areas above 2,000 m above sea level. In private accommodation there is a generator, which is usually switched on from 7:00 p.m. to 8:00 p.m. and from 10:00 p.m. to 11:00 p.m. Then you can charge your phones and cameras. The sockets in Tajikistan are of European type.',
    tajik19: 'TOILETS - WC',
    tajik20: 'During your transfers, toilets may be unavailable or in poor condition, so sometimes it is better to use "open air" toilets. Please note that most public toilets are "traditional", which means you have to squat. Our guides and drivers usually know places with good toilets (restaurants, gas stations) and try to stop there. Regarding toilets in private accommodation, please note that there is usually 1 toilet in 1 house, which is shared. In yurt camps, the toilet is outside and is for use by the whole camp.',
    tajik21: 'RELIGION',
    tajik22: 'Tajikistan is a secular country where everyone has the right to have any religion or belief they prefer. However, 90-95% of the population is considered Muslim. However, Islam in our country is completely different from Islam in Arab countries. The reason is that before this religion came to the region, locals practiced animism (for example, Tengrism - worship of the sky), totemism and shamanism and were influenced by Zoroastrianism, Christianity and Buddhism. Islam began to spread in the region only 10 centuries ago. Therefore, today Islam in Tajikistan is presented in a "light form". This means that only a small percentage of people are practicing Muslims - they pray five times a day, women wear head coverings, they do not drink alcohol, do not eat pork, etc. But the majority of the population simply celebrates religious holidays, fasts during Ramadan, memorizes the Holy Quran - thats all.',    tajik23: '',
    tajik23: 'So you can wear whatever you want and you dont have to cover yourself. Only when visiting a mosque or a church, women must wear light coats (so that no part of the body is uncovered) and a headscarf. Men entering a church must remove their hat. Another thing to keep in mind is visiting cemeteries. Foreigners like to take pictures of graves because they are very different from the ones they usually see. Since they are all in the countryside, locals dont like strangers walking around there for too long, talking loudly to each other and laughing. Its obvious that this might offend them because they dont want to bother the spirits of their family members. Its fine if you just take a quick and quiet photo.',
    tajik24: 'HOLIDAYS',
    tajik25: 'January 1 – New Year’s Day, January 7 – Orthodox Christmas, February 23 – Defender of the Fatherland Day, March 8 – International Women’s Day, March 21 – Nowruz, May 1 – Labour Day, May 9 – Victory Day, Orozo Ait (Eid al-Fitr) and Kurman Ait (Eid al-Adha) – date changes annually, September 9 – Independence Day, November 6 – Constitution Day.',
    tajik26: 'TAJIK CUISINE',
    tajik27: 'Traditional Tajik dishes are based on mutton, beef and chicken, as well as various dairy products. The preparation techniques and main ingredients are strongly influenced by the countrys nomadic lifestyle. Many cooking techniques are therefore geared towards the long-term preservation of food. Mutton and beef are the most popular types of meat, although many Tajiks cannot afford them on a regular basis these days.',
    tajik28: 'What to do and not to do in Tajikistan',
    tajik29: 'Do the following: Say hello (preferably in Tajik – Salam Aleikum) when you arrive (repeating it when you see the same person is considered strange for Tajiks, however); Accept food and drinks with your right hand or with both hands. People believe that evil spirits do everything with the left hand; When entering a mosque, use your right leg first (while you must enter a toilet with your left leg first); If you see food on the ground or floor, pick it up and put it higher so that the birds can eat it; Always ask permission before taking a photo and respect the answer. Generally, people like that and they even ask you to take a photo of them; Women must cover their heads when entering a church or mosque; Say thank you (Tajik – rahmat) when you get something; If you want to show respect to a person, shake their hand with both hands; Take off your shoes when you enter a yurt or house; if someone invites you to eat, come to the table and take at least a piece of something.',
    tajik30: 'Not',
    tajik31: 'Whistle in a room or yurt. People think they may run out of money; Climb over the fire pit. Fire is sacred to nomads; Point a knife at someone. Pass a knife handle first; Be surprised if a Tajik gives you a half-full traditional cup of tea; Throw all food in the trash can; Act (too) aggressively. In many countries you can bargain for 30-50% discount, but not in Tajikistan. Usually people cant give you more than 5%.',
    tajik32: 'SOUVENIRS',
    tajik33: 'If you want to buy souvenirs, you can buy ones made of leather, wood or felt. These are the main materials used to make traditional souvenirs. Depending on where you come from, they can even be practical! For example, felt hats, scarves and pajamas are ideal for the cold winter. They are not just souvenirs, but very popular with the locals.'





      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisetouren',
    none5: 'Informationen',
    none6: 'Zugang',
    none7: 'TADSCHIKISTAN „EIN PARADIES IN DEN BERGEN“',
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

    

    tajik1: 'Liebe Gäste,',
    tajik2: 'Das „AVENTURA“-TEAM freut sich sehr, dass Sie sich entschieden haben, an der spannenden Reise entlang der Perlen Zentralasiens teilzunehmen. Tadschikistan beeindruckt ausländische Gäste immer wieder mit seiner wunderschönen Natur sowie den einzigartigen Bräuchen und Traditionen.',
    tajik3: 'Mit den folgenden Informationen möchten wir Ihnen einige wichtige Reisetipps geben und Sie gleichzeitig bitten, sich die Zeit zu nehmen, diese sorgfältig durchzulesen. Wir wünschen Ihnen einen angenehmen Aufenthalt und eine wunderbare und erlebnisreiche Reise in Tadschikistan.',
    tajik4: 'EINREISE / VISUM',
    tajik5: 'Bis 2019 benötigen EU-Bürger kein Visum für die Einreise nach Tadschikistan. Bei der Ankunft in Tadschikistan müssen Sie zur Einreise in das Land lediglich Ihren Reisepass vorzeigen! Bitte beachten Sie, dass der Reisepass noch mindestens 6 Monate über die Aufenthaltsdauer hinaus gültig sein muss. Um auf Nummer sicher zu gehen, raten wir Ihnen, eine Fotokopie Ihres Reisepasses mit auf die Reise zu nehmen.',
    tajik6: 'WETTER',
    tajik7: 'Das Klima in Tadschikistan ist kontinental mit starken Schwankungen der Tages- und Jahreszeitentemperaturen. Es zeichnet sich durch intensive Sonneneinstrahlung, Trockenheit, klaren Himmel und eine ungleichmäßige Niederschlagsverteilung zwischen den Jahreszeiten aus. Die Zerklüftetheit des Geländes spielt eine wichtige Rolle bei der Verteilung von Wärme und Feuchtigkeit. Niederschlagsmenge und Lufttemperatur unterscheiden sich je nach Höhe und Lage der Berge erheblich. In Zentraltadschikistan, in Höhen von 1.500 bis 2.000 m, beträgt der jährliche Niederschlag 1.800 mm, während er im Süden des Landes, in Höhen von 300 bis 500 m, auf 200 mm sinkt. Im östlichen Pamir, in 4.000 m Höhe, beträgt der Durchschnitt nur 60 mm. Es gibt etwa 275 Sonnentage pro Jahr.',
    tajik8: 'KLEIDUNG UND DINGE, DIE SIE AUF EINE REISE MITNEHMEN SOLLTEN',
    tajik9: 'Basierend auf den Klimadaten des Landes sind leichte Hemden, Shorts, Hosen und Kleider die bevorzugte Kleidung im Sommer. Am besten ist es, wenn Baumwolle den Großteil der Fasern ausmacht. Sie lässt den Körper atmen. Aufgrund der Tatsache, dass die Luftfeuchtigkeit in Kirgisistan niedrig ist, werden hohe Temperaturen relativ leicht vertragen. Menschen mit empfindlichen Augen und Haut sollten immer eine Sonnenbrille und Sonnenschutz tragen. Da Sie in das bergige Land kommen, benötigen Sie möglicherweise Ihre Trekkingschuhe und einen Wanderstock. Als Schuhe in der Stadt reichen offene Sandalen aus. Von Seiten der lokalen Kultur gibt es keine Einschränkungen hinsichtlich des Stils und der Farbe der Kleidung. Außer an religiösen Orten ist es nicht empfehlenswert, in Outfits zu erscheinen, die Hüften, Waden, Schultern und bei Frauen einen offenen Hals frei lassen. Wenn Sie in ein Haus eingeladen werden, sollten Sie vor dem Betreten Ihre Schuhe ausziehen.',
    tajik10: 'Die durchschnittliche jährliche Niederschlagsmenge in Höhenlagen zwischen 1.200 und 3.200 m beträgt 560–650 mm. Die durchschnittliche Jahrestemperatur beträgt +5,4 °C. Von Juni bis Oktober kommt es häufig zu Staubstürmen. Der Staub bleibt mehrere Tage in der Luft und kann sich nur bei starkem Regen absetzen.',
    tajik11: 'KLEIDUNG UND DINGE, DIE SIE AUF EINE REISE MITNEHMEN SOLLTEN',
    tajik12: 'Basierend auf den Klimadaten des Landes sind leichte Hemden, Shorts, Hosen und Kleider die bevorzugte Kleidung im Sommer. Am besten ist es, wenn Baumwolle den Großteil der Fasern ausmacht. Sie lässt den Körper atmen. Aufgrund der Tatsache, dass die Luftfeuchtigkeit in Tadschikistan niedrig ist, werden hohe Temperaturen relativ leicht vertragen. Menschen mit empfindlichen Augen und Haut sollten immer eine Sonnenbrille und Sonnenschutz tragen. Da Sie in das bergige Land kommen, benötigen Sie möglicherweise Ihre Trekkingschuhe und einen Wanderstock. Als Schuhe in der Stadt reichen offene Sandalen aus. Von Seiten der lokalen Kultur gibt es keine Einschränkungen hinsichtlich des Stils und der Farbe der Kleidung. Außer an religiösen Orten ist es nicht empfehlenswert, in Outfits zu erscheinen, die Hüften, Waden, Schultern und bei Frauen einen offenen Hals frei lassen. Wenn Sie in ein Haus eingeladen werden, sollten Sie vor dem Betreten Ihre Schuhe ausziehen.',
    tajik13: 'WÄHRUNG',
    tajik14: 'Wenn Sie gerade dabei sind, Ihr Gepäck zu packen und Ihre Reise nach Tadschikistan vorzubereiten, haben Sie sich bestimmt schon einmal gefragt, wie die Währung in diesem Land aussieht und wie viel Geld Sie mitnehmen sollten. Die offizielle Währung in Tadschikistan ist der Somoni. Nachfolgend finden Sie Informationen, die Ihnen bei der Orientierung helfen. Es ist besser, 50-100-Dollar-/Euro-Scheine mitzubringen als kleinere. Wechselstuben wechseln kleine Scheine möglicherweise zu einem niedrigeren Kurs. In Duschanbe gibt es keine Probleme mit dem Geldwechseln: Geldwechsel ist nur in den Banken erlaubt. Banken haben bis 17:00 Uhr geöffnet, manche Banken sind sogar rund um die Uhr geöffnet. Geldwechsel auf der Straße oder im Basar ist nicht gestattet. Wenn Sie bei der Bank Geld wechseln, müssen Sie möglicherweise Ihren Reisepass vorlegen. In kleinen Städten und Dörfern haben Sie die Möglichkeit, Ihr Geld zu wechseln, aber manchmal können Sie die Öffnungszeiten der Banken verpassen. Aus diesem Grund wird dringend empfohlen, Geld in der Hauptstadt zu wechseln. Kreditkarten werden nur in großen Städten akzeptiert, normalerweise Visa und Mastercard.',
    tajik15: 'WASSER',
    tajik16: 'Machen Sie sich keine Sorgen über die Wasserqualität in den Dörfern, die Sie besuchen und in denen Sie übernachten. Da das Wasser einer Wärmebehandlung unterzogen wird, brauchen Sie keine Angst zu haben, Tee/Kaffee zu trinken, Suppe zu essen usw. Was normales Wasser betrifft, geben wir unseren Kunden immer Mineralwasser in Flaschen, das sicher und sehr gut für die Gesundheit ist. Es wird jedoch nicht empfohlen, Leitungswasser zu trinken.',
    tajik17: 'STROM',
    tajik18: 'In Bergregionen über 2.000 m über dem Meeresspiegel gibt es keinen Strom. In den Privatunterkünften gibt es einen Generator, der normalerweise von 19:00 bis 20:00 Uhr und von 22:00 bis 23:00 Uhr eingeschaltet ist. Dann können Sie Ihre Telefone und Kameras aufladen. Die Steckdosen in Tadschikistan sind europäischer Art.',
    tajik19: 'TOILETTEN - WC',
    tajik20: 'Während Ihrer Transfers kann es sein, dass keine oder in schlechtem Zustand befindliche Toiletten vorhanden sind. Daher ist es manchmal besser, „Freiluft“-Toiletten zu benutzen. Bitte beachten Sie, dass die meisten öffentlichen Toiletten „traditionell“ sind, was bedeutet, dass Sie sich hinhocken müssen. Unsere Reiseleiter und Fahrer kennen normalerweise Orte mit guten Toiletten (Restaurants, Tankstellen) und versuchen, dort anzuhalten. Bezüglich der Toiletten in Privatunterkünften beachten Sie bitte, dass es normalerweise 1 Toilette in 1 Haus gibt, die gemeinsam genutzt wird. In Jurtenlagern befindet sich die Toilette im Freien und ist für die Nutzung durch das gesamte Lager vorgesehen.',
    tajik21: 'RELIGION',
    tajik22: 'Tadschikistan ist ein säkulares Land, in dem jeder das Recht hat, jede Religion oder Weltanschauung zu haben, die er bevorzugt. Allerdings gelten 90-95 % der Bevölkerung als Muslime. Der Islam in unserem Land unterscheidet sich jedoch völlig vom Islam in arabischen Ländern. Der Grund dafür ist, dass die Einheimischen, bevor diese Religion in die Region kam, Animismus (z. B. Tengrismus – Himmelsanbetung), Totemismus und Schamanismus praktizierten und vom Zoroastrismus, Christentum und Buddhismus beeinflusst wurden. Der Islam begann sich in der Region erst vor 10 Jahrhunderten zu verbreiten. Deshalb präsentiert sich der Islam in Tadschikistan heute in einer „Light-Form“. Das bedeutet, dass nur ein kleiner Prozentsatz der Menschen praktizierende Muslime sind – sie beten fünfmal am Tag, Frauen tragen Kopfbedeckung, sie trinken keinen Alkohol, essen kein Schweinefleisch usw. Aber die Mehrheit der Bevölkerung feiert lediglich religiöse Feiertage, fastet während des Ramadan, lernt den Heiligen Koran auswendig – das ist alles.',
    tajik23: 'Sie können also tragen, was Sie wollen, und müssen sich nicht verhüllen. Nur wenn Sie eine Moschee oder eine Kirche besuchen, müssen Frauen leichte Mäntel (so dass kein Körperteil unbedeckt ist) und ein Kopftuch tragen. Männer, die eine Kirche betreten, müssen ihren Hut abnehmen. Eine weitere zu beachtende Sache ist der Besuch von Friedhöfen. Ausländer fotografieren gerne Gräber, weil sie ganz anders sind als die, die sie sonst sehen. Da sie alle auf dem Land liegen, mögen es die Einheimischen nicht, wenn Fremde dort zu lange herumlaufen, laut miteinander reden und lachen. Es ist offensichtlich, dass sie das beleidigen könnte, weil sie nicht wollen, dass die Geister ihrer Familienmitglieder belästigt werden. Es ist in Ordnung, wenn Sie einfach schnell und leise ein Foto machen.',
    tajik24: 'FEIERTAGE',
    tajik25: '1. Januar – Neujahr, 7. Januar – Orthodoxes Weihnachtsfest, 23. Februar – Tag des Vaterlandsverteidigers, 8. März – Internationaler Frauentag, 21. März – Nowruz, 1. Mai – Tag der Arbeit, 9. Mai – Tag des Sieges, Orozo Ait (Eid al-Fitr) und Kurman Ait (Eid al-Adha) – Datum ändert sich jährlich, 9. September – Unabhängigkeitstag, 6. November – Tag der Verfassung.',
    tajik26: 'TADSCHIKISCHE KÜCHE',
    tajik27: 'Traditionelle tadschikische Gerichte basieren auf Hammel-, Rind- und Hühnerfleisch sowie verschiedenen Milchprodukten. Die Zubereitungstechniken und Hauptzutaten sind stark von der nomadischen Lebensweise des Landes geprägt. Viele Kochtechniken sind daher auf die langfristige Konservierung von Lebensmitteln ausgerichtet. Hammel- und Rindfleisch sind die beliebtesten Fleischsorten, obwohl sich viele Tadschiken diese heutzutage nicht mehr regelmäßig leisten können.',
    tajik28: 'Was man in Tadschikistan tun und lassen sollte',
    tajik29: 'Tun Sie Folgendes: Sagen Sie Hallo (vorzugsweise auf Tadschikisch – Salam Aleikum), wenn Sie ankommen (es zu wiederholen, wenn Sie dieselbe Person sehen, gilt für Tadschiken jedoch als seltsam); Nehmen Sie Essen und Getränke mit der rechten Hand oder mit beiden Händen an. Die Leute glauben, dass böse Geister alles mit der linken Hand tun. Wenn Sie eine Moschee betreten, benutzen Sie zuerst Ihr rechtes Bein (während Sie eine Toilette zuerst mit dem linken Bein betreten müssen); Wenn Sie Essen auf dem Boden oder Fußboden sehen, heben Sie es auf und legen Sie es höher, damit die Vögel es fressen können; Fragen Sie immer um Erlaubnis, bevor Sie ein Foto machen, und respektieren Sie die Antwort. Im Allgemeinen mögen die Leute das und sie bitten Sie sogar, ein Foto von ihnen zu machen; Frauen müssen ihre Köpfe bedecken, wenn sie eine Kirche oder Moschee betreten; Sagen Sie Danke (Tadschikisch – rahmat), wenn Sie etwas bekommen; Wenn Sie einer Person Respekt erweisen möchten, schütteln Sie ihr mit beiden Händen die Hand; Ziehe deine Schuhe aus, wenn du eine Jurte oder ein Haus betrittst; Wenn dich jemand zum Essen einlädt, komm an den Tisch und nimm dir zumindest ein Stück von etwas.',
    tajik30: 'Nicht',
    tajik31: 'Pfeifen Sie in einem Zimmer oder einer Jurte. Die Leute glauben, dass sie vielleicht kein Geld mehr haben; Steigen Sie über die Feuerstelle. Feuer ist für Nomaden heilig; Richten Sie ein Messer auf jemanden. Geben Sie zuerst einen Messergriff weiter; Seien Sie überrascht, wenn Ihnen ein Tadschike eine halbvolle traditionelle Tasse Tee gibt; Werfen Sie alle Lebensmittel in den Mülleimer; Handeln Sie (zu) aggressiv. In vielen Ländern können Sie 30-50 % Rabatt heraushandeln, aber nicht in Tadschikistan. Normalerweise können die Leute Ihnen nicht mehr als 5 % geben.',
    tajik32: 'SOUVENIRS',
    tajik33: 'Wenn Sie Souvenirs kaufen möchten, können Sie welche aus Leder, Holz oder Filz kaufen. Dies sind die Hauptmaterialien, aus denen traditionelle Souvenirs hergestellt werden. Je nachdem, woher Sie kommen, können sie sogar praktisch sein! Filzhüte, -schals und -schlafanzüge sind beispielsweise ideal für den kalten Winter. Sie sind nicht nur Souvenirs, sondern bei den Einheimischen sehr beliebt.'


    

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









