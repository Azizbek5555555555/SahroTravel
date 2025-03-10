document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');
  
    // Store translations
    const translations = {
        en: {
  
  
      
  
  
      
      none83: 'Our',
      none84: 'Travel campaign',
      none85: 'Home',
      none86: 'About Us',
      none87: 'Travel packages',
      none88: 'Discover Uzbekistan with SAHRO TRAVEL!',
      none89: 'About Us',
      none90: 'We study the local culture',
      none91: '- Historical monuments',
      none92: 'are interesting',
      none93: 'We study the local culture',
      none94: '- Historical monuments',
      none95: 'are interesting',
      none96: 'We study the local culture',
      none97: '- Historical monuments',
      none98: 'are interesting',
      none99: 'Leave your time and your desired trip to us! You can contact us and your travel request will be processed and returned as quickly as possible by our highly qualified staff.',
      none100: 'Samarkand',
      none101: 'Tashkent',
      none102: 'Khiva',
      none103: 'Urgentsch',
      none104: 'Tailor-made 5-star hotels according to customer requirements.',
      none105: 'The best types of transport from anywhere in the world.',
      none106: 'Schengen visa assistance for any part of the world.',
      none107: 'Best possible ticket prices from real airlines',
      none108: 'Ideally based on data we have received from our customers over the years of the companys existence.',
        
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

    look13: 'Agency timeline',
    look14: 'Entrust your time and your desired trip to us! You can contact us and your travel request will be processed and returned as quickly as possible by our highly qualified staff. We are always happy to help you!',
    look15: 'Our story',
    look16: 'For those interested in history and environmental change, we organize exclusive trips to the Aral Sea, where you can experience first-hand the dramatic transformation of what was once the second largest inland sea in the world.',
    look17: 'We have assembled a team of dedicated and knowledgeable travel specialists',
    look18: 'Our team has years of experience in organizing individual and group trips to Uzbekistan and other countries in the Central Asian region. We also offer combined trips with neighboring countries to explore this fascinating part of the world more comprehensively.',
    look19: 'Our goal',
    look20: 'At SAHRO TRAVEL, we pride ourselves on creating customized itineraries to suit your interests, preferences and budget. With our commitment to quality service at the best prices, we will ensure that your trip is smooth, enjoyable and truly memorable.',
    look21: 'Discover Uzbekistan with SAHRO TRAVEL!',
    look22: 'SAHRO TRAVEL is a long-standing tour operator specializing in unforgettable trips through Uzbekistan and Central Asia.',
  
  
  
  
  
  
        },
        de: {
  
  
     
  
  
  
      none83: 'Unsere',
      none84: 'Reisekampagne',
      none85: 'Heim',
      none86: 'Über uns',
      none87: 'Reisepakete',
      none88: 'Entdecken Sie Usbekistan mit SAHRO TRAVEL!',
      none89: 'Über uns',
      none90: 'Wir studieren die lokale Kultur',
      none91: '- Historische Denkmäler',
      none92: 'sind interessant,',
      none93: 'Wir studieren die lokale Kultur',
      none94: '- Historische Denkmäler',
      none95: 'sind interessant,',
      none96: 'Wir studieren die lokale Kultur',
      none97: '- Historische Denkmäler',
      none98: 'sind interessant,',
      none99: 'Lassen Sie Ihre Zeit und Ihre gewünschte Reise zu uns vertrauten! Sie können mit uns einen Kontakt aufnehmen und Ihre Reiseanfrage wird durch unseres hochqualifiziertes Personal so schnell wie möglich bearbeitet und zurückgesendet.',
      none100: 'Samarkand',
      none101: 'Taschkent',
      none102: 'Chiwa',
      none103: 'Urgentsch',
      none104: 'Maßgeschneiderte 5-Sterne-Hotels nach Kundenwünschen.',
      none105: 'Die besten Transportarten von überall auf der Welt.',
      none106: 'Unterstützung bei Schengen-Visa für jeden Teil der Welt.',
      none107: 'Bestmögliche Ticketpreise von echten Fluggesellschaften',
      none108: 'Idealerweise basierend auf Daten, die wir von unseren Kunden über die Jahre des Bestehens des Unternehmens erhalten haben.',
  
      

    look13: 'Zeitleiste der Agentur',
    look14: 'Lassen Sie Ihre Zeit und Ihre gewünschte Reise zu uns vertrauten! Sie können mit uns einen Kontakt aufnehmen und Ihre Reiseanfrage wird durch unseres hochqualifiziertes Personal so schnell wie möglich bearbeitet und zurückgesendet. Wir stehen Ihnen jederzeit gerne zur Verfügung!',
    look15: 'Unsere Geschichte',
    look16: 'Für alle, die sich für Geschichte und Umweltveränderungen interessieren, organisieren wir exklusive Reisen zum Aralsee, bei denen Sie die dramatische Transformation des einst zweitgrößten Binnenmeeres der Welt aus erster Hand miterleben können.',
    look17: 'Wir haben ein Team aus engagierten und sachkundigen Reisespezialisten zusammengestellt',
    look18: 'Unser Team verfügt über jahrelange Erfahrung in der Organisation von Individuell- und Gruppenreisen nach Usbekistan und in die weitere Laender der zentralasiatischen Region. Wir bieten auch kombinierte Reisen mit Nachbarländern an, um diesen faszinierenden Teil der Welt umfassender zu erkunden.',
    look19: 'Unser Ziel',
    look20: 'Bei SAHRO TRAVEL sind wir stolz darauf, maßgeschneiderte Reiserouten zu erstellen, die Ihren Interessen, Vorlieben und Ihrem Budget entsprechen. Mit unserem Engagement für qualitativ hochwertigen Service zu den besten Preisen sorgen wir dafür, dass Ihre Reise reibungslos, angenehm und wirklich unvergesslich wird.',
    look21: 'Entdecken Sie Usbekistan mit SAHRO TRAVEL!',
    look22: 'SAHRO TRAVEL ist ein mehrjahriger Reiseveranstalter, der sich auf unvergessliche Reisen durch Usbekistan und Zentralasien spezialisiert.',
      
  
  
      
  
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