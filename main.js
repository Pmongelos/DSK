// Symbol database
const symbols = [
    { id: 'ta001', name: 'Kauri Tree', img: "", lat: -35.2760, lng: 173.5511, description: 'Ancient native tree of New Zealand'},
    { id: 'ta002', name: 'Mountain Peak', img: "", lat: -39.2920, lng: 176.3782, description: 'Highest point on the trail'},
    { id: 'ta003', name: 'Urutengangana', img: "urutengangana.jpg", description: "Dios de la luz. El primogénito de los dioses.", lat: -41.1680009, lng: 174.0608852},
    { id: 'ta004', name: 'Tumatauenga', img: "tumatauenga.jpg", description: "Dios de la guerra y la caza.", lat: -39.3524332, lng: 174.2214992},
    { id: 'ta005', name: 'Rūaumoko', img: "ruaumoko.jpg", description: "Dios de los terremotos y volcanes.", lat: -42.1119642, lng: 172.6010590},
    { id: 'ta006', name: 'Pekapeka', img: "pekapekamaori.jpg", description: "Murciélago nativo maorí.", lat: -37.0661338, lng: 174.8635439 },
    { id: 'ta007', name: 'Rongo', img: "rongo.jpg", description: "Dios de la paz y la agricultura.", lat: -42.9150553, lng: 171.9547704}
];

let foundSymbols = [];

// 1. Registro del Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('worker.js')
        .then(() => console.log("Service Worker registrado"));
}

// 2. Configuración de la Base de Datos (IndexedDB)
let db;
const request = indexedDB.open("TMKG_V1", 1);

request.onupgradeneeded = (e) => {
    db = e.target.result;
    db.createObjectStore("foundSymbols", { keyPath: "id" });
};

request.onsuccess = (e) => {
    db = e.target.result;
    updateSymbolUI();
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderSymbolList();
    // hide spinner on load
    const spinner = document.getElementById('gps-loader');
    if (spinner) spinner.style.display = 'none';

    const scanBtn = document.getElementById('scanBtn');
    const scanBtnManual = document.getElementById('scanBtnManual');
    if (scanBtn) scanBtn.addEventListener('click', startScan);
    if (scanBtnManual) scanBtnManual.addEventListener('click', manualScan);

});


// 3. Funciones de la Aplicación
function saveSymbol(symbolId) {
    const transaction = db.transaction(["foundSymbols"], "readwrite");
    const store = transaction.objectStore("foundSymbols");
    const newSymbol = { id: symbolId, date: new Date().toLocaleString() };

    store.add(newSymbol);
    transaction.oncomplete = () => {
        updateSymbolUI();
    };
}

function updateSymbolUI() {
    const transaction = db.transaction("foundSymbols", "readonly");
    const store = transaction.objectStore("foundSymbols");

    store.openCursor().onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
            const symbolId = cursor.value.id;
            const symbolData = symbols.find(s => s.id === symbolId);
            
            // Direct DOM access using the data-id attribute
            const card = document.querySelector(`.symbol-card[data-id="${symbolId}"]`);

            // Only update if it hasn't been visually updated yet
            if (card && card.classList.contains('hidden')) {
                card.classList.replace('hidden', 'found');
                // Use a safer innerHTML approach or build elements, but here is the cleaned template:
                card.innerHTML = `
                    <div style="flex: 1;">
                        <h3 style="margin-top:0;">${symbolData.name}</h3>
                        <p>${symbolData.description}</p>
                        <small style="color: #666;">Discovered: ${cursor.value.date}</small>
                    </div>
                    <div class="img-container">
                        <img src="./img/${symbolData.img}" alt="${symbolData.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                `;
            }

            cursor.continue();
        }
    };
}

function renderSymbolList() {
    const container = document.getElementById('symbols-container');
    container.innerHTML = ''; 
    
    symbols.forEach(symbol => {
        const card = document.createElement('div');
        // We use 'locked' instead of 'hidden' so it is visible but grayed out
        card.className = 'symbol-card locked'; 
        card.dataset.id = symbol.id;
        
        card.innerHTML = `
            <div style="flex: 1;">
                <h3>???</h3>
                <p>Status: <strong>Undiscovered</strong></p>
                <p class="distance-hint">Signal: Unknown</p>
            </div>
            <div class="img-container" style="display: flex; align-items: center; justify-content: center; background: #ccc;">
                <span style="font-size: 24px;">🔒</span>
            </div>
        `;
        container.appendChild(card);
    });
}

//Funciones de escaneo y posición
function startScan() {
    const statusEl = document.getElementById('status');
    const spinner = document.getElementById('gps-loader');
    const scanBtn = document.getElementById('scanBtn');
    statusEl.textContent = 'Scanning location...';
    showSpinner();
    
    navigator.geolocation.getCurrentPosition(
        position => {
            statusEl.textContent = `Location acquired!`;
            checkPosition(position.coords);
        },
        error => {
            statusEl.textContent = `GPS Error: ${error.message}`;
            console.error('GPS Error:', error);
            hideSpinner();
        },
        {
            enableHighAccuracy: false,
            timeout: 40000,
            maximumAge: 0
        }
    );
}

function manualScan() {
    const statusEl = document.getElementById('status');
    const spinner = document.getElementById('gps-loader');
    const scanBtnManual = document.getElementById('scanBtnManual');
    statusEl.textContent = 'Starting manual scan...';
    showSpinner();

    const latVal = document.getElementById('lat').value;
    const lonVal = document.getElementById('lon').value;

    const lat = parseFloat(latVal);
    const lon = parseFloat(lonVal);

    if (Number.isNaN(lat) || Number.isNaN(lon)) {
        statusEl.textContent = 'Manual scan error: invalid coordinates.';
        hideSpinner();
        return;
    }

    statusEl.textContent = 'Using manual coordinates...';
    checkPosition({ latitude: lat, longitude: lon });
}


