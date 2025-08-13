// Application State
let currentUser = null;
let tables = [
    {
        id: 1,
        name: 'Table 1',
        status: 'blank',
        billNumber: '',
        billAmount: 0,
        gstPercent: 18,
        customerType: 'dine-in'
    },
    {
        id: 2,
        name: 'Table 2',
        status: 'running',
        billNumber: 'B001',
        billAmount: 850.00,
        gstPercent: 18,
        customerType: 'dine-in'
    },
    {
        id: 3,
        name: 'Table 3',
        status: 'printed',
        billNumber: 'B002',
        billAmount: 1200.50,
        gstPercent: 18,
        customerType: 'takeaway'
    },
    {
        id: 4,
        name: 'Table 4',
        status: 'paid',
        billNumber: 'B003',
        billAmount: 675.25,
        gstPercent: 18,
        customerType: 'delivery'
    }
];

// Menu Data for Chatbot
const menuData = {
    breakfast: {
        category: 'Breakfast',
        items: {
            'avocado toast': {
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
            'eggs benedict': {
                name: 'Eggs Benedict',
                prepTime: '15-18 minutes',
                description: 'Poached eggs on English muffins with ham and hollandaise sauce',
                ingredients: ['English muffins', 'Eggs', 'Ham', 'Butter', 'Egg yolks', 'Lemon juice', 'Cayenne'],
                calories: 520,
                protein: 25,
                carbs: 30,
                fat: 35
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
            'quattro stagioni': {
                name: 'Quattro Stagioni',
                prepTime: '18-22 minutes',
                description: 'Four seasons pizza with mushrooms, artichokes, ham, and olives',
                ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Mushrooms', 'Artichokes', 'Ham', 'Olives'],
                calories: 350,
                protein: 18,
                carbs: 38,
                fat: 16
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
            }
        }
    }
};

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const themeToggle = document.getElementById('themeToggle');
const tablesGrid = document.getElementById('tablesGrid');
const addTableBtn = document.getElementById('addTableBtn');
const updateQRBtn = document.getElementById('updateQRBtn');
const tableModal = document.getElementById('tableModal');
const tableForm = document.getElementById('tableForm');
const qrModal = document.getElementById('qrModal');
const qrCodeContainer = document.getElementById('qrCodeContainer');
const qrModalTitle = document.getElementById('qrModalTitle');
const qrTableInfo = document.getElementById('qrTableInfo');
const downloadQR = document.getElementById('downloadQR');
const printQR = document.getElementById('printQR');
const testMenuBtn = document.getElementById('testMenuBtn');
const chatbot = document.getElementById('chatbot');
const toggleChat = document.getElementById('toggleChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');

let currentEditingTable = null;
let currentQRCanvas = null;
let isDarkMode = false;

// Initialize Application
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing app...');

    // Check if all required elements exist
    const loginFormElement = document.getElementById('loginForm');
    const loginScreenElement = document.getElementById('loginScreen');
    const dashboardElement = document.getElementById('dashboard');

    console.log('Login form found:', !!loginFormElement);
    console.log('Login screen found:', !!loginScreenElement);
    console.log('Dashboard found:', !!dashboardElement);

    // Check if QRCode library is loaded
    if (typeof QRCode === 'undefined') {
        console.warn('QRCode library not loaded, will retry...');
        // Retry after a short delay
        setTimeout(() => {
            if (typeof QRCode === 'undefined') {
                console.error('QRCode library failed to load');
            } else {
                console.log('QRCode library loaded successfully');
            }
        }, 1000);
    } else {
        console.log('QRCode library loaded successfully');
    }

    initializeEventListeners();
    initializeTheme();
    renderTables();
    initializeChatbot();
});

