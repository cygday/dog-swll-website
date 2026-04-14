document.addEventListener('DOMContentLoaded', () => {
  const thumbs = Array.from(document.querySelectorAll('.puppy-gallery .thumb'));
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.querySelector('.lightbox-img');
  const lbCaption = document.querySelector('.lightbox-caption');
  const lbPrice = document.querySelector('.lightbox-price');
  const lbBuyBtn = document.querySelector('.buy-now-btn');
  const lbClose = document.querySelector('.lightbox-close');
  const lbPrev = document.querySelector('.lightbox-prev');
  const lbNext = document.querySelector('.lightbox-next');
  
  let currentIndex = 0;

  function openLightbox(img) {
    currentIndex = thumbs.indexOf(img);
    updateLightbox();
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function updateLightbox() {
    const img = thumbs[currentIndex];
    lbImg.src = img.src;
    lbImg.alt = img.alt || 'Puppy';
    lbCaption.textContent = img.alt || 'Puppy';
    lbPrice.textContent = img.getAttribute('data-price') ? `Price: NPR ${img.getAttribute('data-price')}` : '';
    const puppyName = img.alt || 'Puppy';
    const price = img.getAttribute('data-price') || '';
    const message = `Hi, I am interested in buying the ${puppyName} for NPR ${price}.`;
    const encodedMessage = encodeURIComponent(message);
    lbBuyBtn.href = `https://wa.me/9779849648701?text=${encodedMessage}`;
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    updateLightbox();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % thumbs.length;
    updateLightbox();
  }

  thumbs.forEach(img => {
    img.addEventListener('click', () => openLightbox(img));
  });

  // Only attach lightbox listeners if elements exist (on home page)
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', showPrev);
  if (lbNext) lbNext.addEventListener('click', showNext);
  
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.getAttribute('aria-hidden') === 'false') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
      }
    });
  }
});

// thank you message for form validation

const joinForm = document.getElementById('joinForm');
if (joinForm) {
    joinForm.addEventListener('submit', function(event) {
        // 1. Stop the page from refreshing
        event.preventDefault();

        // 2. Hide the form and the instruction text
        document.getElementById('joinForm').style.display = 'none';
        const formInstruction = document.getElementById('form-instruction');
        if (formInstruction) formInstruction.style.display = 'none';

        // 3. Show the "Thank You" message
        const thankYou = document.getElementById('thankYouMessage');
        if (thankYou) thankYou.style.display = 'block';

        // Optional: Log to console for testing
        console.log("Form submitted successfully!");
    });
}


//search

const dogs = [
  { name: "Beagle", breed: "Hound", description: "Friendly, curious, and energetic hunting dog.", image: "./image/beagle.jpg" },
  { name: "Golden Retriever", breed: "Retriever", description: "Friendly and intelligent family companion.", image: "./image/golden-retriever.jpg" },
  { name: "Labrador", breed: "Retriever", description: "Loyal, outgoing, and even-tempered.", image: "./image/labrador.jpg" },
  { name: "Poodle", breed: "Poodle", description: "Intelligent and versatile companion dog.", image: "./image/poodle.jpg" },
  { name: "Pug", breed: "Toy", description: "Charming, mischievous, and playful small dog.", image: "./image/pug.jpg" },
  { name: "Rottweiler", breed: "Working", description: "Confident, loyal, and devoted guardian.", image: "./image/rottweiler.jpg" },
  { name: "German Shepherd", breed: "Herding", description: "Intelligent, versatile, and loyal working dog.", image: "./image/shepherd.jpg" },
  { name: "Japanese Spitz", breed: "Spitz", description: "Small, white, fluffy companion dog.", image: "./image/spitz.jpg" },
  { name: "Tibetan Mastiff", breed: "Mastiff", description: "Powerful, protective, and majestic guardian breed.", image: "./image/tibetian-mastiff.jpg" }
];

// 2. Main search function
function runSearch() {
    const resultsContainer = document.getElementById('search-results');
    const statusContainer = document.getElementById('search-status');
    
    // Only run this if we are on the search page
    if (!resultsContainer || !statusContainer) {
        console.log('Search containers not found. Not on search page.');
        return;
    }

    console.log('Running search...');

    // Get search term from URL: k9pawss.netlify.app/search?q=spitz
    const params = new URLSearchParams(window.location.search);
    const query = (params.get('q') || '').toLowerCase().trim();
    
    console.log('Search query:', query);

    // If no query, show all dogs
    const filteredDogs = query === '' ? dogs : dogs.filter(dog => 
        dog.name.toLowerCase().includes(query) || 
        dog.breed.toLowerCase().includes(query)
    );

    console.log('Filtered results:', filteredDogs.length);

    // Display Results
    if (filteredDogs.length > 0) {
        statusContainer.innerHTML = `<h2>Showing ${filteredDogs.length} result(s) for "${query}"</h2>`;
        resultsContainer.innerHTML = filteredDogs.map(dog => `
            <div class="dog-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center; background: #f9f9f9;">
                <img src="${dog.image}" alt="${dog.name}" style="width:100%; max-width:200px; height:200px; object-fit:cover; border-radius:8px;">
                <h3 style="margin-top: 10px;">${dog.name}</h3>
                <p style="color:#666; margin: 5px 0;"><strong>Breed:</strong> ${dog.breed}</p>
                <p style="color:#888; font-size: 14px;">${dog.description}</p>
            </div>
        `).join('');
    } else {
        statusContainer.innerHTML = `<h2>No results found for "${query}"</h2><p>Try searching for: Beagle, Golden Retriever, Labrador, Poodle, Pug, Rottweiler, German Shepherd, Spitz, or Tibetan Mastiff</p>`;
        resultsContainer.innerHTML = '';
    }
}

// Run search logic when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runSearch);
} else {
    // If script loads after DOMContentLoaded has already fired
    runSearch();
}

