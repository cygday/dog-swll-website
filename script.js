// ========== PRODUCT DATA ==========
const puppyProducts = [
  {
    id: 1,
    name: "Beagle",
    breed: "Hound",
    price: 35000,
    image: "./image/beagle.jpg",
    age: "8 weeks",
    health: "Vaccinated, Healthy",
    description: "Friendly, curious, and energetic hunting dog."
  },
  {
    id: 2,
    name: "Golden Retriever",
    breed: "Retriever",
    price: 12000,
    image: "./image/golden-retriever.jpg",
    age: "10 weeks",
    health: "Vaccinated, Certified",
    description: "Friendly and intelligent family companion."
  },
  {
    id: 3,
    name: "Labrador",
    breed: "Retriever",
    price: 12000,
    image: "./image/labrador.jpg",
    age: "8 weeks",
    health: "Healthy, Registered",
    description: "Loyal, outgoing, and even-tempered."
  },
  {
    id: 4,
    name: "Poodle",
    breed: "Poodle",
    price: 30000,
    image: "./image/poodle.jpg",
    age: "9 weeks",
    health: "Vaccinated, Healthy",
    description: "Intelligent and versatile companion dog."
  },
  {
    id: 5,
    name: "Pug",
    breed: "Toy",
    price: 15000,
    image: "./image/pug.jpg",
    age: "8 weeks",
    health: "Healthy, Cute",
    description: "Charming, mischievous, and playful small dog."
  },
  {
    id: 6,
    name: "Rottweiler",
    breed: "Working",
    price: 25000,
    image: "./image/rottweiler.jpg",
    age: "10 weeks",
    health: "Strong, Healthy",
    description: "Confident, loyal, and devoted guardian."
  },
  {
    id: 7,
    name: "German Shepherd",
    breed: "Herding",
    price: 15000,
    image: "./image/shepherd.jpg",
    age: "9 weeks",
    health: "Intelligent, Alert",
    description: "Intelligent, versatile, and loyal working dog."
  },
  {
    id: 8,
    name: "Japanese Spitz",
    breed: "Spitz",
    price: 5000,
    image: "./image/spitz.jpg",
    age: "6 weeks",
    health: "Fluffy, Healthy",
    description: "Small, white, fluffy companion dog."
  },
  {
    id: 9,
    name: "Tibetan Mastiff",
    breed: "Mastiff",
    price: 80000,
    image: "./image/tibetian-mastiff.jpg",
    age: "12 weeks",
    health: "Majestic, Premium",
    description: "Powerful, protective, and majestic guardian breed."
  },
    {
    id: 10,
    name: "Apso",
    breed: "non sporting dog breed",
    price: 17000,
    image: "./image/apso.jpeg",
    age: "12 weeks",
    health: "Inquisitive and engaging",
    description: "Smart, confident and aloof in strangers."
  },
    {
    id: 11,
    name: "Chow Chow",
    breed: "very independent and aloof",
    price: 55000,
    image: "./image/chow chow.jpeg",
    age: "8 weeks",
    health: "High-energy and playful",
    description: "No Temperament: Aloof, Loyal, Independent, Quiet."
  },
    {
    id: 12,
    name: "Siberian Husky",
    breed: "compact body, well-furred coat, erect ears, and thick, sickle-shaped tail",
    price: 35000,
    image: "./image/siberian husky.jpeg",
    age: "6 weeks",
    health: "Scrappy and playful",
    description: "strong willed, active, independent, mischievous, and playful."
  },
    {
    id: 13,
    name: "Chihuahua",
    breed: "tiny dog with a big attitude.",
    price: 35000,
    image: "./image/chihuahua.jpeg",
    age: "5 weeks",
    health: "High-energy and playful",
    description: "Long hair and short coats."
  },
    {
    id: 14,
    name: "Pomeranian",
    breed: "Popular toy breeds",
    price: 75000,
    image: "./image/pomeranian.jpeg",
    age: "8 weeks",
    health: "Bright-eyed and bushy-tailed",
    description: "Glorious coat, smiling, foxy face, and vivacious personality."
  },
    {
    id: 15,
    name: "Shih-tzu",
    breed: "Tibetan toy breed",
    price: 30000,
    image: "./image/shih tzu.jpeg",
    age: "6 weeks",
    health: " Energy & Playfulness",
    description: "Clear, alert eyes"
  },
    {
    id: 16,
    name: "British Bulldog",
    breed: "thick folds of skin on the brow; round, black, wide-set eyes",
    price: 95000,
    image: "./image/british bulldog.jpeg",
    age: "6 weeks",
    health: "Blemish-free skin",
    description: "Equable and kind, resolute, and courageous."
  },
    {
    id: 17,
    name: "Doberman Pinsher",
    breed: "Intelligence, loyalty, and athleticism.",
    price: 350000,
    image: "./image/doberman pinsher.jpeg",
    age: "6 weeks",
    health: "Inquisitive and engaging",
    description: "Confident and Courageous."
  },
    {
    id: 18,
    name: "Belgian Malinois",
    breed: "Intelligent, protective, and highly energetic",
    price: 75000,
    image: "./image/belgian malinois.jpeg",
    age: "8 weeks",
    health: "Solid/Firm muscle tone",
    description: "Loyal, confident, and trainable, with natural guarding instincts."
  },
    {
    id: 19,
    name: "French Bulldog",
    breed: "companion dog breeds",
    price: 30000,
    image: "./image/french bulldog.jpeg",
    age: "10 weeks",
    health: "Playful yet calm",
    description: "Compact size, muscular body, and distinctive bat-shaped ears."
  },
    {
    id: 20,
    name: "Cocker Spaniel",
    breed: "sporting group breed",
    price: 10000,
    image: "./image/cocker spaniel.jpeg",
    age: "12 weeks",
    health: "Excellent obedience",
    description: "Naturally energetic and aware due to this makes them great hunting partners."
  }
];

