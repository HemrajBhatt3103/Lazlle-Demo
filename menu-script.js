// Menu Data - Same as in the main app
const menuData = {
    breakfast: {
        category: 'Breakfast',
        items: {
            'avocado-toast': {
                name: 'Avocado Toast',
                prepTime: '8-10 minutes',
                description: 'Fresh avocado mashed with lime, salt, and pepper on toasted sourdough bread',
                ingredients: ['Sourdough bread', 'Fresh avocado', 'Lime juice', 'Salt', 'Black pepper', 'Cherry tomatoes', 'Olive oil'],
                calories: 320,
                protein: 8,
                carbs: 35,
                fat: 18,
                price: 180
            },
            'pancakes': {
                name: 'Fluffy Pancakes',
                prepTime: '12-15 minutes',
                description: 'Stack of three fluffy pancakes served with maple syrup and butter',
                ingredients: ['Flour', 'Eggs', 'Milk', 'Baking powder', 'Sugar', 'Vanilla', 'Butter', 'Maple syrup'],
                calories: 450,
                protein: 12,
                carbs: 65,
                fat: 15,
                price: 120
            },
            'eggs-benedict': {
                name: 'Eggs Benedict',
                prepTime: '15-18 minutes',
                description: 'Poached eggs on English muffins with ham and hollandaise sauce',
                ingredients: ['English muffins', 'Eggs', 'Ham', 'Butter', 'Egg yolks', 'Lemon juice', 'Cayenne'],
                calories: 520,
                protein: 25,
                carbs: 30,
                fat: 35,
                price: 220
            },
            'french-toast': {
                name: 'French Toast',
                prepTime: '10-12 minutes',
                description: 'Thick slices of brioche dipped in custard and grilled to perfection',
                ingredients: ['Brioche bread', 'Eggs', 'Milk', 'Vanilla', 'Cinnamon', 'Butter', 'Powdered sugar'],
                calories: 380,
                protein: 14,
                carbs: 45,
                fat: 16,
                price: 150
            }
        }
    },
    pizza: {
        category: 'Pizza',
        items: {
            'margherita': {
                name: 'Margherita Pizza',
                prepTime: '15-20 minutes',
                description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
                ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Fresh basil', 'Olive oil', 'Garlic'],
                calories: 280,
                protein: 12,
                carbs: 36,
                fat: 10,
                price: 250
            },
            'pepperoni': {
                name: 'Pepperoni Pizza',
                prepTime: '15-20 minutes',
                description: 'Traditional pizza topped with spicy pepperoni and mozzarella',
                ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Pepperoni', 'Oregano'],
                calories: 320,
                protein: 15,
                carbs: 35,
                fat: 14,
                price: 280
            },
            'quattro-stagioni': {
                name: 'Quattro Stagioni',
                prepTime: '18-22 minutes',
                description: 'Four seasons pizza with mushrooms, artichokes, ham, and olives',
                ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Mushrooms', 'Artichokes', 'Ham', 'Olives'],
                calories: 350,
                protein: 18,
                carbs: 38,
                fat: 16,
                price: 320
            },
            'hawaiian': {
                name: 'Hawaiian Pizza',
                prepTime: '16-20 minutes',
                description: 'Sweet and savory combination of ham and pineapple',
                ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Ham', 'Pineapple', 'Red onion'],
                calories: 290,
                protein: 14,
                carbs: 38,
                fat: 11,
                price: 290
            }
        }
    },
    pasta: {
        category: 'Pasta',
        items: {
            'carbonara': {
                name: 'Spaghetti Carbonara',
                prepTime: '12-15 minutes',
                description: 'Classic Roman pasta with eggs, cheese, pancetta, and black pepper',
                ingredients: ['Spaghetti', 'Eggs', 'Pecorino Romano', 'Pancetta', 'Black pepper', 'Garlic'],
                calories: 420,
                protein: 20,
                carbs: 45,
                fat: 18,
                price: 17.99
            },
            'bolognese': {
                name: 'Tagliatelle Bolognese',
                prepTime: '20-25 minutes',
                description: 'Rich meat sauce with ground beef, tomatoes, and herbs over fresh pasta',
                ingredients: ['Tagliatelle', 'Ground beef', 'Tomatoes', 'Onions', 'Carrots', 'Celery', 'Red wine'],
                calories: 480,
                protein: 25,
                carbs: 50,
                fat: 20,
                price: 240
            },
            'pesto': {
                name: 'Penne Pesto',
                prepTime: '10-12 minutes',
                description: 'Fresh basil pesto with pine nuts, garlic, and parmesan over penne pasta',
                ingredients: ['Penne pasta', 'Fresh basil', 'Pine nuts', 'Garlic', 'Parmesan', 'Olive oil'],
                calories: 380,
                protein: 14,
                carbs: 48,
                fat: 16,
                price: 220
            },
            'alfredo': {
                name: 'Fettuccine Alfredo',
                prepTime: '14-16 minutes',
                description: 'Creamy parmesan sauce over fresh fettuccine pasta',
                ingredients: ['Fettuccine', 'Heavy cream', 'Parmesan cheese', 'Butter', 'Garlic', 'White pepper'],
                calories: 520,
                protein: 18,
                carbs: 52,
                fat: 28,
                price: 260
            }
        }
    },
    coffee: {
        category: 'Coffee',
        items: {
            'espresso': {
                name: 'Espresso',
                prepTime: '2-3 minutes',
                description: 'Strong, concentrated coffee shot',
                ingredients: ['Espresso beans', 'Water'],
                calories: 5,
                protein: 0,
                carbs: 1,
                fat: 0,
                price: 60
            },
            'cappuccino': {
                name: 'Cappuccino',
                prepTime: '4-5 minutes',
                description: 'Espresso with steamed milk and milk foam',
                ingredients: ['Espresso beans', 'Whole milk', 'Water'],
                calories: 120,
                protein: 6,
                carbs: 12,
                fat: 4,
                price: 80
            },
            'latte': {
                name: 'Caffè Latte',
                prepTime: '4-5 minutes',
                description: 'Espresso with steamed milk and light foam',
                ingredients: ['Espresso beans', 'Whole milk', 'Water'],
                calories: 150,
                protein: 8,
                carbs: 15,
                fat: 6,
                price: 90
            },
            'americano': {
                name: 'Americano',
                prepTime: '3-4 minutes',
                description: 'Espresso diluted with hot water',
                ingredients: ['Espresso beans', 'Hot water'],
                calories: 10,
                protein: 1,
                carbs: 2,
                fat: 0,
                price: 70
            },
            'mocha': {
                name: 'Caffè Mocha',
                prepTime: '5-6 minutes',
                description: 'Espresso with chocolate syrup, steamed milk, and whipped cream',
                ingredients: ['Espresso beans', 'Chocolate syrup', 'Whole milk', 'Whipped cream'],
                calories: 290,
                protein: 10,
                carbs: 35,
                fat: 12,
                price: 110
            }
        }
    }
};