function initializeEventListeners() {
    console.log('Setting up event listeners...');

    // Login
    if (loginForm) {
        console.log('Adding login form event listener');
        loginForm.addEventListener('submit', handleLogin);

        // Also add click handler to login button as backup
        const loginButton = document.querySelector('.login-btn');
        if (loginButton) {
            console.log('Adding backup click handler to login button');
            loginButton.addEventListener('click', function (e) {
                console.log('Login button clicked');
                if (e.target.type === 'submit') {
                    // Let the form submit handler take care of it
                    return;
                }
                e.preventDefault();
                handleLogin(e);
            });
        }
    } else {
        console.error('Login form not found!');
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    } else {
        console.error('Logout button not found!');
    }

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Table actions
    addTableBtn.addEventListener('click', () => openTableModal());
    updateQRBtn.addEventListener('click', updateAllQRCodes);

    // Table Modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.querySelector('.cancel-btn').addEventListener('click', closeModal);
    tableForm.addEventListener('submit', handleTableSave);

    // QR Modal
    document.querySelector('.close-qr-modal').addEventListener('click', closeQRModal);
    downloadQR.addEventListener('click', downloadQRCode);
    printQR.addEventListener('click', printQRCode);
    testMenuBtn.addEventListener('click', testMenuLink);

    // Chatbot
    toggleChat.addEventListener('click', toggleChatbot);
    sendMessage.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Close modals on backdrop click
    tableModal.addEventListener('click', (e) => {
        if (e.target === tableModal) {
            closeModal();
        }
    });

    qrModal.addEventListener('click', (e) => {
        if (e.target === qrModal) {
            closeQRModal();
        }
    });
}

function handleLogin(e) {
    console.log('Login form submitted');
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

    // Simple authentication (in real app, this would be server-side)
    if (username && password) {
        console.log('Login successful');
        currentUser = { username };
        loginScreen.classList.add('hidden');
        dashboard.classList.remove('hidden');

        // Clear form
        loginForm.reset();
    } else {
        console.log('Login failed - empty credentials');
        alert('Please enter valid credentials');
    }
}

function handleLogout() {
    currentUser = null;
    dashboard.classList.add('hidden');
    loginScreen.classList.remove('hidden');
}

function renderTables() {
    tablesGrid.innerHTML = '';

    tables.forEach(table => {
        const tableCard = createTableCard(table);
        tablesGrid.appendChild(tableCard);
    });
}

function createTableCard(table) {
    const card = document.createElement('div');
    card.className = `table-card ${table.status}`;
    card.onclick = () => openTableModal(table);

    const statusIcon = getStatusIcon(table.status);
    const totalAmount = table.billAmount + (table.billAmount * table.gstPercent / 100);

    card.innerHTML = `
        <div class="table-header">
            <div class="table-name">${table.name}</div>
            <div class="table-status ${table.status}">
                ${statusIcon}
                ${table.status.replace('-', ' ')}
            </div>
        </div>
        
        <div class="table-info">
            <div class="info-item">
                <div class="info-label">Bill Number</div>
                <div class="info-value">${table.billNumber || '-'}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Amount</div>
                <div class="info-value">₹${table.billAmount.toFixed(2)}</div>
            </div>
            <div class="info-item">
                <div class="info-label">GST</div>
                <div class="info-value">${table.gstPercent}%</div>
            </div>
            <div class="info-item">
                <div class="info-label">Customer Type</div>
                <div class="info-value">${table.customerType.replace('-', ' ')}</div>
            </div>
        </div>
        
        <div class="qr-section">
            <button class="qr-btn" onclick="event.stopPropagation(); generateQR(${table.id})">
                <i class="fas fa-qrcode"></i>
                View QR Code
            </button>
        </div>
    `;

    return card;
}

function getStatusIcon(status) {
    const icons = {
        blank: '<i class="fas fa-circle"></i>',
        running: '<i class="fas fa-play"></i>',
        printed: '<i class="fas fa-print"></i>',
        paid: '<i class="fas fa-check"></i>',
        'running-kot': '<i class="fas fa-utensils"></i>'
    };
    return icons[status] || '<i class="fas fa-circle"></i>';
}

function openTableModal(table = null) {
    currentEditingTable = table;
    const modalTitle = document.getElementById('modalTitle');

    if (table) {
        modalTitle.textContent = `Edit ${table.name}`;
        // Populate form
        document.getElementById('tableName').value = table.name;
        document.getElementById('tableStatus').value = table.status;
        document.getElementById('billNumber').value = table.billNumber;
        document.getElementById('billAmount').value = table.billAmount;
        document.getElementById('gstPercent').value = table.gstPercent;
        document.getElementById('customerType').value = table.customerType;
    } else {
        modalTitle.textContent = 'Add New Table';
        tableForm.reset();
        document.getElementById('gstPercent').value = 18; // Default GST
    }

    tableModal.classList.remove('hidden');
}

function closeModal() {
    tableModal.classList.add('hidden');
    currentEditingTable = null;
    tableForm.reset();
}