// ========== REVIEWS DATA ==========
const reviews = [
  {
    rating: 5,
    text: "Getting our Golden Retriever from k9 pet zone was the best decision! The puppy is healthy, well-socialized, and incredibly loving.",
    author: "Priya Sharma",
    dogBreed: "Golden Retriever"
  },
  {
    rating: 4,
    text: "Amazing kennel club! Very professional, caring, and transparent about the breeding process. Our Lab is perfect!",
    author: "Rajesh Kumar",
    dogBreed: "Labrador"
  },
  {
    rating: 3,
    text: "The support team is fantastic. Even after we brought our pup home, they've been available for any questions!",
    author: "Amith Poudel",
    dogBreed: "German Shepherd"
  },
  {
    rating: 5,
    text: "My Poodle is the smartest, happiest puppy! Breeder's care and training really show. Highly recommend!",
    author: "Sunita Das",
    dogBreed: "Poodle"
  },
  {
    rating: 4,
    text: "Bought a Beagle for my family. The entire process was smooth and the puppy is absolutely fantastic!",
    author: "Vikram Verma",
    dogBreed: "Beagle"
  },
  {
    rating: 3,
    text: "Professional breeders with genuine love for the dogs. Would give 10 stars if possible!",
    author: "Meera Singh",
    dogBreed: "Rottweiler"
  }
];

// ========== CART & WISHLIST MANAGEMENT ==========
class ShoppingService {
  constructor() {
    this.cart = this.loadFromStorage('cart', []);
    this.wishlist = this.loadFromStorage('wishlist', []);
  }