// DOM Elements
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItemsContainer = document.getElementById('menuItems');
const searchInput = document.getElementById('searchInput');
const itemModal = document.getElementById('itemModal');
const themeToggle = document.getElementById('themeToggle');
const callWaiterBtn = document.getElementById('callWaiterBtn');
const tableInfo = document.getElementById('tableInfo');

// New elements for cart and chatbot
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotModal = document.getElementById('chatbotModal');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');

// State
let currentCategory = 'all';
let isDarkMode = false;
let currentTableId = null;
let cart = [];
let chatHistory = [];

// Delivery options and fees (in INR)
const deliveryFees = {
    'dine-in': 0,
    'takeaway': 0,
    'delivery': 49
};

let currentDeliveryOption = 'dine-in';

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing menu...');
    console.log('Menu container found:', !!document.getElementById('menuItems'));
    console.log('Menu data loaded:', !!menuData);
    console.log('Number of categories:', Object.keys(menuData).length);

    initializeFromURL();
    initializeTheme();
    loadSavedData();
    initializeEventListeners();
    initializeEnhancedCart();
    renderMenuItems();

    console.log('Menu initialization complete');
});

function initializeEnhancedCart() {
    // Enhanced cart event listeners
    if (document.getElementById('saveCartBtn')) {
        document.getElementById('saveCartBtn').addEventListener('click', saveCurrentCart);
    }
    if (document.getElementById('applyPromoBtn')) {
        document.getElementById('applyPromoBtn').addEventListener('click', applyPromoCode);
    }

    // Cart tabs
    document.querySelectorAll('.cart-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            switchCartTab(e.target.closest('.cart-tab').dataset.tab);
        });
    });

    // Delivery options
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', updateDeliveryOption);
    });

    // Order notes
    if (document.getElementById('orderNotes')) {
        document.getElementById('orderNotes').addEventListener('input', updateOrderNotes);
    }
}

function initializeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const tableId = urlParams.get('table');

    if (tableId) {
        currentTableId = tableId;
        tableInfo.textContent = `Table ${tableId} Menu`;
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('menuTheme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

function initializeEventListeners() {
    // Category buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            setActiveCategory(category);
            renderMenuItems();
        });
    });

    // Search
    searchInput.addEventListener('input', (e) => {
        renderMenuItems(e.target.value);
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Call waiter
    callWaiterBtn.addEventListener('click', callWaiter);

    // Cart functionality - Header cart button
    const headerCartBtn = document.getElementById('headerCartBtn');
    if (headerCartBtn) {
        console.log('Header cart button found, adding event listener');
        headerCartBtn.addEventListener('click', function () {
            console.log('Header cart button clicked!');
            openCart();
        });
    }

    // Delivery option change listeners
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', function () {
            currentDeliveryOption = this.value;
            updateCartDisplay();
        });
    });

    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Chatbot functionality
    chatbotBtn.addEventListener('click', openChatbot);
    sendChatBtn.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });

    // Modal close events
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.querySelector('.close-cart').addEventListener('click', closeCart);
    document.querySelector('.close-chatbot').addEventListener('click', closeChatbot);

    // Close modals on backdrop click
    itemModal.addEventListener('click', (e) => {
        if (e.target === itemModal) {
            closeModal();
        }
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCart();
        }
    });

    chatbotModal.addEventListener('click', (e) => {
        if (e.target === chatbotModal) {
            closeChatbot();
        }
    });
}

