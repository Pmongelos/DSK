// Symbol database
        const symbols = [
            { id: 'ta001', name: 'Kauri Tree', img: "", lat: -35.2760, lng: 173.5511, description: 'Ancient native tree of New Zealand'},
            { id: 'ta002', name: 'Mountain Peak', img: "", lat: -39.2920, lng: 176.3782, description: 'Highest point on the trail'}
        ];

        let foundSymbols = [];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderSymbolList();
    document.getElementById('scanBtn').addEventListener('click', startScan);
    document.getElementById('scanBtnManual').addEventListener('click', manualScan);

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
    statusEl.textContent = 'Scanning location...';
    
    navigator.geolocation.getCurrentPosition(
        position => {
            statusEl.textContent = `Location acquired!`;
            checkPosition(position.coords);
        },
        error => {
            statusEl.textContent = `GPS Error: ${error.message}`;
            console.error('GPS Error:', error);
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
    statusEl.textContent = 'Starting manual scan...';

    const latVal = document.getElementById('lat').value;
    const lonVal = document.getElementById('lon').value;

    const lat = parseFloat(latVal);
    const lon = parseFloat(lonVal);

    if (Number.isNaN(lat) || Number.isNaN(lon)) {
        statusEl.textContent = 'Manual scan error: invalid coordinates.';
        return;
    }

    statusEl.textContent = 'Using manual coordinates...';
    checkPosition({ latitude: lat, longitude: lon });
}


function checkPosition(coords) {
    const statusEl = document.getElementById('status');
    let foundCount = 0;
    
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
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2 - lat1) * Math.PI/180;
    const Δλ = (lon2 - lon1) * Math.PI/180;
    
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
                
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

//Funciones de UI

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
                <h3>${symbols.find(s => s.id === symbolId).name}</h3>
                <p>${symbols.find(s => s.id === symbolId).description}</p>
                <small>Discovered at ${new Date().toLocaleTimeString()}</small>
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
                    <div class="img-container"><img src=${symbol.img}></div>
                `;
                container.appendChild(card);
            });
        }