  loadFromStorage(key, defaultValue) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      console.error('Error loading from storage:', e);
      return defaultValue;
    }
  }

  saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  addToCart(puppyId) {
    const puppy = puppyProducts.find(p => p.id === puppyId);
    if (!puppy) return false;

    const existingItem = this.cart.find(item => item.id === puppyId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...puppy, quantity: 1 });
    }
    this.saveToStorage('cart', this.cart);
    return true;
  }

  removeFromCart(puppyId) {
    this.cart = this.cart.filter(item => item.id !== puppyId);
    this.saveToStorage('cart', this.cart);
  }

  addToWishlist(puppyId) {
    if (!this.wishlist.find(item => item.id === puppyId)) {
      const puppy = puppyProducts.find(p => p.id === puppyId);
      if (puppy) {
        this.wishlist.push(puppy);
        this.saveToStorage('wishlist', this.wishlist);
        return true;
      }
    }
    return false;
  }

  removeFromWishlist(puppyId) {
    this.wishlist = this.wishlist.filter(item => item.id !== puppyId);
    this.saveToStorage('wishlist', this.wishlist);
  }

  isInWishlist(puppyId) {
    return this.wishlist.some(item => item.id === puppyId);
  }

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  moveToCart(puppyId) {
    this.addToCart(puppyId);
    this.removeFromWishlist(puppyId);
  }
}

const shoppingService = new ShoppingService();

// ========== UI CONTROLLERS ==========
class UIController {
  constructor() {
    this.cartSidebar = document.getElementById('cartSidebar');
    this.wishlistSidebar = document.getElementById('wishlistSidebar');
    this.sidebarOverlay = document.getElementById('sidebarOverlay');
    this.cartToggleBtn = document.getElementById('cartToggleBtn');
    this.wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
    this.closeCartBtn = document.getElementById('closeCartBtn');
    this.closeWishlistBtn = document.getElementById('closeWishlistBtn');
    this.checkoutBtn = document.getElementById('checkoutBtn');
    this.productsGrid = document.getElementById('productsGrid');
    this.productSearch = document.getElementById('productSearch');
    this.reviewsGrid = document.getElementById('reviewsGrid');
    this.cartCount = document.getElementById('cartCount');
    this.wishlistCount = document.getElementById('wishlistCount');

    this.setupEventListeners();
    this.renderProducts(puppyProducts);
    this.renderReviews();
    this.updateCounts();
  }

  setupEventListeners() {
    this.cartToggleBtn.addEventListener('click', () => this.toggleCart());
    this.wishlistToggleBtn.addEventListener('click', () => this.toggleWishlist());
    this.closeCartBtn.addEventListener('click', () => this.closeAllSidebars());
    this.closeWishlistBtn.addEventListener('click', () => this.closeAllSidebars());
    this.sidebarOverlay.addEventListener('click', () => this.closeAllSidebars());
    if (this.checkoutBtn) {
      this.checkoutBtn.addEventListener('click', () => this.handleCheckout());
    }
    this.productSearch.addEventListener('input', (e) => this.filterProducts(e.target.value));
  }

  toggleCart() {
    const isWishlistOpen = this.wishlistSidebar.classList.contains('active');
    if (isWishlistOpen) {
      this.wishlistSidebar.classList.remove('active');
    }
    this.cartSidebar.classList.toggle('active');
    this.sidebarOverlay.classList.toggle('active');
    this.renderCartItems();
  }

  toggleWishlist() {
    const isCartOpen = this.cartSidebar.classList.contains('active');
    if (isCartOpen) {
      this.cartSidebar.classList.remove('active');
    }
    this.wishlistSidebar.classList.toggle('active');
    this.sidebarOverlay.classList.toggle('active');
    this.renderWishlistItems();
  }

  closeAllSidebars() {
    this.cartSidebar.classList.remove('active');
    this.wishlistSidebar.classList.remove('active');
    this.sidebarOverlay.classList.remove('active');
  }

