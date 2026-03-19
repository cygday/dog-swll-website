document.addEventListener('DOMContentLoaded', () => {
  const thumbs = Array.from(document.querySelectorAll('.puppy-gallery .thumb'));
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.querySelector('.lightbox-img');
  const lbCaption = document.querySelector('.lightbox-caption');
  const lbPrice = document.querySelector('.lightbox-price');
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
    lbPrice.textContent = img.getAttribute('data-price') || '';
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

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', showPrev);
  lbNext.addEventListener('click', showNext);
  
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
});

// thank you message for form validation

document.getElementById('joinForm').addEventListener('submit', function(event) {
    // 1. Stop the page from refreshing
    event.preventDefault();

    // 2. Hide the form and the instruction text
    document.getElementById('joinForm').style.display = 'none';
    document.getElementById('form-instruction').style.display = 'none';

    // 3. Show the "Thank You" message
    const thankYou = document.getElementById('thankYouMessage');
    thankYou.style.display = 'block';

    // Optional: Log to console for testing
    console.log("Form submitted successfully!");
});


//search

const dogData = [
  { name: "Japanese Spitz", breed: "Spitz", description: "Small, white, fluffy companion.", image: "images/spitz1.jpg" },
  { name: "German Shepherd", breed: "Spitz", description: "Attentive and devoted.", image: "images/spitz2.jpg" },
  { name: "Golden Retriever", breed: "Retriever", description: "Friendly and intelligent.", image: "images/golden.jpg" },
  { name: "Pug"},
  {name: "beagle"},
  { name: "labrador"},
  { name: "rottweiler"},
  { name: "poddle"},
  { name: "tibetian mastiff"}
];

// 2. Main search function
function runSearch() {
    const resultsContainer = document.getElementById('search-results');
    const statusContainer = document.getElementById('search-status');
    
    // Only run this if we are on the search page
    if (!resultsContainer) return;

    // Get search term from URL: k9pawss.netlify.app/search?q=spitz
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q')?.toLowerCase() || "";

    // Filter the dog list
    const filteredDogs = dogs.filter(dog => 
        dog.name.toLowerCase().includes(query) || 
        dog.breed.toLowerCase().includes(query)
    );

    // Display Results
    if (filteredDogs.length > 0) {
        statusContainer.innerHTML = `<h2>Showing results for "${query}"</h2>`;
        resultsContainer.innerHTML = filteredDogs.map(dog => `
            <div class="dog-card">
                <img src="${dog.img}" alt="${dog.name}" style="width:200px;">
                <h3>${dog.name}</h3>
                <p>${dog.desc}</p>
            </div>
        `).join('');
    } else {
        statusContainer.innerHTML = `<h2>No results found for "${query}"</h2>`;
    }
}

// Run search logic when page loads
window.addEventListener('DOMContentLoaded', runSearch);

