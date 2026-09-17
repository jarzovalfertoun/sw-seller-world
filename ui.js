const UI = {
  listings: [
    {
      id: 1,
      title: "Instagram Account (Organic / Fresh)",
      price: "₱ 1,200",
      rating: "4.9",
      reviews: "128",
      category: "social",
      verified: true,
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500"
    },
    {
      id: 2,
      title: "MLBB Account (Mythic / 120 Skins)",
      price: "₱ 800",
      rating: "4.8",
      reviews: "86",
      category: "gaming",
      verified: true,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500"
    },
    {
      id: 3,
      title: "Smart/Globe Load Promo Discounts",
      price: "₱ 100",
      rating: "5.0",
      reviews: "210",
      category: "load",
      verified: true,
      image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=500"
    },
    {
      id: 4,
      title: "Spotify Premium (1 Year Safe Warranty)",
      price: "₱ 150",
      rating: "4.7",
      reviews: "72",
      category: "services",
      verified: true,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500"
    }
  ],

  renderListings(containerId = 'listings-grid', items = this.listings) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(item => `
      <div onclick="UI.openListingDetail(${item.id})" class="glass-card rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 cursor-pointer group">
        <div class="relative h-36 bg-slate-200 overflow-hidden">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
          ${item.verified ? `
            <span class="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <i data-lucide="shield-check" class="w-3 h-3"></i> Verified
            </span>
          ` : ''}
        </div>
        <div class="p-3">
          <h4 class="font-bold text-sm text-slate-900 line-clamp-1">${item.title}</h4>
          <p class="text-brand-600 font-extrabold text-base mt-0.5">${item.price}</p>
          <div class="flex items-center gap-1 text-[11px] text-slate-500 mt-2">
            <i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>
            <span class="font-bold text-slate-700">${item.rating}</span> (${item.reviews} reviews)
          </div>
        </div>
      </div>
    `).join('');

    lucide.createIcons();
  },

  openListingDetail(id) {
    const item = this.listings.find(l => l.id === id);
    if (!item) return;

    document.getElementById('detail-img').src = item.image;
    document.getElementById('detail-title').textContent = item.title;
    document.getElementById('detail-price').textContent = item.price;

    Router.navigate('product-detail');
  },

  filterCategory(cat) {
    const filtered = this.listings.filter(l => l.category === cat);
    this.renderListings('listings-grid', filtered);
    Router.navigate('home');
  },

  sendMessage() {
    const input = document.getElementById('chat-input');
    const messageText = input.value.trim();
    if (!messageText) return;

    const chatBox = document.getElementById('chat-box');
    const msgElement = document.createElement('div');
    msgElement.className = "flex justify-end animate-fade-in";
    msgElement.innerHTML = `
      <div class="bg-brand-600 text-white text-sm py-2 px-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
        ${messageText}
      </div>
    `;

    chatBox.appendChild(msgElement);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
};
