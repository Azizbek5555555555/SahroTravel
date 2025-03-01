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