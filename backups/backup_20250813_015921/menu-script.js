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
                fat: 18
            },
            'pancakes': {
                name: 'Fluffy Pancakes',
                prepTime: '12-15 minutes',
                description: 'Stack of three fluffy pancakes served with maple syrup and butter',
                ingredients: ['Flour', 'Eggs', 'Milk', 'Baking powder', 'Sugar', 'Vanilla', 'Butter', 'Maple syrup'],
                calories: 450,
                protein: 12,
                carbs: 65,
                fat: 15
            },
            'eggs-benedict': {
                name: 'Eggs Benedict',
                prepTime: '15-18 minutes',
                description: 'Poached eggs on English muffins with ham and hollandaise sauce',
                ingredients: ['English muffins', 'Eggs', 'Ham', 'Butter', 'Egg yolks', 'Lemon juice', 'Cayenne'],
                calories: 520,
                protein: 25,
                carbs: 30,
                fat: 35
            },
            'french-toast': {
                name: 'French Toast',
                prepTime: '10-12 minutes',
                description: 'Thick slices of brioche dipped in custard and grilled to perfection',
                ingredients: ['Brioche bread', 'Eggs', 'Milk', 'Vanilla', 'Cinnamon', 'Butter', 'Powdered sugar'],
                calories: 380,
                protein: 14,
                carbs: 45,
                fat: 16
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
                fat: 10
            },
            'pepperoni': {
                name: 'Pepperoni Pizza',
                prepTime: '15-20 minutes',
                description: 'Traditional pizza topped with spicy pepperoni and mozzarella',
                ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Pepperoni', 'Oregano'],
                calories: 320,
                protein: 15,
                carbs: 35,
                fat: 14
            },
            'quattro-stagioni': {
                name: 'Quattro Stagioni',
                prepTime: '18-22 minutes',
                description: 'Four seasons pizza with mushrooms, artichokes, ham, and olives',
                ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Mushrooms', 'Artichokes', 'Ham', 'Olives'],
                calories: 350,
                protein: 18,
                carbs: 38,
                fat: 16
            },
            'hawaiian': {
                name: 'Hawaiian Pizza',
                prepTime: '16-20 minutes',
                description: 'Sweet and savory combination of ham and pineapple',
                ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Ham', 'Pineapple', 'Red onion'],
                calories: 290,
                protein: 14,
                carbs: 38,
                fat: 11
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
                fat: 18
            },
            'bolognese': {
                name: 'Tagliatelle Bolognese',
                prepTime: '20-25 minutes',
                description: 'Rich meat sauce with ground beef, tomatoes, and herbs over fresh pasta',
                ingredients: ['Tagliatelle', 'Ground beef', 'Tomatoes', 'Onions', 'Carrots', 'Celery', 'Red wine'],
                calories: 480,
                protein: 25,
                carbs: 50,
                fat: 20
            },
            'pesto': {
                name: 'Penne Pesto',
                prepTime: '10-12 minutes',
                description: 'Fresh basil pesto with pine nuts, garlic, and parmesan over penne pasta',
                ingredients: ['Penne pasta', 'Fresh basil', 'Pine nuts', 'Garlic', 'Parmesan', 'Olive oil'],
                calories: 380,
                protein: 14,
                carbs: 48,
                fat: 16
            },
            'alfredo': {
                name: 'Fettuccine Alfredo',
                prepTime: '14-16 minutes',
                description: 'Creamy parmesan sauce over fresh fettuccine pasta',
                ingredients: ['Fettuccine', 'Heavy cream', 'Parmesan cheese', 'Butter', 'Garlic', 'White pepper'],
                calories: 520,
                protein: 18,
                carbs: 52,
                fat: 28
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
                fat: 0
            },
            'cappuccino': {
                name: 'Cappuccino',
                prepTime: '4-5 minutes',
                description: 'Espresso with steamed milk and milk foam',
                ingredients: ['Espresso beans', 'Whole milk', 'Water'],
                calories: 120,
                protein: 6,
                carbs: 12,
                fat: 4
            },
            'latte': {
                name: 'Caffè Latte',
                prepTime: '4-5 minutes',
                description: 'Espresso with steamed milk and light foam',
                ingredients: ['Espresso beans', 'Whole milk', 'Water'],
                calories: 150,
                protein: 8,
                carbs: 15,
                fat: 6
            },
            'americano': {
                name: 'Americano',
                prepTime: '3-4 minutes',
                description: 'Espresso diluted with hot water',
                ingredients: ['Espresso beans', 'Hot water'],
                calories: 10,
                protein: 1,
                carbs: 2,
                fat: 0
            },
            'mocha': {
                name: 'Caffè Mocha',
                prepTime: '5-6 minutes',
                description: 'Espresso with chocolate syrup, steamed milk, and whipped cream',
                ingredients: ['Espresso beans', 'Chocolate syrup', 'Whole milk', 'Whipped cream'],
                calories: 290,
                protein: 10,
                carbs: 35,
                fat: 12
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

// State
let currentCategory = 'all';
let isDarkMode = false;
let currentTableId = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeFromURL();
    initializeTheme();
    initializeEventListeners();
    renderMenuItems();
});

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

    // Modal close
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    itemModal.addEventListener('click', (e) => {
        if (e.target === itemModal) {
            closeModal();
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
    filteredItems.forEach(item => {
        const itemElement = createMenuItemElement(item);
        menuItemsContainer.appendChild(itemElement);
    });
    
    // Show no results message
    if (filteredItems.length === 0) {
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
}

function createMenuItemElement(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = `menu-item ${item.categoryKey}`;
    itemDiv.onclick = () => openItemModal(item);
    
    itemDiv.innerHTML = `
        <div class="item-header">
            <div>
                <div class="item-name">${item.name}</div>
            </div>
            <div class="item-category">${item.categoryName}</div>
        </div>
        <div class="item-description">${item.description}</div>
        <div class="item-footer">
            <div class="item-prep-time">
                <i class="fas fa-clock"></i>
                ${item.prepTime}
            </div>
            <div class="item-calories">${item.calories} cal</div>
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