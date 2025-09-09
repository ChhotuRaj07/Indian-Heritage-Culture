const heritageData = {
  "Maharashtra": [
    {
      name: "Ajanta Caves",
      coords: [20.5519, 75.7033],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ajanta_Caves_-_Cave_19.jpg/640px-Ajanta_Caves_-_Cave_19.jpg",
      title: "Ajanta Caves",
      heritage: "Rock-cut Buddhist cave monuments dating from 2nd century BCE.",
      culture: "Buddhist paintings, sculptures, Indian art heritage.",
      food: "Local Maharashtrian cuisine nearby.",
      festivals: "Buddha Purnima celebrated by visitors.",
      issues: "Preservation of paintings due to humidity and human interference."
    }
  ],
  "Rajasthan": [
    {
      name: "Amber Fort",
      coords: [26.9855, 75.8513],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Amber_Fort_Jaipur_India.jpg/640px-Amber_Fort_Jaipur_India.jpg",
      title: "Amber Fort",
      heritage: "Historic fort of Amer, blending Hindu and Mughal styles.",
      culture: "Rajput architecture and traditions.",
      food: "Rajasthani Thali, Dal Baati Churma nearby.",
      festivals: "Elephant Festival, Jaipur Literature Festival (city).",
      issues: "Maintenance of old structures and controlling tourist crowds."
    }
  ],
  "Madhya Pradesh": [
    {
      name: "Khajuraho Temples",
      coords: [24.8316, 79.9193],
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Khajuraho_Temple.jpg",
      title: "Khajuraho Temples",
      heritage: "Famous for its stunning erotic sculptures.",
      culture: "Hindu temple architecture",
      food: "Chhattisgarhi sweets and snacks",
      festivals: "Khajuraho Dance Festival",
      issues: "Tourism pressures and preservation"
    }
  ],
  "Uttar Pradesh": [
    {
      name: "Taj Mahal",
      coords: [27.1751, 78.0421],
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      title: "Taj Mahal",
      heritage: "Mughal-era marble mausoleum.",
      culture: "Mughal art and architecture",
      food: "Mughlai cuisine",
      festivals: "Taj Mahotsav",
      issues: "Air pollution affecting monument"
    }
  ]
  
};



// Initialize map
const map = L.map('map').setView([22.9734, 78.6569], 5); // Centered in India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Side panel elements
const sidePanel = document.getElementById('sidePanel');
const closeBtn = document.getElementById('closeBtn');
const heritageImg = document.getElementById('heritageImg');
const heritageTitle = document.getElementById('heritageTitle');
const heritageDesc = document.getElementById('heritageDesc');
const heritageCulture = document.getElementById('heritageCulture');
const heritageFood = document.getElementById('heritageFood');
const heritageFestivals = document.getElementById('heritageFestivals');
const heritageIssues = document.getElementById('heritageIssues');

// Close button event listener with debugging
document.addEventListener('DOMContentLoaded', () => {
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      console.log('Close button clicked, closing side panel');
      sidePanel.classList.remove('open');
    });
  } else {
    console.error('Close button element (#closeBtn) not found in DOM');
  }
});

// Add markers for heritage sites
for (let state in heritageData) {
  heritageData[state].forEach(site => {
    const marker = L.marker(site.coords).addTo(map)
      .bindPopup(site.name, {
        className: 'custom-popup'
      });
    marker.on('click', () => {
      console.log(`Marker clicked: ${site.name}, opening side panel`);
      heritageImg.src = site.img.startsWith('http') ? site.img : `images/${site.img}`;
      heritageTitle.textContent = site.title;
      heritageDesc.textContent = site.heritage;
      heritageCulture.textContent = site.culture;
      heritageFood.textContent = site.food;
      heritageFestivals.textContent = site.festivals;
      heritageIssues.textContent = site.issues;
      sidePanel.classList.add('open');
    });
  });
}

// Carousel customization
const myCarousel = document.querySelector('#portfolioCarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  wrap: true
});

// Fade-in effect for heritage section
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.heritage-section');
  section.style.opacity = 0;
  section.style.transition = 'opacity 1s ease';

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
    }
  });
});

// Add this script in your footer or main JS file
function countdown() {
  const sihDate = new Date('2025-10-01'); // Replace with actual SIH date
  const now = new Date();
  const diff = sihDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById('sih-countdown').innerText = `${days} days left!`;
}
countdown();