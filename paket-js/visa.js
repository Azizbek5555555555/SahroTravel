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
    none7: 'Visa',
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
    


    visa1: 'How to get an Uzbek visa? Assistance in applying for an Uzbekistan visa!',
    visa2: 'According to the legislation of the Republic of Uzbekistan, foreign citizens and stateless persons may enter Uzbekistan or transit through the country only on the basis of an entry visa.',
    visa3: 'Foreign citizens and stateless persons can obtain visas at the diplomatic missions and consular offices of the Republic of Uzbekistan abroad on the basis of visa support (confirmation of the Ministry of Foreign Affairs of the Republic of Uzbekistan).',
    visa4: 'Visa support is provided on the basis of an application of the inviting organization, company and persons permanently or temporarily residing in Uzbekistan, submitted to the Ministry of Foreign Affairs of the Republic of Uzbekistan.',
    visa5: 'List of required documents for inviting foreigners by organizations and companies:',
    visa6: 'Visa application on the main letter of organizations and companies; e-form of the website evisa.mfa.uz; copies of passports of the invited person, the head of the organization, the authorized person of the organization for submitting the documents; copies of the documents of the organization (license, certificate, etc.); copies of the instructions to the head and the authorized person; copy of the power of attorney for the authorized person; for the entry visa at the airport “Tashkent” it is necessary to provide copies of the tickets; certificate of employment of the invited person.',
    visa7: 'List of documents required for inviting foreigners by persons:',
    visa8: 'Visa application form; E-form from the website evisa.mfa.uz; Copies of passports of the invitee and the inviting person; An original invitation from the internal authorities of Uzbekistan; Copies of documents confirming the relationship between the invitee and the inviting person; Copies of tickets must be provided for an entry visa at the airport “Tashkent”. Processing of a visa application takes up to 10 working days if the documents were submitted in the established order.',
    visa9: 'To apply for a visa, foreign citizens and stateless persons must submit the following documents to the diplomatic mission or consular office of Uzbekistan abroad:',
    visa10: 'Passport or document of a stateless person, the expiry date of which must exceed the validity of the visa by at least 3 months; 2 copies of the duly completed visa application form; 2 colour passport photographs.',
    visa11: 'To obtain a transit visa, foreign citizens and stateless persons must, in addition to the above documents, have a visa of the final country of destination and travel documents with a confirmed date of departure from Uzbekistan. In this case, the processing of the visa application takes 3 working days.',
    visa12: 'Foreign citizens and stateless persons from countries where there is no diplomatic mission or consular mission of the Republic of Uzbekistan can obtain a visa upon arrival at the Visa Department of the Ministry of Foreign Affairs of the Republic of Uzbekistan at Tashkent International Airport.',
    visa13: 'In this case, the inviting natural or legal person in Uzbekistan must submit a proper application to the Ministry of Foreign Affairs of the Republic of Uzbekistan in advance, obtain a visa confirmation (stamp) from the visa department of the consular department and forward it to the invited person.',
    visa14: 'This confirmation must be presented by the invited person when purchasing a plane ticket and passing through passport control. On this basis, the visa is issued upon arrival at the visa department of the Ministry of Foreign Affairs of the Republic of Uzbekistan at Tashkent International Airport.',
    visa15: 'The legislation of the Republic of Uzbekistan provides for the following consular fees for visa issuance:',
    visa16: 'a- For single entry visas:',
    visa17: 'up to 7 days; up to 15 days; up to 30 days; up to 3 months; up to 6 months; up to 1 year. Note: Each additional entry increases the fee by $10.',
    visa18: 'b- For multiple entry visas:',
    visa19: 'up to 6 months; up to 1 year. c) For transit visas: up to 72 hours; double entry transit visa. d) For group visas (groups must consist of more than 5 people, excluding children under 16 years of age).',
    visa20: 'SARBON TRANS TOUR, [30.10.2022 20:56] up to 15 days; up to 30 days.',
    visa21: 'In addition to these fees, fees for reimbursement of actual costs related to visa issuance (administrative fees) are also paid. The amount of these fees depends on the place where the visa is issued (regardless of the applicants citizenship).',
    visa22: '*Citizens of countries with which Uzbekistan has concluded relevant bilateral agreements may be subject to different entry visa procedures.',
    visa23: 'visa requirements for some countries',
    visa24: '1. A bilateral visa-free regime has been agreed with Kyrgyzstan (up to 60 days), Tajikistan (up to 30 days), Azerbaijan, Armenia, Belarus, Georgia, Kazakhstan, Moldova, Russia and Ukraine.',
    visa25: '2. For a period of 30 days, a visa exemption is introduced for citizens of',
    visa26: 'Antigua and Barbuda, Australian Union, Austrian Republic, Argentine Republic, Bahamas, Barbados, Belize, Bosnia and Herzegovina, Commonwealth of Dominica, Costa Rica, Cuba, Dominicana, El Salvador, Vatican, Grand Duchy of Luxembourg, Grenada, Guatemala, Hungary, State of Brunei Darussalam, Honduras, Korea, Republic of, Hellenic Republic, Israel, Indonesia, Ireland, Iceland, Italian Republic, Canada, Principality of Andorra, Liechtenstein, Nicaragua, Principality of Monaco, Panama, Kingdom of Belgium, Kingdom of Denmark, Kingdom of Spain, Kingdom of the Netherlands, Kingdom of Norway, Kingdom of Sweden, Republic of Latvia, Republic of Lithuania, Trinidad and Tobago, Malaysia, Mexico, Mongolia, New Zealand, Republic of Portugal, Republic of Bulgaria, Republic of Cyprus, Republic of Korea, Republic of Malta, Republic of Poland, Republic of San Marino, Republic of Serbia, Singapore, Republic of Slovenia, Republic of Croatia, Republic of Chile, Romania, Slovak Republic, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, United Kingdom of Great Britain and Northern Ireland, United Arab Emirates, Republic of Turkey, Federative Republic of Brazil, Federal Republic of Germany, Republic of Finland, French Republic, Montenegro, Czech Republic, Swiss Confederation, Republic of Estonia, Japan, Jamaica. The visa-free regime applies to citizens of these countries, holders of all categories of (diplomatic, service and civil) passports for a stay in the Republic of Uzbekistan for up to 30 days, regardless of the purpose of the trip.',
    visa27: 'A valid national passport or other alternative document for travel abroad is required for entry.',
    visa28: 'Für Staatenlose mit ständigem Wohnsitz im Hoheitsgebiet dieser Länder gilt die Visumfreiheit nicht.',
    visa29: 'Accordingly, the visa-free regime is valid for 30 days from the date of entry into Uzbekistan. Before the expiration of the 30-day visa-free period, a foreign citizen must leave the Republic of Uzbekistan.',
    visa30: 'Exceeding the 30-day visa-free stay is considered a violation of the rules of residence for foreign citizens in the Republic of Uzbekistan.',
    visa31: 'If a stay in Uzbekistan for more than 30 days is required, a foreign citizen must, in accordance with the established procedure, obtain an entry visa to the Republic of Uzbekistan corresponding to the purpose of his or her trip.',
    visa32: '3. Visa-free entry to the Republic of Uzbekistan for foreign citizens up to 16 years of age with a biometric travel document. In this case, they must be accompanied by a legal representative and can stay in Uzbekistan for the duration of the accompanying persons visa, but not more than ninety days from the date of entry into the country.',
    visa33: '4. A visa-free regime applies to China, Hungary, Tajikistan and Turkmenistan (up to 30 days), Vietnam and the Republic of Korea (up to 60 days), Brazil, Latvia, Poland, Romania, Singapore, Slovakia, Estonia, Kuwait and Turkey (up to 90 days).',
    visa34: 'Citizens of these countries who hold a diplomatic passport and are accredited as employees of a diplomatic mission or consulate of their country on the territory of Uzbekistan, as well as their family members, have the right to enter and stay without a visa for the entire period of their work.',
    visa35: 'SARBON TRANS TOUR, 5. Introduction of the system for issuing electronic tourist visas (e-visa.gov.uz) for foreign citizens, which has simplified the procedure for issuing visas (list of countries in Appendix 1);',
    visa36: 'As of 15 March 2019, a new system of electronic entry visas with a validity period of 30 days was introduced:',
    visa37: 'Double entry with consular fee, multiple entry with consular fee. New option of short-term, visa-free transit entry into the Republic of Uzbekistan for a period of five days for citizens of several countries (list of countries in Appendix 2) introduced.',
    visa38: 'In this case, foreigners must enter through international airports of Uzbekistan and show the border guard that they have a flight ticket from the national airline “Uzbekistan Airways” to a third country.',
    visa39: 'This procedure applies to transit passengers who wish to explore the sights of Uzbekistan.',
    visa40: '7. Uzbekistan and Japan issue visas without consular fees on a reciprocal basis',
    visa41: 'Appendix 1',
    visa42: 'Citizens of the following countries can obtain an electronic visa for Uzbekistan: Citizens of the following countries can obtain an electronic visa for Uzbekistan:',
    visa43: 'Albania, Algeria, Angola, Bahrain, Bangladesh, Bolivia, Bhutan, Cambodia, China, Colombia, Ivory Coast, Ecuador, Egypt, Fiji, Guyana, India, Jordan, Kiribati, Kuwait, Laos, Lebanon, Macedonia, Maldives, Marshall Islands, Mauritius, Micronesia, Morocco, Nauru, Nepal, Oman, Palau, Paraguay, Peru, Philippines, Qatar, Samoa, Saudi Arabia, Seychelles, Solomon Islands, Sri Lanka, Suriname, Thailand, Tonga, Tunisia, Uruguay, USA, Vanuatu, Venezuela, Vietnam. Note: If necessary, the Ministry of Foreign Affairs of the Republic of Uzbekistan has the right to impose restrictions on obtaining an electronic entry visa for foreign citizens for a period of up to 30 days.',
    visa44: 'Appendix 2',
    visa45: 'The list of countries whose citizens can enjoy visa-free transit entry and a stay of up to 5 days',
    visa46: 'Albania, Algeria, Bahrain, Bhutan, China (including Hong Kong), Colombia, Ecuador, Equatorial Guinea, Fiji, Gabon, Guyana, India, Kuwait, Lebanon, Macedonia, Maldives, Mauritius, Morocco, Nauru, Oman, Palau, Peru, Philippines, Qatar, Saudi Arabia, Seychelles, South Africa, Sri Lanka, Suriname, Thailand, Tunisian Republic, Turkmenistan, Uruguay, USA, Venezuela, Vietnam.',
    visa47: 'Visa-free entry to the Republic of Uzbekistan for a period of 30 days for citizens of the United Arab Emirates from January 1, 2020 also applies to foreign citizens who have received the status of a resident of the United Arab Emirates. When entering the Republic of Uzbekistan, foreign citizens who have received the status of a resident of the United Arab Emirates present an original residence visa, the validity of which is at least 90 days at the time of application.'
    
    
    
    




      },
      de: {


    none1: 'Unsere Kontakte:',
    none2: 'Heim',
    none3: 'Über uns',
    none4: 'Reisepakete',
    none5: 'Preise für Reisepakete',
    none6: 'Zugang',
    none7: 'Visum',
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

    visa1: 'Wie erhalte ich ein usbekisches Visum? Unterstützung bei der Beantragung eines Usbekistan-Visums!',
    visa2: 'Gemäß der Gesetzgebung der Republik Usbekistan können ausländische Staatsbürger und Staatenlose nur auf der Grundlage eines Einreisevisums nach Usbekistan einreisen oder das Staatsgebiet des Landes zur Durchreise durchqueren.',
    visa3: 'Ausländische Staatsbürger und Staatenlose können auf Grundlage der Visaunterstützung (Bestätigung des Außenministeriums der Republik Usbekistan) Visa bei den diplomatischen Vertretungen und konsularischen Vertretungen der Republik Usbekistan im Ausland erhalten.',
    visa4: 'Die Visaunterstützung wird auf der Grundlage eines Antrags der einladenden Organisation, des Unternehmens und der Personen gewährt, die ihren ständigen oder vorübergehenden Wohnsitz in Usbekistan haben und beim Außenministerium der Republik Usbekistan eingereicht werden.',
    visa5: 'Liste der erforderlichen Dokumente für die Einladung von Ausländern durch Organisationen und Unternehmen:',
    visa6: 'Visumantrag auf dem Hauptschreiben von Organisationen und Unternehmen; E-Formular der Website evisa.mfa.uz; Kopien der Pässe der eingeladenen Person, des Leiters der Organisation, der autorisierten Person der Organisation zur Einreichung der Dokumente; Kopien der Dokumente der Organisation (Lizenz, Zertifikat usw.); Kopien der Anweisungen an den Leiter und die autorisierte Person; Kopie der Vollmacht für die autorisierte Person; Für das Einreisevisum am Flughafen „Taschkent“ müssen Kopien der Tickets vorgelegt werden; Arbeitsbescheinigung der eingeladenen Person.',
    visa7: 'Liste der erforderlichen Dokumente zur Einladung von Ausländern durch Personen:',
    visa8: 'Visumantragsformular; E-Formular der Website evisa.mfa.uz; Kopien der Pässe des Eingeladenen und der einladenden Person; Eine Originaleinladung der Innenbehörden Usbekistans; Kopien von Dokumenten, die die Beziehung zwischen dem Eingeladenen und der einladenden Person bestätigen; Für ein Einreisevisum am Flughafen „Taschkent“ müssen Kopien der Tickets vorgelegt werden. Die Bearbeitung eines Visumantrags dauert bis zu 10 Arbeitstage, wenn die Dokumente in der festgelegten Reihenfolge eingereicht wurden.',
    visa9: 'Zur Beantragung eines Visums müssen ausländische Staatsbürger und Staatenlose bei der diplomatischen Vertretung oder konsularischen Vertretung Usbekistans im Ausland folgende Unterlagen einreichen:',
    visa10: 'Reisepass oder Dokument eines Staatenlosen, dessen Ablaufdatum die Gültigkeitsdauer des Visums um mindestens 3 Monate überschreiten muss; 2 Kopien des ordnungsgemäß ausgefüllten Visumantragsformulars; 2 farbige Passfotos.',
    visa11: 'Für ein Transitvisum müssen ausländische Staatsbürger und Staatenlose zusätzlich zu den oben genannten Dokumenten ein Visum des endgültigen Bestimmungslandes und Reisedokumente mit bestätigtem Abreisedatum aus Usbekistan besitzen. In diesem Fall beträgt die Bearbeitung des Visumantrags 3 Arbeitstage.',
    visa12: 'Ausländische Staatsbürger und Staatenlose aus Ländern, in denen es keine diplomatische Vertretung oder konsularische Mission der Republik Usbekistan gibt, können bei ihrer Ankunft ein Visum bei der Visaabteilung des Außenministeriums der Republik Usbekistan am internationalen Flughafen Taschkent erhalten.',
    visa13: 'In diesem Fall muss die einladende natürliche oder juristische Person in Usbekistan im Voraus einen ordnungsgemäßen Antrag an das Außenministerium der Republik Usbekistan stellen, eine Visumsbestätigung (Stempel) der Visaabteilung der Konsularabteilung einholen und diese an die eingeladene Person weiterleiten.',
    visa14: 'Diese Bestätigung muss die eingeladene Person beim Kauf eines Flugtickets und beim Durchlaufen der Passkontrolle vorzeigen. Auf dieser Grundlage wird das Visum bei der Ankunft in der Visaabteilung des Außenministeriums der Republik Usbekistan am internationalen Flughafen Taschkent ausgestellt.',
    visa15: 'Die Gesetzgebung der Republik Usbekistan sieht folgende Konsulargebühren für die Visumerteilung vor:',
    visa16: 'a- Für Visa für die einmalige Einreise:',
    visa17: 'bis zu 7 Tage; bis zu 15 Tage; bis zu 30 Tage; bis zu 3 Monate; bis zu 6 Monate; bis zu 1 Jahr. Hinweis: Für jeden weiteren Eintrag erhöht sich die Gebühr um 10 $.',
    visa18: 'b- Für Visa für die mehrfache Einreise:',
    visa19: 'bis zu 6 Monaten; bis zu 1 Jahr. c) Für Transitvisa: bis zu 72 Stunden; Transitvisum für die doppelte Einreise. d) Für Gruppenvisa (Gruppen müssen aus mehr als 5 Personen bestehen, Kinder unter 16 Jahren ausgenommen).',
    visa20: 'SARBON TRANS TOUR, [30.10.2022 20:56 Uhr] bis zu 15 Tage; bis zu 30 Tage.',
    visa21: 'Außer diesen Gebühren werden auch die Gebühren für die Erstattung der tatsächlichen Kosten im Zusammenhang mit der Visumerteilung (Verwaltungsgebühren) gezahlt. Die Höhe dieser Gebühren hängt vom Ort der Visumerteilung ab (unabhängig von der Staatsbürgerschaft des Antragstellers).',
    visa22: '*Für Bürger der Länder, mit denen Usbekistan entsprechende bilaterale Abkommen geschlossen hat, gelten möglicherweise andere Verfahren zur Erteilung eines Einreisevisums.',
    visa23: 'Visabestimmungen für einige Länder',
    visa24: '1. Ein bilaterales visumfreies Regime wurde mit Kirgisistan (bis zu 60 Tage), Tadschikistan (bis zu 30 Tage), Aserbaidschan, Armenien, Weißrussland, Georgien, Kasachstan, Moldawien, Russland und der Ukraine vereinbart.',
    visa25: '2. Für einen Zeitraum von 30 Tagen wird eine Visumbefreiung eingeführt für Bürger von',
    visa26: 'Antigua und Barbuda, Australische Union, Österreichische Republik, Argentinische Republik, Bahamas, Barbados, Belize, Bosnien und Herzegowina, Commonwealth Dominica, Costa Rica, Kuba, Dominicana, El Salvador, Vatikan, Großherzogtum Luxemburg, Grenada, Guatemala, Ungarn, Staat Brunei Darussalam, Honduras, Korea, Republik, Griechische Republik, Israel, Indonesien, Irland, Island, Italienische Republik, Kanada, Fürstentum Andorra, Liechtenstein, Nicaragua, Fürstentum Monaco, Panama, Königreich Belgien, Königreich Dänemark, Königreich Spanien, Königreich der Niederlande, Königreich Norwegen, Königreich Schweden, Republik Lettland, Republik Litauen, Trinidad und Tobago, Malaysia, Mexiko, Mongolei, Neuseeland, Republik Portugal, Republik Bulgarien, Republik Zypern, Republik Korea, Republik Malta, Republik Polen, Republik San Marino, Republik Serbien, Singapur, Republik Slowenien, Republik Kroatien, Republik Chile, Rumänien, Slowakische Republik, St. Kitts und Nevis, St. Lucia, St. Vincent und die Grenadinen, Vereinigtes Königreich Großbritannien und Nordirland, Vereinigte Arabische Emirate, Republik Türkei, Föderative Republik Brasilien, Bundesrepublik Deutschland, Republik Finnland, Französische Republik, Montenegro, Tschechische Republik, Schweizerische Eidgenossenschaft, Republik Estland, Japan, Jamaika. Die visumfreie Regelung gilt für Bürger dieser Länder, Inhaber aller Kategorien von (Diplomaten-, Dienst- und Zivilpässe) für einen Aufenthalt in der Republik Usbekistan von bis zu 30 Tagen, unabhängig vom Reisezweck.',
    visa27: 'Für die Einreise ist ein gültiger nationaler Reisepass oder ein anderes Ersatzdokument für Reisen ins Ausland erforderlich.',
    visa28: 'Für Staatenlose mit ständigem Wohnsitz im Hoheitsgebiet dieser Länder gilt die Visumfreiheit nicht.',
    visa29: 'Dementsprechend gilt die visumfreie Regelung 30 Tage lang ab dem Datum der Einreise nach Usbekistan. Vor Ablauf der 30-tägigen visumfreien Aufenthaltsdauer muss ein ausländischer Staatsbürger die Republik Usbekistan verlassen.',
    visa30: 'Das Überschreiten des 30-tägigen visumfreien Aufenthalts gilt als Verstoß gegen die Aufenthaltsregeln für ausländische Staatsbürger in der Republik Usbekistan.',
    visa31: 'Wenn ein Aufenthalt in Usbekistan länger als 30 Tage erforderlich ist, muss ein ausländischer Staatsbürger entsprechend dem festgelegten Verfahren ein Einreisevisum für die Republik Usbekistan einholen, das seinem Reisezweck entspricht.',
    visa32: '3. Visumfreie Einreise in die Republik Usbekistan für ausländische Staatsbürger bis 16 Jahre mit einem biometrischen Reisedokument. In diesem Fall müssen sie von einem gesetzlichen Vertreter begleitet werden und können sich für die Dauer des Visums der Begleitperson in Usbekistan aufhalten, jedoch nicht länger als neunzig Tage ab dem Datum der Einreise in das Land.',
    visa33: '4. Eine visumfreie Regelung gilt für China, Ungarn, Tadschikistan und Turkmenistan (bis zu 30 Tage), Vietnam und die Republik Korea (bis zu 60 Tage), Brasilien, Lettland, Polen, Rumänien, Singapur, die Slowakei, Estland, Kuwait und die Türkei (bis zu 90 Tage).',
    visa34: 'Bürger dieser Länder, die einen Diplomatenpass besitzen und als Mitarbeiter einer diplomatischen Mission oder eines Konsulats ihres Landes auf dem Gebiet Usbekistans akkreditiert sind, sowie deren Familienangehörige haben für die gesamte Dauer ihrer Arbeit das Recht auf Einreise und Aufenthalt ohne Visum.',
    visa35: 'SARBON TRANS TOUR, 5. Einführung des Systems zur Ausstellung elektronischer Touristenvisa (e-visa.gov.uz) für ausländische Staatsbürger, das das Verfahren zur Visumserteilung vereinfacht hat (Liste der Länder in Anlage 1);',
    visa36: 'Ab dem 15. März 2019 wurde ein neues System elektronischer Einreisevisa mit einer Gültigkeitsdauer von 30 Tagen eingeführt:',
    visa37: 'Zweimalige Einreise mit Konsulargebühr, Mehrfache Einreise mit Konsulargebühr. Neue Möglichkeit der kurzfristigen, visumfreien Transiteinreise in die Republik Usbekistan für einen Zeitraum von fünf Tagen für Bürger mehrerer Länder (Länderliste in Anlage 2) eingeführt.',
    visa38: 'In diesem Fall müssen die Ausländer über internationale Flughäfen Usbekistans einreisen und dem Grenzbeamten vorzeigen, dass sie ein Flugticket der nationalen Fluggesellschaft „Uzbekistan Airways“ in ein Drittland besitzen.',
    visa39: 'Dieses Verfahren gilt für Transitpassagiere, die die Sehenswürdigkeiten Usbekistans erkunden möchten.',
    visa40: '7. Usbekistan und Japan erteilen Visa ohne Konsulargebühren auf gegenseitiger Basis',
    visa41: 'Anhang 1',
    visa42: 'Bürger der folgenden Länder können ein elektronisches Visum für Usbekistan erhalten: Bürger der folgenden Länder können ein elektronisches Visum für Usbekistan erhalten:',
    visa43: 'Albanien, Algerien, Angola, Bahrain, Bangladesch, Bolivien, Bhutan, Kambodscha, China, Kolumbien, Elfenbeinküste, Ecuador, Ägypten, Fidschi, Guyana, Indien, Jordanien, Kiribati, Kuwait, Laos, Libanon, Mazedonien, Malediven, Marshallinseln, Mauritius, Mikronesien, Marokko, Nauru, Nepal, Oman, Palau, Paraguay, Peru, Philippinen, Katar, Samoa, Saudi-Arabien, Seychellen, Salomonen, Sri Lanka, Suriname, Thailand, Tonga, Tunesien, Uruguay, USA, Vanuatu, Venezuela, Vietnam. Hinweis: Bei Bedarf hat das Außenministerium der Republik Usbekistan das Recht, Beschränkungen für die Erlangung eines elektronischen Einreisevisums für ausländische Staatsbürger für einen Zeitraum von bis zu 30 Tagen zu verhängen.',
    visa44: 'Anhang 2',
    visa45: 'Die Liste der Länder, deren Bürger visumfreie Transiteinreise und einen Aufenthalt von bis zu 5 Tagen genießen können',
    visa46: 'Albanien, Algerien, Bahrain, Bhutan, China (einschließlich Hongkong), Kolumbien, Ecuador, Äquatorialguinea, Fidschi, Gabun, Guyana, Indien, Kuwait, Libanon, Mazedonien, Malediven, Mauritius, Marokko, Nauru, Oman, Palau, Peru, Philippinen, Katar, Saudi-Arabien, Seychellen, Südafrika, Sri Lanka, Suriname, Thailand, Tunesische Republik, Turkmenistan, Uruguay, USA, Venezuela, Vietnam.',
    visa47: 'Die visumfreie Einreise in die Republik Usbekistan für einen Zeitraum von 30 Tagen für Bürger der Vereinigten Arabischen Emirate ab dem 1. Januar 2020 gilt auch für ausländische Staatsbürger, die den Status eines Einwohners der Vereinigten Arabischen Emirate erhalten haben. Bei der Einreise in die Republik Usbekistan legen ausländische Staatsbürger, die den Status eines Einwohners der Vereinigten Arabischen Emirate erhalten haben, ein Original-Aufenthaltsvisum vor, dessen Gültigkeit zum Zeitpunkt der Antragstellung mindestens 90 Tage beträgt.',
    
    

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