function checkPosition(coords) {
    const statusEl = document.getElementById('status');
    
    // 1. Get all found symbols from DB first
    const transaction = db.transaction(["foundSymbols"], "readonly");
    const store = transaction.objectStore("foundSymbols");
    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = () => {
        const foundItems = getAllRequest.result;
        // Create a Set of IDs we already own
        const foundIds = new Set(foundItems.map(item => item.id));
        
        let foundCount = 0;
        let closestDistance = Infinity;

        symbols.forEach(symbol => {
            // Calculate distance for EVERY symbol (found or not)
            const distance = calculateDistance(
                coords.latitude, 
                coords.longitude, 
                symbol.lat, 
                symbol.lng
            );

            // Find the card in the UI
            const card = document.querySelector(`.symbol-card[data-id="${symbol.id}"]`);

            // LOGIC A: If we already have it, ensure UI is updated and skip logic
            if (foundIds.has(symbol.id)) {
                if (card && card.classList.contains('locked')) {
                    // If it was locked, unlock it now (visual update)
                    updateSymbolCardToFound(card, symbol, foundItems.find(i => i.id === symbol.id).date);
                }
                return; 
            }

            // LOGIC B: If we don't have it, update the DISTANCE HINT
            if (card) {
                const hintEl = card.querySelector('.distance-hint');
                if (hintEl) {
                    let hintText = "";
                    if (distance < 200) hintText = "🔥 BURNING HOT (< 200m)";
                    else if (distance < 500) hintText = "☀️ Hot (< 500m)";
                    else if (distance < 1000) hintText = "☁️ Warm (< 1km)";
                    else hintText = "❄️ Cold (> 1km)";
                    
                    hintEl.textContent = `Signal: ${hintText}`;
                }
            }

            // LOGIC C: Check if we are close enough to catch it (50m)
            if (distance <= 50) {
                saveSymbol(symbol.id);
                foundCount++;
                // Update UI immediately
                if (card) updateSymbolCardToFound(card, symbol, new Date().toLocaleString());
            }
            
            // Track closest for status message
            if (distance < closestDistance) closestDistance = distance;
        });

        // Update Status Box message
        if (foundCount > 0) {
            statusEl.textContent = `Kia Ora! You caught ${foundCount} symbol(s)!`;
            statusEl.style.backgroundColor = "#d4edda"; 
        } else {
            // Show helpful message about the closest item
            const distStr = closestDistance > 1000 
                ? (closestDistance/1000).toFixed(1) + "km" 
                : Math.round(closestDistance) + "m";
            
            statusEl.textContent = `Scanning complete. Closest symbol is ${distStr} away. Check Collection tab for hints!`;
            statusEl.style.backgroundColor = "#fff3cd"; // Yellow warning color
        }
        
        hideSpinner();
    };

    getAllRequest.onerror = (e) => {
        console.error("DB Error", e);
        hideSpinner();
    };
}

// Helper to handle the UI switch from Locked -> Found
function updateSymbolCardToFound(card, symbol, date) {
    card.classList.remove('locked');
    card.classList.add('found');
    card.innerHTML = `
        <div style="flex: 1;">
            <h3>${symbol.name}</h3>
            <p>${symbol.description}</p>
            <small style="color: #555;">Discovered: ${date}</small>
        </div>
        <div class="img-container">
            <img src="./img/${symbol.img}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
    `;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth radius in meters
    const phi1 = lat1 * Math.PI/180;
    const phi2 = lat2 * Math.PI/180;
    const deltaPhi = (lat2 - lat1) * Math.PI/180;
    const deltaLambda = (lon2 - lon1) * Math.PI/180;

    const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
                Math.cos(phi1) * Math.cos(phi2) *
                Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
                
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

//Funciones de UI

//Switch selector management
document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('modeSwitch');
    const gpsMode = document.getElementById('gps-mode');
    const manualMode = document.getElementById('manual-mode');

    modeSwitch.addEventListener('change', function () {
        if (modeSwitch.checked) {
            // Manual mode active
            gpsMode.style.display = 'none';
            manualMode.style.display = '';
        } else {
            // GPS mode active
            gpsMode.style.display = '';
            manualMode.style.display = 'none';
        }
    });
});

//Tab selector management
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and panes
      tabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');

      // Show corresponding pane
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});

// Spinner timing control (milliseconds)
const MIN_SPINNER_MS = 800; // mínimo tiempo que se mostrará el spinner
let spinnerStart = 0;

function showSpinner() {
    const spinner = document.getElementById('gps-loader');
    const modes = document.getElementById('mode-inputs');
    const status = document.getElementById('status');
    if (status) status.style.display = 'none';
    if (spinner) spinner.style.display = 'inline-block';
    if (modes) modes.style.display = 'none';
    spinnerStart = Date.now();
}

function hideSpinner() {
    const spinner = document.getElementById('gps-loader');
    const modes = document.getElementById('mode-inputs');
    const elapsed = Date.now() - spinnerStart;
    const remaining = Math.max(0, MIN_SPINNER_MS - elapsed);
    const status = document.getElementById('status');
    setTimeout(() => {
        if (spinner) spinner.style.display = 'none';
        if (modes) modes.style.display = '';
        if (status) status.style.display = '';
    }, remaining);
}