  renderProducts(products) {
    this.productsGrid.innerHTML = products.map(puppy => `
      <div class="product-card">
        <div class="product-image-container">
          <img src="${puppy.image}" alt="${puppy.name}">
          <span class="product-badge">${puppy.age}</span>
          <button class="wishlist-btn ${shoppingService.isInWishlist(puppy.id) ? 'active' : ''}" data-id="${puppy.id}" title="Add to Wishlist">
            ${shoppingService.isInWishlist(puppy.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="product-info">
          <span class="product-breed">${puppy.breed}</span>
          <h3 class="product-name">${puppy.name}</h3>
          <div class="product-details">
            <strong>Health:</strong> ${puppy.health}<br>
            <em>${puppy.description}</em>
          </div>
          <div class="product-rating">
            <span class="star-rating">★★★★★</span>
            <span class="rating-score">(4.9)</span>
          </div>
          <div class="product-footer">
            <span class="product-price">NPR ${puppy.price.toLocaleString()}</span>
            <button class="add-to-cart-btn" data-id="${puppy.id}">🛒 Purchase</button>
          </div>
        </div>
      </div>
    `).join('');

    // Add event listeners
    this.productsGrid.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleWishlistClick(e));
    });
    this.productsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleAddToCart(e));
    });
  }

  handleWishlistClick(e) {
    e.preventDefault();
    const puppyId = parseInt(e.currentTarget.dataset.id);
    if (shoppingService.isInWishlist(puppyId)) {
      shoppingService.removeFromWishlist(puppyId);
      e.currentTarget.textContent = '🤍';
      e.currentTarget.classList.remove('active');
    } else {
      shoppingService.addToWishlist(puppyId);
      e.currentTarget.textContent = '❤️';
      e.currentTarget.classList.add('active');
    }
    this.updateCounts();
  }

  handleAddToCart(e) {
    const puppyId = parseInt(e.currentTarget.dataset.id);
    if (shoppingService.addToCart(puppyId)) {
      e.currentTarget.textContent = '✓ Purchased';
      setTimeout(() => {
        e.currentTarget.textContent = '🛒 Purchase';
      }, 1000);
    }
    this.updateCounts();
    this.scrollToOrderForm();
  }

  scrollToOrderForm() {
    const orderForm = document.getElementById('orderForm');
    if (!orderForm) return;

    const headerOffset = 200;
    const elementPosition = orderForm.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }

  handleCheckout() {
    if (shoppingService.cart.length === 0) {
      alert('Your cart is empty. Please add a puppy before checking out.');
      return;
    }

    const orderSummaryInput = document.getElementById('orderSummaryInput');
    const cartSummary = shoppingService.cart.map(item => `${item.quantity}× ${item.name} (NPR ${item.price.toLocaleString()})`).join('; ');

    if (orderSummaryInput) {
      orderSummaryInput.value = `Order details:\n${cartSummary}\nTotal: NPR ${shoppingService.getCartTotal().toLocaleString()}`;
    }

    this.scrollToOrderForm();
  }

  renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');

    if (shoppingService.cart.length === 0) {
      cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Your cart is empty</p>';
      cartTotalContainer.style.display = 'none';
      return;
    }

    cartItemsContainer.innerHTML = shoppingService.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">NPR ${item.price.toLocaleString()}</div>
          <div style="font-size: 12px; color: #999; margin-top: 5px;">Qty: ${item.quantity}</div>
        </div>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      </div>
    `).join('');

    cartItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        shoppingService.removeFromCart(parseInt(e.currentTarget.dataset.id));
        this.renderCartItems();
        this.updateCounts();
      });
    });

    cartTotalContainer.style.display = 'block';
    document.getElementById('cartTotalPrice').textContent = shoppingService.getCartTotal().toLocaleString();
  }

  renderWishlistItems() {
    const wishlistItemsContainer = document.getElementById('wishlistItems');

    if (shoppingService.wishlist.length === 0) {
      wishlistItemsContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Your wishlist is empty</p>';
      return;
    }

    wishlistItemsContainer.innerHTML = shoppingService.wishlist.map(item => `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="wishlist-item-info">
          <div class="wishlist-item-name">${item.name}</div>
          <div class="wishlist-item-price">NPR ${item.price.toLocaleString()}</div>
        </div>
        <div style="display: flex; gap: 5px; flex-direction: column;">
          <button class="move-btn" data-id="${item.id}" style="font-size: 10px; padding: 4px 6px;">Buy</button>
          <button class="remove-btn" data-id="${item.id}" style="font-size: 10px; padding: 4px 6px;">Remove</button>
        </div>
      </div>
    `).join('');

    wishlistItemsContainer.querySelectorAll('.move-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const puppyId = parseInt(e.currentTarget.dataset.id);
        shoppingService.moveToCart(puppyId);
        this.renderWishlistItems();
        this.updateCounts();
      });
    });

    wishlistItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        shoppingService.removeFromWishlist(parseInt(e.currentTarget.dataset.id));
        this.renderWishlistItems();
        this.updateCounts();
        // Update product card
        const card = this.productsGrid.querySelector(`[data-id="${e.currentTarget.dataset.id}"]`);
        if (card) {
          card.textContent = '🤍';
          card.classList.remove('active');
        }
      });
    });
  }

  renderReviews() {
    this.reviewsGrid.innerHTML = reviews.map(review => `
      <div class="review-card">
        <div class="review-stars">${'★'.repeat(review.rating)}</div>
        <p class="review-text">"${review.text}"</p>
        <div class="review-author">- ${review.author}</div>
        <div class="review-meta">Got our ${review.dogBreed}</div>
      </div>
    `).join('');
  }

  filterProducts(query) {
    const filtered = puppyProducts.filter(puppy =>
      puppy.name.toLowerCase().includes(query.toLowerCase()) ||
      puppy.breed.toLowerCase().includes(query.toLowerCase()) ||
      puppy.description.toLowerCase().includes(query.toLowerCase())
    );
    this.renderProducts(filtered);
  }

  updateCounts() {
    this.cartCount.textContent = shoppingService.cart.reduce((sum, item) => sum + item.quantity, 0);
    this.wishlistCount.textContent = shoppingService.wishlist.length;
  }
}

// ========== LIGHTBOX FUNCTIONALITY (EXISTING) ==========
document.addEventListener('DOMContentLoaded', () => {
  // Initialize shopping UI
  new UIController();

  // Lightbox functionality for thumbnail gallery
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
    if (thumbs.length === 0) return;
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

  // Form Thank You handling
  const joinForm = document.getElementById('joinForm');
  if (joinForm) {
    joinForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(joinForm);
      fetch(joinForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          joinForm.style.display = 'none';
          const thankYou = document.getElementById('thankYouMessage');
          if (thankYou) thankYou.style.display = 'block';
        } else {
          return response.json().then(data => Promise.reject(data));
        }
      }).catch(() => {
        alert('Oops! Something went wrong. Please refresh and try again.');
      });
    });
  }

  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const orderSummaryInput = document.getElementById('orderSummaryInput');
      const formData = new FormData(orderForm);
      const cartSummary = shoppingService.cart.length > 0
        ? shoppingService.cart.map(item => `${item.quantity}× ${item.name} (NPR ${item.price.toLocaleString()})`).join('; ')
        : 'No cart items selected';

      orderSummaryInput.value = `Order details:\n${cartSummary}\nPreferred breed: ${formData.get('preferred_breed') || 'Any'}\nQuantity: ${formData.get('quantity') || '1'}\nPickup date: ${formData.get('pickup_date') || 'Flexible'}\nNotes: ${formData.get('message') || 'None'}`;

      const payload = new FormData(orderForm);
      fetch(orderForm.action, {
        method: 'POST',
        body: payload,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          orderForm.style.display = 'none';
          const orderThankYou = document.getElementById('orderThankYouMessage');
          if (orderThankYou) orderThankYou.style.display = 'block';
        } else {
          return response.json().then(data => Promise.reject(data));
        }
      }).catch(() => {
        alert('Oops! Something went wrong. Please refresh and try again.');
      });
    });
  }
});

// Original search functionality
const dogs = [
  { name: "Beagle", breed: "Hound", description: "Friendly, curious, and energetic hunting dog.", image: "./image/beagle.jpg" },
  { name: "Golden Retriever", breed: "Retriever", description: "Friendly and intelligent family companion.", image: "./image/golden-retriever.jpg" },
  { name: "Labrador", breed: "Retriever", description: "Loyal, outgoing, and even-tempered.", image: "./image/labrador.jpg" },
  { name: "Poodle", breed: "Poodle", description: "Intelligent and versatile companion dog.", image: "./image/poodle.jpg" },
  { name: "Pug", breed: "Toy", description: "Charming, mischievous, and playful small dog.", image: "./image/pug.jpg" },
  { name: "Rottweiler", breed: "Working", description: "Confident, loyal, and devoted guardian.", image: "./image/rottweiler.jpg" },
  { name: "German Shepherd", breed: "Herding", description: "Intelligent, versatile, and loyal working dog.", image: "./image/shepherd.jpg" },
  { name: "Japanese Spitz", breed: "Spitz", description: "Small, white, fluffy companion dog.", image: "./image/spitz.jpg" },
  { name: "Tibetan Mastiff", breed: "Mastiff", description: "Powerful, protective, and majestic guardian breed.", image: "./image/tibetian-mastiff.jpg" },
  { name: "Apso", breed: "non sporting dog breed", image: "./image/apso.jpeg", description: "Smart, confident and aloof in strangers." },
  { name: "Chow Chow", breed: "very independent and aloof", image: "./image/chow chow.jpeg", description: "No Temperament: Aloof, Loyal, Independent, Quiet." },
  { name: "Siberian Husky", breed: "compact body, well-furred coat, erect ears, and thick, sickle-shaped tail", image: "./image/siberian husky.jpeg", description: "strong willed, active, independent, mischievous, and playful."},
  { name: "Chihuahua", breed: "tiny dog with a big attitude.", image: "./image/chihuahua.jpeg", description: "Long hair and short coats."},
  { name: "Pomeranian", breed: "Popular toy breeds", image: "./image/pomeranian.jpeg", description: "Glorious coat, smiling, foxy face, and vivacious personality."},
  { name: "Shih-tzu", breed: "Tibetan toy breed", image: "./image/shih tzu.jpeg", description: "Clear, alert eyes"  },
  { name: "British Bulldog", breed: "thick folds of skin on the brow; round, black, wide-set eyes", image: "./image/british bulldog.jpeg", description: "Equable and kind, resolute, and courageous." },
  { name: "Doberman Pinsher", breed: "Intelligence, loyalty, and athleticism.", image: "./image/doberman.jpeg",  description: "Confident and Courageous." },
  { name: "Belgian Malinois", breed: "Intelligent, protective, and highly energetic", image: "./image/belgian malinois.jpeg", description: "Loyal, confident, and trainable, with natural guarding instincts." },
  { name: "French Bulldog", breed: "companion dog breeds", image: "./image/french bulldog.jpeg", description: "Compact size, muscular body, and distinctive bat-shaped ears." },
  { name: "Cocker Spaniel", breed: "sporting group breed", image: "./image/cocker spaniel.jpeg", description: "Naturally energetic and aware due to this makes them great hunting partners." }

];

function runSearch() {
  const resultsContainer = document.getElementById('search-results');
  const statusContainer = document.getElementById('search-status');

  if (!resultsContainer || !statusContainer) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const query = (params.get('q') || '').toLowerCase().trim();

  const filteredDogs = query === '' ? dogs : dogs.filter(dog =>
    dog.name.toLowerCase().includes(query) ||
    dog.breed.toLowerCase().includes(query)
  );

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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runSearch);
} else {
  runSearch();
}