function handleTableSave(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('tableName').value,
        status: document.getElementById('tableStatus').value,
        billNumber: document.getElementById('billNumber').value,
        billAmount: parseFloat(document.getElementById('billAmount').value) || 0,
        gstPercent: parseFloat(document.getElementById('gstPercent').value) || 18,
        customerType: document.getElementById('customerType').value
    };

    if (currentEditingTable) {
        // Update existing table
        const index = tables.findIndex(t => t.id === currentEditingTable.id);
        if (index !== -1) {
            tables[index] = { ...tables[index], ...formData };
        }
    } else {
        // Add new table
        const newTable = {
            id: Math.max(...tables.map(t => t.id)) + 1,
            ...formData
        };
        tables.push(newTable);
    }

    renderTables();
    closeModal();
}

function generateQR(tableId) {
    const table = tables.find(t => t.id === tableId);
    if (!table) {
        console.error('Table not found:', tableId);
        return;
    }

    console.log('Generating QR for table:', table);

    // Create QR code data - link to the menu page with table parameter
    // Use absolute URL that works for both local files and web servers
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
    const menuUrl = `${baseUrl}menu.html?table=${table.id}`;

    // For QR code, we'll use the direct menu URL
    const qrText = menuUrl;
    console.log('Current URL:', currentUrl);
    console.log('Base URL:', baseUrl);
    console.log('Menu URL for QR:', qrText);

    // Check if QRCode library is loaded, if not use fallback
    if (typeof QRCode === 'undefined') {
        console.log('QRCode library not loaded, using fallback');
        generateQRFallback(qrText, table);
        return;
    }

    // Clear previous QR code
    qrCodeContainer.innerHTML = '<p>Generating QR Code...</p>';

    // Generate QR code with theme-appropriate colors
    const qrColors = isDarkMode ? {
        dark: '#e5e7eb',
        light: '#1f2937'
    } : {
        dark: '#1f2937',
        light: '#ffffff'
    };

    console.log('QR Colors:', qrColors);

    try {
        QRCode.toCanvas(qrText, {
            width: 200,
            height: 200,
            margin: 2,
            color: qrColors
        }, (error, canvas) => {
            if (error) {
                console.error('QR Code generation failed:', error);
                qrCodeContainer.innerHTML = `<p style="color: #ef4444;">Failed to generate QR code: ${error.message}</p>`;
                qrModal.classList.remove('hidden');
                return;
            }

            console.log('QR Code generated successfully');
            currentQRCanvas = canvas;

            // Clear container and add canvas
            qrCodeContainer.innerHTML = '';
            qrCodeContainer.appendChild(canvas);

            // Update modal content
            qrModalTitle.textContent = `QR Code - ${table.name}`;
            qrTableInfo.innerHTML = `
                <strong>${table.name}</strong><br>
                Status: ${table.status.replace('-', ' ')}<br>
                ${table.billNumber ? `Bill: ${table.billNumber}<br>` : ''}
                ${table.billAmount > 0 ? `Amount: ₹${table.billAmount.toFixed(2)}<br>` : ''}
                Customer: ${table.customerType.replace('-', ' ')}<br><br>
                <strong>Menu URL:</strong><br>
                <a href="${menuUrl}" target="_blank" style="color: #667eea; font-size: 0.9rem; word-break: break-all;">${menuUrl}</a><br><br>
                <small>Scan this QR code to access the digital menu for this table.</small>
            `;

            // Show modal
            qrModal.classList.remove('hidden');
        });
    } catch (err) {
        console.error('QRCode.toCanvas error:', err);
        // Fallback to API-based QR code generation
        generateQRFallback(qrText, table);
    }
}