function setActiveCategory(category) {
    currentCategory = category;
    categoryButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

function renderMenuItems(searchTerm = '') {
    console.log('Rendering menu items...');
    console.log('Menu container:', menuItemsContainer);
    console.log('Current category:', currentCategory);
    console.log('Search term:', searchTerm);

    if (!menuItemsContainer) {
        console.error('Menu items container not found!');
        return;
    }

    menuItemsContainer.innerHTML = '';

    const allItems = [];

    // Collect all items
    Object.entries(menuData).forEach(([categoryKey, categoryData]) => {
        Object.entries(categoryData.items).forEach(([itemKey, item]) => {
            allItems.push({
                ...item,
                categoryKey,
                itemKey,
                categoryName: categoryData.category
            });
        });
    });

    console.log('Total items collected:', allItems.length);

    // Filter items
    let filteredItems = allItems;

    if (currentCategory !== 'all') {
        filteredItems = allItems.filter(item => item.categoryKey === currentCategory);
    }

    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term) ||
            item.ingredients.some(ing => ing.toLowerCase().includes(term))
        );
    }

    // Render items
    console.log('Filtered items to render:', filteredItems.length);
    filteredItems.forEach((item, index) => {
        console.log(`Creating item ${index + 1}:`, item.name);
        const itemElement = createMenuItemElement(item);
        menuItemsContainer.appendChild(itemElement);
    });

    // Show no results message
    if (filteredItems.length === 0) {
        console.log('No items to display, showing no results message');
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.5;"></i>
                <p style="font-size: 1.1rem; margin-bottom: 8px;">No items found</p>
                <p style="font-size: 0.9rem;">Try adjusting your search or category filter</p>
            </div>
        `;
        menuItemsContainer.appendChild(noResults);
    }

    console.log('Menu rendering complete. Container children:', menuItemsContainer.children.length);
}

function createMenuItemElement(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = `menu-item ${item.categoryKey}`;

    itemDiv.innerHTML = `
        <div class="item-header">
            <div>
                <div class="item-name">${item.name}</div>
            </div>
            <div class="item-category">${item.categoryName}</div>
        </div>
        <div class="item-price">₹${item.price}</div>
        <div class="item-description">${item.description}</div>
        <div class="item-footer">
            <div class="item-prep-time">
                <i class="fas fa-clock"></i>
                ${item.prepTime}
            </div>
            <div class="item-calories">${item.calories} cal</div>
        </div>
        <div class="item-actions">
            <button class="add-to-cart-btn" onclick="addToCart('${item.itemKey}', '${item.categoryKey}')">
                <i class="fas fa-plus"></i>
                Add to Cart
            </button>
            <button class="view-details-btn" onclick="openItemModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                <i class="fas fa-info"></i>
            </button>
        </div>
    `;

    return itemDiv;
}

function openItemModal(item) {
    document.getElementById('modalItemName').textContent = item.name;
    document.getElementById('modalPrepTime').textContent = item.prepTime;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalCalories').textContent = item.calories;
    document.getElementById('modalProtein').textContent = `${item.protein}g`;
    document.getElementById('modalCarbs').textContent = `${item.carbs}g`;
    document.getElementById('modalFat').textContent = `${item.fat}g`;

    // Render ingredients
    const ingredientsContainer = document.getElementById('modalIngredients');
    ingredientsContainer.innerHTML = '';
    item.ingredients.forEach(ingredient => {
        const tag = document.createElement('span');
        tag.className = 'ingredient-tag';
        tag.textContent = ingredient;
        ingredientsContainer.appendChild(tag);
    });

    itemModal.classList.remove('hidden');
}

function closeModal() {
    itemModal.classList.add('hidden');
}

function toggleTheme() {
    if (isDarkMode) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    isDarkMode = true;
    localStorage.setItem('menuTheme', 'dark');
}

function enableLightMode() {
    document.body.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    isDarkMode = false;
    localStorage.setItem('menuTheme', 'light');
}

function callWaiter() {
    const tableText = currentTableId ? ` for Table ${currentTableId}` : '';

    // Show confirmation
    const originalContent = callWaiterBtn.innerHTML;
    callWaiterBtn.innerHTML = '<i class="fas fa-check"></i><span>Called!</span>';
    callWaiterBtn.style.background = '#059669';

    // In a real app, this would send a notification to the restaurant staff
    console.log(`Waiter called${tableText}`);

    // Reset button after 3 seconds
    setTimeout(() => {
        callWaiterBtn.innerHTML = originalContent;
        callWaiterBtn.style.background = '#10b981';
    }, 3000);

    // Show alert for demo
    alert(`Waiter has been notified${tableText}! They will be with you shortly.`);
}

// Cart Functions
function addToCart(itemKey, categoryKey) {
    console.log('Adding to cart:', itemKey, categoryKey);

    const item = menuData[categoryKey].items[itemKey];
    if (!item) {
        console.error('Item not found:', itemKey, categoryKey);
        return;
    }

    // Check if item already exists in cart
    const existingItem = cart.find(cartItem => cartItem.itemKey === itemKey);

    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Updated existing item quantity:', existingItem);
    } else {
        const newItem = {
            itemKey,
            categoryKey,
            name: item.name,
            price: item.price,
            quantity: 1
        };
        cart.push(newItem);
        console.log('Added new item to cart:', newItem);
    }

    console.log('Current cart:', cart);
    updateCartDisplay();
    showCartNotification(item.name);
}

function removeFromCart(itemKey) {
    cart = cart.filter(item => item.itemKey !== itemKey);
    updateCartDisplay();
    renderCartItems();
}

function updateCartQuantity(itemKey, change) {
    const item = cart.find(cartItem => cartItem.itemKey === itemKey);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(itemKey);
    } else {
        updateCartDisplay();
        renderCartItems();
    }
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Calculate delivery fee
    const deliveryFee = deliveryFees[currentDeliveryOption] || 0;

    // Calculate tax (18% GST)
    const tax = (subtotal + deliveryFee) * 0.18;

    // Calculate total
    const total = subtotal + deliveryFee + tax;

    // Update header cart button
    const headerCartCount = document.getElementById('headerCartCount');
    if (headerCartCount) {
        if (totalItems > 0) {
            headerCartCount.textContent = totalItems;
            headerCartCount.classList.remove('hidden');
        } else {
            headerCartCount.classList.add('hidden');
        }
    }

    // Update cart totals in modal
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartDeliveryFee = document.getElementById('cartDeliveryFee');
    const cartTax = document.getElementById('cartTax');
    const cartTotal = document.getElementById('cartTotal');
    const deliveryFeeLine = document.getElementById('deliveryFeeLine');

    if (cartSubtotal) cartSubtotal.textContent = subtotal.toFixed(2);
    if (cartTax) cartTax.textContent = tax.toFixed(2);
    if (cartTotal) cartTotal.textContent = total.toFixed(2);

    if (cartDeliveryFee && deliveryFeeLine) {
        if (deliveryFee > 0) {
            cartDeliveryFee.textContent = deliveryFee.toFixed(2);
            deliveryFeeLine.style.display = 'flex';
        } else {
            deliveryFeeLine.style.display = 'none';
        }
    }
}

function renderCartItems() {
    console.log('Rendering cart items:', cart);

    if (!cartItems) {
        console.error('Cart items container not found!');
        return;
    }

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <p>Add some delicious items from our menu!</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const itemTotal = (item.price * item.quantity);
        const isFavorite = favorites && favorites.includes(item.itemKey);
        const hasNote = cartNotes && cartNotes[item.itemKey];

        return `
        <div class="cart-item" data-item="${item.itemKey}">
            <div class="cart-item-header">
                <div class="cart-item-info">
                    <div class="cart-item-name">
                        ${item.name}
                        ${isFavorite ? '<i class="fas fa-heart favorite-icon" title="Favorite"></i>' : ''}
                    </div>
                    <div class="cart-item-price">₹${item.price} each</div>
                    <div class="cart-item-total">Total: ₹${itemTotal}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${item.itemKey}')" title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="note-btn ${hasNote ? 'active' : ''}" onclick="toggleItemNote('${item.itemKey}')" title="Add note">
                        <i class="fas fa-sticky-note"></i>
                    </button>
                    <button class="remove-item-btn" onclick="removeFromCart('${item.itemKey}')" title="Remove item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            
            <div class="cart-item-controls">
                <button class="quantity-btn decrease" onclick="updateCartQuantity('${item.itemKey}', -1)" title="Decrease quantity">
                    <i class="fas fa-minus"></i>
                </button>
                <div class="quantity-display">
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" 
                           onchange="setCartQuantity('${item.itemKey}', this.value)" title="Quantity">
                </div>
                <button class="quantity-btn increase" onclick="updateCartQuantity('${item.itemKey}', 1)" title="Increase quantity">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            
            ${hasNote ? `
            <div class="cart-item-note">
                <i class="fas fa-sticky-note"></i>
                <span>${hasNote}</span>
            </div>
            ` : ''}
        </div>
        `;
    }).join('');

    console.log('Cart items rendered successfully');
}

function openCart() {
    console.log('Opening cart...');
    console.log('Cart contents:', cart);
    console.log('Cart modal element:', cartModal);
    console.log('Cart modal classes before:', cartModal ? cartModal.className : 'null');

    renderCartItems();
    updateCartDisplay();

    if (cartModal) {
        cartModal.classList.remove('hidden');
        console.log('Cart modal classes after:', cartModal.className);
        console.log('Cart modal computed style:', window.getComputedStyle(cartModal).display);

        // Force show the modal
        cartModal.style.display = 'flex';
        console.log('Forced modal display to flex');
    } else {
        console.error('Cart modal not found!');
    }
}

function closeCart() {
    cartModal.classList.add('hidden');
}

function clearCart() {
    if (cart.length === 0) return;

    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCartDisplay();
        renderCartItems();
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tableText = currentTableId ? ` for Table ${currentTableId}` : '';

    alert(`Order placed${tableText}!\n\nTotal: $${total.toFixed(2)}\n\nYour order will be prepared shortly. Thank you!`);

    // Clear cart after checkout
    cart = [];
    updateCartDisplay();
    closeCart();
}

function showCartNotification(itemName) {
    // Create temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = `${itemName} added to cart!`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Enhanced Cart Management Functions
function setCartQuantity(itemKey, newQuantity) {
    const quantity = parseInt(newQuantity);
    if (quantity < 1 || quantity > 99) return;

    const item = cart.find(cartItem => cartItem.itemKey === itemKey);
    if (!item) return;

    item.quantity = quantity;
    updateCartDisplay();
    renderCartItems();
}

function toggleFavorite(itemKey) {
    const index = favorites.indexOf(itemKey);
    if (index > -1) {
        favorites.splice(index, 1);
        showCartNotification('Removed from favorites');
    } else {
        favorites.push(itemKey);
        showCartNotification('Added to favorites');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderCartItems();
}

function toggleItemNote(itemKey) {
    const currentNote = cartNotes[itemKey] || '';
    const newNote = prompt('Add a note for this item:', currentNote);

    if (newNote !== null) {
        if (newNote.trim()) {
            cartNotes[itemKey] = newNote.trim();
            localStorage.setItem('cartNotes', JSON.stringify(cartNotes));
            showCartNotification('Note added');
        } else {
            delete cartNotes[itemKey];
            localStorage.setItem('cartNotes', JSON.stringify(cartNotes));
            showCartNotification('Note removed');
        }
        renderCartItems();
    }
}

function duplicateCartItem(itemKey) {
    const item = cart.find(cartItem => cartItem.itemKey === itemKey);
    if (!item) return;

    item.quantity += 1;
    updateCartDisplay();
    renderCartItems();
    showCartNotification(`Added another ${item.name}`);
}

function moveToFavorites(itemKey) {
    toggleFavorite(itemKey);
    removeFromCart(itemKey);
    showCartNotification('Moved to favorites');
}

// Chatbot Functions
function openChatbot() {
    chatbotModal.classList.remove('hidden');
    chatInput.focus();
}

function closeChatbot() {
    chatbotModal.classList.add('hidden');
}

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';

    // Process message and get bot response
    setTimeout(() => {
        const response = processChatMessage(message);
        addChatMessage(response, 'bot');
    }, 500);
}

function addChatMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
        </div>
        <div class="message-content">
            ${typeof content === 'string' ? `<p>${content}</p>` : content}
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processChatMessage(message) {
    const lowerMessage = message.toLowerCase();

    // Check for specific item queries
    for (const [categoryKey, categoryData] of Object.entries(menuData)) {
        for (const [itemKey, item] of Object.entries(categoryData.items)) {
            if (lowerMessage.includes(itemKey.replace('-', ' ')) ||
                lowerMessage.includes(item.name.toLowerCase())) {
                return formatItemChatResponse(item);
            }
        }
    }

    // Check for category queries
    if (lowerMessage.includes('breakfast')) {
        return formatCategoryChatResponse(menuData.breakfast);
    } else if (lowerMessage.includes('pizza')) {
        return formatCategoryChatResponse(menuData.pizza);
    } else if (lowerMessage.includes('pasta')) {
        return formatCategoryChatResponse(menuData.pasta);
    } else if (lowerMessage.includes('coffee')) {
        return formatCategoryChatResponse(menuData.coffee);
    }

    // Recommendation queries
    if (lowerMessage.includes('low calorie') || lowerMessage.includes('healthy')) {
        return getLowCalorieRecommendations();
    } else if (lowerMessage.includes('spicy')) {
        return getSpicyRecommendations();
    } else if (lowerMessage.includes('vegetarian') || lowerMessage.includes('veggie')) {
        return getVegetarianRecommendations();
    } else if (lowerMessage.includes('quick') || lowerMessage.includes('fast')) {
        return getQuickRecommendations();
    }

    // General queries
    if (lowerMessage.includes('menu') || lowerMessage.includes('what do you have')) {
        return "I can help you explore our menu! We have Breakfast, Pizza, Pasta, and Coffee. Ask me about specific items, or try: 'What's a low calorie breakfast?' or 'Show me spicy options.'";
    }

    if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest')) {
        return "I'd be happy to recommend something! Tell me what you're in the mood for:\n• Low calorie options\n• Spicy dishes\n• Vegetarian choices\n• Quick meals\n• Or ask about any specific category!";
    }

    // Default response
    return "I'm here to help with our menu! You can ask me about:\n• Specific dishes (e.g., 'Tell me about Margherita pizza')\n• Categories (e.g., 'What breakfast options do you have?')\n• Recommendations (e.g., 'What's healthy and quick?')\n• Nutritional info and ingredients";
}

function formatItemChatResponse(item) {
    return `<strong>${item.name}</strong> - ₹${item.price}<br><br>
            <strong>Prep Time:</strong> ${item.prepTime}<br>
            <strong>Description:</strong> ${item.description}<br><br>
            <strong>Nutrition (per serving):</strong><br>
            • Calories: ${item.calories}<br>
            • Protein: ${item.protein}g<br>
            • Carbs: ${item.carbs}g<br>
            • Fat: ${item.fat}g<br><br>
            <strong>Ingredients:</strong> ${item.ingredients.join(', ')}<br><br>
            Would you like to add this to your cart?`;
}

function formatCategoryChatResponse(category) {
    const items = Object.values(category.items);
    const itemList = items.map(item => `• ${item.name} - ₹${item.price} (${item.calories} cal)`).join('<br>');

    return `<strong>${category.category} Menu:</strong><br><br>
            ${itemList}<br><br>
            Ask me about any specific item for detailed information!`;
}

function getLowCalorieRecommendations() {
    const allItems = [];
    Object.entries(menuData).forEach(([categoryKey, categoryData]) => {
        Object.entries(categoryData.items).forEach(([itemKey, item]) => {
            allItems.push({ ...item, categoryKey });
        });
    });

    const lowCalItems = allItems.filter(item => item.calories < 200).slice(0, 3);

    if (lowCalItems.length === 0) {
        return "For lower calorie options, I recommend our Espresso (5 cal) or Americano (10 cal) from our coffee menu!";
    }

    const recommendations = lowCalItems.map(item =>
        `• ${item.name} - ${item.calories} calories, $${item.price.toFixed(2)}`
    ).join('<br>');

    return `<strong>Low Calorie Recommendations:</strong><br><br>${recommendations}<br><br>Would you like details about any of these items?`;
}

function getSpicyRecommendations() {
    return `<strong>Spicy Options:</strong><br><br>
            • Pepperoni Pizza - $18.99<br>
            • Spaghetti Carbonara (with black pepper) - $17.99<br><br>
            These dishes have some heat to them! Would you like more details about either option?`;
}

function getVegetarianRecommendations() {
    return `<strong>Vegetarian Options:</strong><br><br>
            • Avocado Toast - $12.99<br>
            • Fluffy Pancakes - $10.99<br>
            • Margherita Pizza - $16.99<br>
            • Penne Pesto - $16.99<br>
            • Fettuccine Alfredo - $18.99<br><br>
            All of these are vegetarian-friendly! Ask about any specific item for ingredients.`;
}

function getQuickRecommendations() {
    const allItems = [];
    Object.entries(menuData).forEach(([categoryKey, categoryData]) => {
        Object.entries(categoryData.items).forEach(([itemKey, item]) => {
            allItems.push({ ...item, categoryKey });
        });
    });

    const quickItems = allItems.filter(item => {
        const prepTime = parseInt(item.prepTime);
        return prepTime <= 10;
    }).slice(0, 4);

    if (quickItems.length === 0) {
        return "For quick options, I recommend our coffee menu - most items are ready in 2-6 minutes!";
    }

    const recommendations = quickItems.map(item =>
        `• ${item.name} - ${item.prepTime}, $${item.price.toFixed(2)}`
    ).join('<br>');

    return `<strong>Quick Options (10 minutes or less):</strong><br><br>${recommendations}<br><br>Perfect for when you're in a hurry!`;
}

