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

//Guardar en localStorage
function saveToStorage(symbol) {
    localStorage.setItem(symbol.id, JSON.stringify({
        ...symbol,
        foundAt: new Date().toISOString()
    }));
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
    const spinner = document.getElementById('gps-loader');
    const scanBtn = document.getElementById('scanBtn');
    const scanBtnManual = document.getElementById('scanBtnManual');
    let foundCount = 0;
    
    try {
        symbols.forEach(symbol => {
            if (foundSymbols.includes(symbol.id)) return;
            
            const distance = calculateDistance(
                coords.latitude, 
                coords.longitude, 
                symbol.lat, 
                symbol.lng
            );
            
            if (distance <= 50) {
                foundSymbols.push(symbol.id);
                updateSymbolUI(symbol.id);
                saveToStorage(symbol);
                foundCount++;
            }
        });
        
        if (foundCount > 0) {
            statusEl.textContent = `Found ${foundCount} new symbols!`;
        } else {
            statusEl.textContent = 'No new symbols found nearby.';
        }
    } finally {
        hideSpinner();
    }
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

function updateSymbolUI(symbolId) {
    const cards = document.querySelectorAll('.symbol-card');
    cards.forEach(card => {
        if (card.dataset.id === symbolId) {
            card.classList.replace('hidden', 'found');
            card.innerHTML = `
                <div>
                <h3>${symbols.find(s => s.id === symbolId).name}</h3>
                <p>${symbols.find(s => s.id === symbolId).description}</p>
                <small>Discovered at ${new Date().toLocaleTimeString()}</small>
                </div>
                <div class="img-container"><img src=./img/${symbols.find(s => s.id === symbolId).img} style="width: 100%"></div>
            `;
        }
    });
}

function renderSymbolList() {
            const container = document.getElementById('symbols-container');
            symbols.forEach(symbol => {
                const card = document.createElement('div');
                card.className = 'symbol-card hidden';
                card.dataset.id = symbol.id;
                card.innerHTML = `
                    <h3>${symbol.name}</h3>
                    <p>Status: Not discovered</p>
                    <div class="img-container"><img src=./img/${symbol.img} ></div>
                `;
                container.appendChild(card);
            });
        }