function generateQRFallback(qrText, table) {
    console.log('Using fallback QR generation');

    // Use QR Server API as fallback
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;

    const img = document.createElement('img');
    img.src = qrApiUrl;
    img.alt = 'QR Code';
    img.style.maxWidth = '200px';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';

    img.onload = () => {
        console.log('Fallback QR code loaded successfully');
        qrCodeContainer.innerHTML = '';
        qrCodeContainer.appendChild(img);

        // Update modal content
        const currentUrl = window.location.href;
        const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
        const menuUrl = `${baseUrl}menu.html?table=${table.id}`;

        qrModalTitle.textContent = `QR Code - ${table.name}`;
        qrTableInfo.innerHTML = `
            <strong>${table.name}</strong><br>
            Status: ${table.status.replace('-', ' ')}<br>
            ${table.billNumber ? `Bill: ${table.billNumber}<br>` : ''}
            ${table.billAmount > 0 ? `Amount: ₹${table.billAmount.toFixed(2)}<br>` : ''}
            Customer: ${table.customerType.replace('-', ' ')}<br><br>
            <strong>Menu URL:</strong><br>
            <a href="${menuUrl}" target="_blank" style="color: #667eea; font-size: 0.9rem; word-break: break-all;">${menuUrl}</a><br><br>
            <small>Scan this QR code to access the digital menu for this table.</small>
        `;

        // Show modal
        qrModal.classList.remove('hidden');
    };

    img.onerror = () => {
        console.error('Fallback QR generation also failed');
        qrCodeContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-qrcode" style="font-size: 4rem; color: #9ca3af; margin-bottom: 16px;"></i>
                <p style="color: #6b7280;">QR Code generation temporarily unavailable</p>
                <p style="font-size: 12px; color: #9ca3af; margin-top: 8px;">Table: ${table.name}</p>
            </div>
        `;
        qrModal.classList.remove('hidden');
    };
}

function closeQRModal() {
    qrModal.classList.add('hidden');
    currentQRCanvas = null;
}

function downloadQRCode() {
    const qrImage = qrCodeContainer.querySelector('img');
    const tableName = qrModalTitle.textContent.split(' - ')[1] || 'qr';

    if (currentQRCanvas) {
        // Canvas-based download
        const link = document.createElement('a');
        link.download = `table-${tableName}-qr-code.png`;
        link.href = currentQRCanvas.toDataURL();
        link.click();
    } else if (qrImage) {
        // Image-based download
        const link = document.createElement('a');
        link.download = `table-${tableName}-qr-code.png`;
        link.href = qrImage.src;
        link.target = '_blank';
        link.click();
    } else {
        alert('No QR code available to download');
    }
}

function printQRCode() {
    const qrImage = qrCodeContainer.querySelector('img');
    const tableName = qrModalTitle.textContent.split(' - ')[1] || 'Table';
    let qrSrc = '';

    if (currentQRCanvas) {
        qrSrc = currentQRCanvas.toDataURL();
    } else if (qrImage) {
        qrSrc = qrImage.src;
    } else {
        alert('No QR code available to print');
        return;
    }

    // Create a new window for printing
    const printWindow = window.open('', '_blank');

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>QR Code - ${tableName}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 20px;
                    margin: 0;
                }
                .qr-print-container {
                    max-width: 300px;
                    margin: 0 auto;
                    border: 2px solid #333;
                    padding: 20px;
                    border-radius: 10px;
                }
                .qr-code {
                    margin: 20px 0;
                }
                h1 {
                    color: #333;
                    margin-bottom: 10px;
                }
                .info {
                    font-size: 14px;
                    color: #666;
                    margin-top: 15px;
                }
                @media print {
                    body { margin: 0; }
                    .qr-print-container { border: 1px solid #333; }
                }
            </style>
        </head>
        <body>
            <div class="qr-print-container">
                <h1>Restaurant Manager</h1>
                <h2>${tableName}</h2>
                <div class="qr-code">
                    <img src="${qrSrc}" alt="QR Code" style="max-width: 200px;">
                </div>
                <div class="info">
                    Scan to view menu and place orders
                </div>
            </div>
        </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    // Wait for content to load then print
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
}

function updateAllQRCodes() {
    // In a real application, this would update the QR codes with new menu links or information
    const updatedCount = tables.length;

    // Add timestamp to show they've been updated
    tables.forEach(table => {
        table.lastQRUpdate = new Date().toISOString();
    });

    // Show success message
    alert(`✅ Successfully updated ${updatedCount} QR codes!\n\nAll table QR codes now contain the latest menu information and links.`);

    // Re-render tables to show any visual updates
    renderTables();
}

// Chatbot Functionality
function initializeChatbot() {
    // Start minimized on mobile
    if (window.innerWidth <= 768) {
        chatbot.classList.add('minimized');
        toggleChat.querySelector('i').style.transform = 'rotate(180deg)';
    }
}

function toggleChatbot() {
    chatbot.classList.toggle('minimized');
    const icon = toggleChat.querySelector('i');

    if (chatbot.classList.contains('minimized')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

function handleSendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Process message and get bot response
    setTimeout(() => {
        const response = processMenuQuery(message);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const icon = sender === 'bot' ?
        '<i class="fas fa-robot"></i>' :
        '<i class="fas fa-user"></i>';

    messageDiv.innerHTML = `
        ${icon}
        <div class="message-content">
            <p>${content}</p>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processMenuQuery(query) {
    const lowerQuery = query.toLowerCase();

    // Check for specific item queries
    for (const category of Object.values(menuData)) {
        for (const [itemKey, item] of Object.entries(category.items)) {
            if (lowerQuery.includes(itemKey) || lowerQuery.includes(item.name.toLowerCase())) {
                return formatItemResponse(item);
            }
        }
    }

    // Check for category queries
    if (lowerQuery.includes('breakfast')) {
        return formatCategoryResponse(menuData.breakfast);
    } else if (lowerQuery.includes('pizza')) {
        return formatCategoryResponse(menuData.pizza);
    } else if (lowerQuery.includes('pasta')) {
        return formatCategoryResponse(menuData.pasta);
    } else if (lowerQuery.includes('coffee')) {
        return formatCategoryResponse(menuData.coffee);
    }

    // Check for general queries
    if (lowerQuery.includes('menu') || lowerQuery.includes('what do you have')) {
        return "We have four main categories: Breakfast, Pizza, Pasta, and Coffee. Ask me about any specific category or item for detailed information including prep time, ingredients, and nutritional info!";
    }

    if (lowerQuery.includes('calorie') || lowerQuery.includes('nutrition')) {
        return "I can provide calorie and macro information for any menu item. Just ask about a specific dish like 'avocado toast calories' or 'carbonara nutrition'!";
    }

    if (lowerQuery.includes('prep time') || lowerQuery.includes('how long')) {
        return "I can tell you preparation times for all our dishes. Most breakfast items take 8-15 minutes, pizzas 15-22 minutes, pasta 10-25 minutes, and coffee 2-5 minutes. Ask about any specific item!";
    }

    // Default response
    return "I'm here to help with our menu! Ask me about breakfast, pizza, pasta, coffee, or any specific items. I can provide prep times, descriptions, ingredients, and nutritional information.";
}

function formatItemResponse(item) {
    return `<strong>${item.name}</strong><br><br>
            <strong>Prep Time:</strong> ${item.prepTime}<br>
            <strong>Description:</strong> ${item.description}<br><br>
            <strong>Ingredients:</strong> ${item.ingredients.join(', ')}<br><br>
            <strong>Nutrition (per serving):</strong><br>
            • Calories: ${item.calories}<br>
            • Protein: ${item.protein}g<br>
            • Carbs: ${item.carbs}g<br>
            • Fat: ${item.fat}g`;
}

function formatCategoryResponse(category) {
    const items = Object.values(category.items);
    const itemNames = items.map(item => item.name).join(', ');
    const avgCalories = Math.round(items.reduce((sum, item) => sum + item.calories, 0) / items.length);
    const avgPrepTime = items.map(item => item.prepTime).join(', ');

    return `<strong>${category.category} Menu</strong><br><br>
            <strong>Available items:</strong> ${itemNames}<br><br>
            <strong>Average calories:</strong> ${avgCalories} per serving<br>
            <strong>Prep times:</strong> ${avgPrepTime}<br><br>
            Ask me about any specific item for detailed information!`;
}

// Theme Management
function initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('restaurantTheme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
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
    localStorage.setItem('restaurantTheme', 'dark');

    // Update QR code colors for dark mode if one is currently displayed
    if (currentQRCanvas) {
        updateQRCodeForTheme();
    }
}

function enableLightMode() {
    document.body.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    isDarkMode = false;
    localStorage.setItem('restaurantTheme', 'light');

    // Update QR code colors for light mode if one is currently displayed
    if (currentQRCanvas) {
        updateQRCodeForTheme();
    }
}

function updateQRCodeForTheme() {
    // If QR modal is open, regenerate QR code with appropriate colors
    if (!qrModal.classList.contains('hidden') && currentQRCanvas) {
        const tableId = parseInt(qrModalTitle.textContent.match(/Table (\d+)/)?.[1]);
        if (tableId) {
            generateQR(tableId);
        }
    }
}

// Responsive handling
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && !chatbot.classList.contains('minimized')) {
        toggleChatbot();
    }
});

// Test function for debugging login
window.testLogin = function () {
    console.log('Testing login...');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    if (usernameInput && passwordInput) {   
        usernameInput.value = 'admin';
        passwordInput.value = 'admin';
        console.log('Set admin credentials');

        // Trigger login
        const fakeEvent = { preventDefault: () => { } };
        handleLogin(fakeEvent);
    } else {
        console.error('Could not find username or password inputs');
    }
};

// Test menu link function
function testMenuLink() {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
    const tableId = qrModalTitle.textContent.match(/Table (\d+)/)?.[1] || '1';
    const menuUrl = `${baseUrl}menu.html?table=${tableId}`;

    console.log('Testing menu URL:', menuUrl);
    window.open(menuUrl, '_blank');
}