// Enhanced Cart Functions
let savedCarts = JSON.parse(localStorage.getItem('savedCarts') || '[]');
let orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let cartNotes = JSON.parse(localStorage.getItem('cartNotes') || '{}');
let currentPromo = null;
let deliveryOption = 'dine-in';
let orderNotes = '';

function loadSavedData() {
    savedCarts = JSON.parse(localStorage.getItem('savedCarts') || '[]');
    orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
}

function saveCurrentCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const cartName = prompt('Enter a name for this saved cart:');
    if (!cartName) return;

    const savedCart = {
        id: Date.now(),
        name: cartName,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toLocaleDateString()
    };

    savedCarts.push(savedCart);
    localStorage.setItem('savedCarts', JSON.stringify(savedCarts));

    alert('Cart saved successfully!');
    renderSavedCarts();
}

function loadSavedCart(cartId) {
    const savedCart = savedCarts.find(c => c.id === cartId);
    if (!savedCart) return;

    cart = [...savedCart.items];
    updateCartDisplay();
    renderCartItems();
    switchCartTab('current');
    alert(`Loaded "${savedCart.name}" cart!`);
}

function deleteSavedCart(cartId) {
    if (!confirm('Are you sure you want to delete this saved cart?')) return;

    savedCarts = savedCarts.filter(c => c.id !== cartId);
    localStorage.setItem('savedCarts', JSON.stringify(savedCarts));
    renderSavedCarts();
}

