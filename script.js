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