function renderSavedCarts() {
    const savedCartsContainer = document.getElementById('savedCarts');

    if (savedCarts.length === 0) {
        savedCartsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-bookmark"></i>
                <p>No saved carts</p>
                <p>Save your current cart to access it later!</p>
            </div>
        `;
        return;
    }

    savedCartsContainer.innerHTML = savedCarts.map(cart => `
        <div class="saved-cart-item">
            <div class="saved-cart-info">
                <div class="saved-cart-name">${cart.name}</div>
                <div class="saved-cart-details">${cart.items.length} items • $${cart.total.toFixed(2)} • ${cart.date}</div>
            </div>
            <div class="saved-cart-actions">
                <button onclick="loadSavedCart(${cart.id})" class="load-cart-btn">
                    <i class="fas fa-shopping-cart"></i> Load
                </button>
                <button onclick="deleteSavedCart(${cart.id})" class="delete-cart-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function addToOrderHistory() {
    if (cart.length === 0) return;

    const order = {
        id: Date.now(),
        items: [...cart],
        total: calculateTotal(),
        deliveryOption,
        notes: orderNotes,
        promo: currentPromo,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };

    orderHistory.unshift(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

function renderOrderHistory() {
    const historyContainer = document.getElementById('orderHistoryList');

    if (orderHistory.length === 0) {
        historyContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-history"></i>
                <p>No order history</p>
                <p>Your completed orders will appear here!</p>
            </div>
        `;
        return;
    }

    historyContainer.innerHTML = orderHistory.map(order => `
        <div class="order-history-item">
            <div class="order-header">
                <div class="order-date">${order.date} at ${order.time}</div>
                <div class="order-total">$${order.total.toFixed(2)}</div>
            </div>
            <div class="order-details">
                <div class="order-items">
                    ${order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}
                </div>
                <div class="order-delivery">${order.deliveryOption.replace('-', ' ')}</div>
            </div>
            <button onclick="reorderFromHistory(${order.id})" class="reorder-btn">
                <i class="fas fa-redo"></i> Reorder
            </button>
        </div>
    `).join('');
}

function reorderFromHistory(orderId) {
    const order = orderHistory.find(o => o.id === orderId);
    if (!order) return;

    cart = [...order.items];
    deliveryOption = order.deliveryOption;
    orderNotes = order.notes || '';

    // Update delivery option radio
    document.querySelector(`input[name="delivery"][value="${deliveryOption}"]`).checked = true;
    document.getElementById('orderNotes').value = orderNotes;

    updateCartDisplay();
    renderCartItems();
    updateDeliveryOption();
    switchCartTab('current');
    alert('Items added to cart from previous order!');
}

function switchCartTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.cart-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    // Update tab content
    document.querySelectorAll('.cart-tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(`${tabName}CartTab`).classList.add('active');

    // Load content for the active tab
    if (tabName === 'saved') {
        renderSavedCarts();
    } else if (tabName === 'history') {
        renderOrderHistory();
    }
}

function applyPromoCode() {
    const promoInput = document.getElementById('promoInput');
    const promoMessage = document.getElementById('promoMessage');
    const code = promoInput.value.trim().toUpperCase();

    const promoCodes = {
        'SAVE10': { type: 'percentage', value: 10, description: '10% off your order' },
        'WELCOME5': { type: 'fixed', value: 5, description: '$5 off your order' },
        'FREESHIP': { type: 'delivery', value: 0, description: 'Free delivery' }
    };

    if (promoCodes[code]) {
        currentPromo = { code, ...promoCodes[code] };
        promoMessage.textContent = `✓ ${currentPromo.description} applied!`;
        promoMessage.className = 'promo-message success';
        promoMessage.classList.remove('hidden');
        promoInput.value = '';
        updateCartTotals();
    } else {
        promoMessage.textContent = '✗ Invalid promo code';
        promoMessage.className = 'promo-message error';
        promoMessage.classList.remove('hidden');
    }

    setTimeout(() => {
        promoMessage.classList.add('hidden');
    }, 3000);
}

function updateDeliveryOption() {
    const selectedOption = document.querySelector('input[name="delivery"]:checked').value;
    deliveryOption = selectedOption;
    currentDeliveryOption = selectedOption;
    console.log('Delivery option changed to:', selectedOption);
    updateCartTotals();
    updateCartDisplay();
}

function updateOrderNotes() {
    orderNotes = document.getElementById('orderNotes').value;
}

function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let deliveryFee = 0;
    let discount = 0;

    // Calculate delivery fee
    if (deliveryOption === 'delivery') {
        deliveryFee = currentPromo && currentPromo.type === 'delivery' ? 0 : 49;
    }

    // Calculate discount
    if (currentPromo) {
        if (currentPromo.type === 'percentage') {
            discount = subtotal * (currentPromo.value / 100);
        } else if (currentPromo.type === 'fixed') {
            discount = Math.min(currentPromo.value, subtotal);
        }
    }

    const tax = (subtotal + deliveryFee - discount) * 0.18;
    return subtotal + deliveryFee + tax - discount;
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let deliveryFee = 0;
    let discount = 0;

    // Calculate delivery fee
    if (deliveryOption === 'delivery') {
        deliveryFee = currentPromo && currentPromo.type === 'delivery' ? 0 : 49;
    }

    // Calculate discount
    if (currentPromo) {
        if (currentPromo.type === 'percentage') {
            discount = subtotal * (currentPromo.value / 100);
        } else if (currentPromo.type === 'fixed') {
            discount = Math.min(currentPromo.value, subtotal);
        }
    }

    const tax = (subtotal + deliveryFee - discount) * 0.18;
    const total = subtotal + deliveryFee + tax - discount;

    // Update display
    document.getElementById('cartSubtotal').textContent = subtotal.toFixed(2);
    document.getElementById('cartDeliveryFee').textContent = deliveryFee.toFixed(2);
    document.getElementById('cartTax').textContent = tax.toFixed(2);
    document.getElementById('cartDiscount').textContent = discount.toFixed(2);
    document.getElementById('cartTotal').textContent = total.toFixed(2);

    // Show/hide delivery fee line
    const deliveryFeeLine = document.getElementById('deliveryFeeLine');
    if (deliveryOption === 'delivery') {
        deliveryFeeLine.style.display = 'flex';
    } else {
        deliveryFeeLine.style.display = 'none';
    }

    // Show/hide discount line
    const discountLine = document.getElementById('promoDiscountLine');
    if (discount > 0) {
        discountLine.style.display = 'flex';
    } else {
        discountLine.style.display = 'none';
    }
}



// Override the checkout function to include order history
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = calculateTotal();
    const tableText = currentTableId ? ` for Table ${currentTableId}` : '';

    // Add to order history
    addToOrderHistory();

    alert(`Order placed${tableText}!\n\nTotal: $${total.toFixed(2)}\n\nYour order will be prepared shortly. Thank you!`);

    // Clear cart and reset options after checkout
    cart = [];
    currentPromo = null;
    orderNotes = '';
    deliveryOption = 'dine-in';

    // Reset form
    document.querySelector('input[name="delivery"][value="dine-in"]').checked = true;
    document.getElementById('orderNotes').value = '';
    document.getElementById('promoInput').value = '';

    updateCartDisplay();
    closeCart();
}
// Enhanced Cart Management Functions

function switchCartTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.cart-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.cart-tab-content').forEach(content => {
        content.classList.remove('active');
    });

    if (tabName === 'current') {
        document.getElementById('currentCartTab').classList.add('active');
    } else if (tabName === 'saved') {
        document.getElementById('savedCartTab').classList.add('active');
        renderSavedCarts();
    } else if (tabName === 'history') {
        document.getElementById('historyCartTab').classList.add('active');
        renderOrderHistory();
    }
}

function saveCurrentCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const cartName = prompt('Enter a name for this saved cart:') || `Cart ${Date.now()}`;
    const savedCart = {
        id: Date.now(),
        name: cartName,
        items: [...cart],
        notes: { ...cartNotes },
        savedAt: new Date().toISOString(),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    const savedCarts = JSON.parse(localStorage.getItem('savedCarts') || '[]');
    savedCarts.push(savedCart);
    localStorage.setItem('savedCarts', JSON.stringify(savedCarts));

    showCartNotification('Cart saved successfully!');
}

function renderSavedCarts() {
    const savedCarts = JSON.parse(localStorage.getItem('savedCarts') || '[]');
    const savedCartsContainer = document.getElementById('savedCarts');

    if (savedCarts.length === 0) {
        savedCartsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-bookmark"></i>
                <p>No saved carts</p>
                <p>Save your current cart to access it later!</p>
            </div>
        `;
        return;
    }

    savedCartsContainer.innerHTML = savedCarts.map(savedCart => `
        <div class="saved-cart-item">
            <div class="saved-cart-header">
                <div class="saved-cart-name">${savedCart.name}</div>
                <div class="saved-cart-actions">
                    <button class="load-cart-btn" onclick="loadSavedCart(${savedCart.id})">
                        <i class="fas fa-shopping-cart"></i> Load
                    </button>
                    <button class="delete-saved-btn" onclick="deleteSavedCart(${savedCart.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="saved-cart-items">
                ${savedCart.items.map(item => `${item.name} (${item.quantity})`).join(', ')}
            </div>
            <div class="saved-cart-total">Total: $${savedCart.total.toFixed(2)}</div>
            <small>Saved: ${new Date(savedCart.savedAt).toLocaleDateString()}</small>
        </div>
    `).join('');
}

function loadSavedCart(cartId) {
    const savedCarts = JSON.parse(localStorage.getItem('savedCarts') || '[]');
    const savedCart = savedCarts.find(c => c.id === cartId);

    if (!savedCart) return;

    if (cart.length > 0) {
        if (!confirm('This will replace your current cart. Continue?')) {
            return;
        }
    }

    cart = [...savedCart.items];
    cartNotes = { ...savedCart.notes };
    updateCartDisplay();
    renderCartItems();
    switchCartTab('current');
    showCartNotification('Cart loaded successfully!');
}

function deleteSavedCart(cartId) {
    if (!confirm('Delete this saved cart?')) return;

    const savedCarts = JSON.parse(localStorage.getItem('savedCarts') || '[]');
    const updatedCarts = savedCarts.filter(c => c.id !== cartId);
    localStorage.setItem('savedCarts', JSON.stringify(updatedCarts));
    renderSavedCarts();
}

function renderOrderHistory() {
    const orderHistoryContainer = document.getElementById('orderHistoryList');

    if (orderHistory.length === 0) {
        orderHistoryContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <p>No order history</p>
                <p>Your completed orders will appear here!</p>
            </div>
        `;
        return;
    }

    orderHistoryContainer.innerHTML = orderHistory.map(order => `
        <div class="history-item">
            <div class="history-header">
                <div class="history-date">${new Date(order.date).toLocaleDateString()}</div>
                <div class="history-actions">
                    <button class="reorder-history-btn" onclick="reorderFromHistory('${order.id}')">
                        <i class="fas fa-redo"></i> Reorder
                    </button>
                </div>
            </div>
            <div class="history-items">
                ${order.items.map(item => `${item.name} (${item.quantity})`).join(', ')}
            </div>
            <div class="history-total">Total: $${order.total.toFixed(2)}</div>
            <small>Order #${order.id}</small>
        </div>
    `).join('');
}

function reorderFromHistory(orderId) {
    const order = orderHistory.find(o => o.id === orderId);
    if (!order) return;

    if (cart.length > 0) {
        if (!confirm('This will replace your current cart. Continue?')) {
            return;
        }
    }

    cart = [...order.items];
    updateCartDisplay();
    renderCartItems();
    switchCartTab('current');
    showCartNotification('Items added from order history!');
}

function reorderLastOrder() {
    if (orderHistory.length === 0) {
        alert('No previous orders found!');
        return;
    }

    const lastOrder = orderHistory[orderHistory.length - 1];
    reorderFromHistory(lastOrder.id);
}

function toggleFavorite(itemKey) {
    const index = favorites.indexOf(itemKey);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(itemKey);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderCartItems();
}

function addItemNote(itemKey) {
    const currentNote = cartNotes[itemKey] || '';
    const newNote = prompt('Add a note for this item:', currentNote);

    if (newNote !== null) {
        if (newNote.trim()) {
            cartNotes[itemKey] = newNote.trim();
        } else {
            delete cartNotes[itemKey];
        }
        renderCartItems();
    }
}



function applyPromoCode() {
    const promoInput = document.getElementById('promoInput');
    const code = promoInput.value.trim().toUpperCase();

    if (!code) {
        showPromoMessage('Please enter a promo code', 'error');
        return;
    }

    // Demo promo codes
    const validCodes = {
        'SAVE10': { type: 'percentage', value: 10, description: '10% off your order' },
        'WELCOME5': { type: 'fixed', value: 5, description: '$5 off your order' },
        'FREESHIP': { type: 'free_delivery', value: 0, description: 'Free delivery' }
    };

    if (validCodes[code]) {
        promoCode = code;
        updateCartTotals();
        showPromoMessage(`Applied: ${validCodes[code].description}`, 'success');
        promoInput.value = '';
    } else {
        showPromoMessage('Invalid promo code', 'error');
    }
}

function showPromoMessage(message, type) {
    const promoMessage = document.getElementById('promoMessage');
    promoMessage.textContent = message;
    promoMessage.className = `promo-message ${type}`;
    promoMessage.classList.remove('hidden');

    setTimeout(() => {
        promoMessage.classList.add('hidden');
    }, 3000);
}

function calculatePromoDiscount(subtotal) {
    const validCodes = {
        'SAVE10': { type: 'percentage', value: 10 },
        'WELCOME5': { type: 'fixed', value: 5 },
        'FREESHIP': { type: 'free_delivery', value: 0 }
    };

    const promo = validCodes[promoCode];
    if (!promo) return 0;

    if (promo.type === 'percentage') {
        return subtotal * (promo.value / 100);
    } else if (promo.type === 'fixed') {
        return Math.min(promo.value, subtotal);
    }

    return 0;
}

// Enhanced checkout function
function enhancedCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryOption = document.querySelector('input[name="delivery"]:checked')?.value || 'dine-in';
    const deliveryFeeAmount = (deliveryOption === 'delivery' && promoCode !== 'FREESHIP') ? deliveryFee : 0;
    const taxAmount = (subtotal + deliveryFeeAmount) * taxRate;
    const discountAmount = calculatePromoDiscount(subtotal);
    const total = subtotal + deliveryFeeAmount + taxAmount - discountAmount;
    const orderNotes = document.getElementById('orderNotes').value;

    // Create order
    const order = {
        id: Date.now().toString(),
        items: [...cart],
        subtotal,
        deliveryFee: deliveryFeeAmount,
        tax: taxAmount,
        discount: discountAmount,
        total,
        deliveryOption,
        promoCode,
        notes: orderNotes,
        date: new Date().toISOString(),
        tableId: currentTableId
    };

    // Add to order history
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

    // Show confirmation
    const tableText = currentTableId ? ` for Table ${currentTableId}` : '';
    let confirmationMessage = `Order placed${tableText}!\n\n`;
    confirmationMessage += `Order #${order.id}\n`;
    confirmationMessage += `Items: ${cart.length}\n`;
    confirmationMessage += `Total: $${total.toFixed(2)}\n`;
    confirmationMessage += `Delivery: ${deliveryOption}\n`;
    if (orderNotes) confirmationMessage += `Notes: ${orderNotes}\n`;
    confirmationMessage += `\nYour order will be prepared shortly. Thank you!`;

    alert(confirmationMessage);

    // Clear cart after checkout
    cart = [];
    cartNotes = {};
    promoCode = '';
    document.getElementById('orderNotes').value = '';
    document.getElementById('promoInput').value = '';
    updateCartDisplay();
    closeCart();
}

// Load saved data on initialization
function loadSavedData() {
    favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
}

