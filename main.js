// Symbol database
const symbols = [
  {
    id: "ta001",
    name: "Urutengangana",
    img: "urutengangana.jpg",
    description: "Urutengangana is the Māori god of light. He is the eldest of the children of Ranginui the Sky Father and Papatūānuku the Earth Mother. His children were the gods of the stars and the moon.",
    lat: -44.84371667042822,
    lng: 168.34999424254082,
    nearby: "Kinloch Campsite"
  },
  {
    id: "ta002",
    name: "Tumatauenga",
    img: "tumatauenga.jpg",
    description: "Tū or Tumatauenga is the Māori god of war, hunting, food cultivation, fishing and cooking. The Māori would dedicate hunting trips and war-parties to Tūmatauenga.",
    lat: -44.804479311001664,
    lng: 168.8626598779602,
    nearby: "Roses Hut"
  },
  {
    id: "ta003",
    name: "Rūaumoko",
    img: "ruaumoko.jpg",
    description: "Rūaumoko is the god of earthquakes, volcanoes and seasons. He is the youngest son of Ranginui the Sky Father and Papatūānuku the Earth Mother. Although thought to be a kind god, Rūaumoko (like earthquakes and volcanoes) also represents danger and destruction.",
    lat: -44.941065,
    lng: 168.832921,
    nearby: "Arrowtown"
  },
  {
    id: "ta004",
    name: "Rongo",
    img: "rongo.jpg",
    description: "In Māori mythology, Rongo or Rongo-mā-Tāne is the god of cultivated plants, or agriculture, especially the production of kūmara (yams). The Māori relied heavily on their harvests, and would offer the first kumara of the season to Rongo.",
    lat: -44.77415855670547,
    lng: 168.9417571287086,
    nearby: "Highland Creek Hut"
  },
  {
    id: "ta005",
    name: "Mangopare",
    img: "mangopare.jpg",
    description: "The Mangopare symbol depicts the hammerhead shark. It symbolizes strength, termination, strong will and fighting spirit. Māori believed sharks to be protective spirits, and shark teeth necklaces were common status symbols amongst tribe leaders.",
    lat: -45.18835500770874,
    lng: 168.1646390814101,
    nearby: "Careys Hut"
  },
  {
    id: "ta006",
    name: "Moana",
    img: "moana.jpg",
    description: "Moana means an open body of water – an ocean or sea. The term Moana, meaning ocean, is common to all Polynesian cultures. To the Māori, the sea was the source of all life, and the sea was relied on for sustenance, through fishing. The sea can be calm, energetic or dangerous at different times. These qualities are reflected in the meaning of the Moana symbol.",
    lat: -45.140184228882404,
    lng: 168.1792535737948,
    nearby: "Boundary Hut"
  },
  {
    id: "ta007",
    name: "Koru Aihe",
    img: "koruaihe.jpg",
    description: "The Koru Aihe inspired by dolphins symbolizes playfulness, harmony and friendship. Māori revered dolphins, as they did whales, believing them to be water spirits. Legendary tales tell of sailors being guided through treacherous waterways by gods who had taken the form of dolphins.",
    lat: -45.030779,
    lng: 168.660550,
    nearby: "Queenstown center"
  },
  {
    id: "ta008",
    name: "Koru Honu",
    img: "koruhonu.jpg",
    description: "The Koru Honu depicts a sea turtle in the act of swimming. Turtles symbolize travel and navigation in Māori culture. Additional meanings include fertility, longevity, peacefulness and unity.",
    lat: -45.05092350868254,
    lng: 168.22225726264088,
    nearby: "Taipo Hut"
  },
  {
    id: "ta009",
    name: "Wera",
    img: "wera.jpg",
    description: "The Wera symbol represents the tail of a whale. Whales were tapu (sacred) to the Māori. They were thought to be descended from the god of the ocean and were therefore supernatural in nature. The Wera symbolizes the ocean and a guardian spirit, especially for those at sea.",
    lat: -45.355114, 
    lng: 168.090699,
    nearby: "Kiwi Burn Hut"
  },
  {
    id: "ta010",
    name: "Toki Adze",
    img: "tokiadze.jpg",
    description: "The Toki Adze is a ceremonial chisel used by the Māori for occasions such as the felling of a tree in order to carve a canoe, or to produce carved symbols to adorn buildings and structures that are important to the tribe. As a symbol, the Toki represents strength and authority.",
    lat: -44.86689161629982,
    lng: 168.8209805515156,
    nearby: "Macetown Campsite"
  },
  {
    id: "ta011",
    name: "pekapeka",
    img: "pekapekamaori.jpg",
    description: "Pekapeka is the Māori word for bat. Bats are the only land mammal native to New Zealand. The Māori would hunt by kindling a fire in the hollow of a tree, catching the bats in the air as they tried to escape",
    lat: -45.270603, 
    lng: 168.173383,
    nearby: "Mavora Lakes Campsite"
  },
  {
    id: "ta012",
    name: "Hei Taiaha",
    img: "heitaiaha.jpg",
    description: "A Taiaha is a traditional Māori weapon. It is a short fighting staff weapon made for close-quarters combat. Carved from either wood or whalebone, these weapons represent treasured items. The Hei Taiaha symbolizes the Māori warrior culture.",
    lat: -44.95628045870556,
    lng: 168.2743571571188,
    nearby: "Slip Flat Hut"
  },
  {
    id: "ta013",
    name: "Hei Tiki",
    img: "heitiki.jpg",
    description: "The Hei Tiki is commonly regarded as a symbol of good luck and of fertility, representing the unborn human embryo. Hei Tiki is thought to be a representation of the first man. The Māori believe the wearer of a tiki talisman to be clear thinking, perceptive, loyal and knowledgeable.",
    lat: -46.26162215145963,
    lng: 167.8599723016098,
    nearby: "Martin's Hut"
  },
  {
    id: "ta014",
    name: "Manaia",
    img: "manaia.jpg",
    description: "The Manaia symbol represents a mythological spiritual guardian, or messenger. It is traditionally depicted with the head of a bird, body of a man and the tail of a fish. The Manaia guards against evil and guides the spirit.",
    lat: -46.101719,
    lng: 167.838900,
    nearby: "Longwood Forest entrance"
  },
  {
    id: "ta015",
    name: "Pikorua Double Twist",
    img: "pikorua.jpg",
    description: "The Pikorua double twist represents the joining together of two people, or two cultures for eternity. Although they may experience ups and downs, they will remain bonded by friendship and loyalty for life.",
    lat: -45.80391596464067,
    lng: 167.8811638384799,
    nearby: "Telford Campsite"
  },
  {
    id: "ta016",
    name: "Pikorua Single Twist ",
    img: "pikorua1.jpg",
    description: "The Pikorua single twist represents the path of life, it is the symbol of eternity. It represents the joining together of two people. The meaning of the Pikorua single twist is different from the double twist Pikorua",
    lat: -45.593313041200155,
    lng: 167.9515867936478,
    nearby: "Lower Princhester Hut"
  },
  {
    id: "ta017",
    name: "Hei Matau",
    img: "heimatau.jpg",
    description: "The Hei Matau, or the fish hook, symbolizes prosperity. In their quiet corner of the South Pacific, fish stocks were plentiful, and the Māori knew that a man (or woman) who had the means to catch fish would prosper. The Hei Matau also represents strength, determination (required for good fishing), good health (acquired by good eating), and providing a safe journey over water.",
    lat: -45.70739004211443,
    lng: 167.9993234310969,
    nearby: "Aparima Hut"
  },
  {
    id: "ta018",
    name: "Koru",
    img: "koru.jpg",
    description: "The Koru motif is the cornerstone of much Māori art. It is not considered tapu (sacred) in and of itself, but recurs in sacred designs. It represents the young frond of the silver fern, which is native only to New Zealand. As such, in recent years the symbol has come to be used to represent New Zealand in many ways, not only Māori culture. The Koru symbolizes life, growth, strength and peace. Its shape conveys ideas of movement, latent and potential energy, creation and renewal, light and enlightenment.",
    lat: -45.77928833245715,
    lng: 167.9402280465084,
    nearby: "Lower Wairaki Hut"
  },
  {
    id: "ta019",
    name: "Porowhita",
    img: "porowhita.jpg",
    description: "The porowhita, or circle, is a powerful symbol in Māori design, representing the never-ending cycle of life and nature. With its closed circle and central hole, the porowhita embodies continual renewal and interconnectedness, reflecting the belief that life is in constant motion, with no beginning or end.",
    lat: -44.697904,
    lng: 169.125696,
    nearby: "Wanaka"
  },
  {
    id: "ta020",
    name: "Bluff",
    img: "bluff.jpeg",
    description: "¡Has llegado a Bluff! ¡Eres una crack! Estoy orgulloso de haber compartido contigo el inicio de esta aventura y verte avanzar en cada paso del camino. ¡Eres la mejor, chuli! (y no olvides volver 😘)",
    lat: -46.613694,
    lng: 168.33736999999996,
    nearby: "Bluff"
  }
];

let foundSymbols = [];
// Number of symbols already caught (stored in IndexedDB)
let catchCount = 0;
// Saved scroll position used to lock/unlock page when an image is fullscreen
let _savedScrollY = 0;

// Update the Collection tab button label to show current count
function updateCollectionButton() {
    try {
        const btn = document.querySelector('.tabs .tab[data-tab="tab2"]');
        if (!btn) return;
        const total = Array.isArray(symbols) ? symbols.length : 20;
        btn.textContent = `Collection (${catchCount}/${total})`;
    } catch (e) {
        // ignore
    }
}

// 1. Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Note the leading slash and the scope object
    navigator.serviceWorker.register('/DSK/worker.js', { scope: '/DSK/' })
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.error('Service Worker failed', err));
  });
}

// 2. Configuración de la Base de Datos (IndexedDB)
let db;
const dbName = "MaoriGameDB";
const dbVersion = 4; // Incrementamos la versión

const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = (event) => {
    db = event.target.result;
    // Tabla para progreso del juego
    if (!db.objectStoreNames.contains("foundSymbols")) {
        db.createObjectStore("foundSymbols", { keyPath: "id" });
    }
    // NUEVA TABLA para archivos (CSS e Imágenes)
    if (!db.objectStoreNames.contains("assets")) {
        db.createObjectStore("assets", { keyPath: "name" });
    }
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log("DB abierta con éxito");
    // Al abrir, intentamos guardar archivos (si hay red) 
    // y aplicamos los que ya tengamos (por si estamos offline)
    initAssets();
};

request.onsuccess = (e) => {
    db = e.target.result;
    // Initialize UI
    renderSymbolList();
    updateSymbolUI();

    // Load current count of found symbols into catchCount
    try {
        const countTx = db.transaction(["foundSymbols"], "readonly");
        const countStore = countTx.objectStore("foundSymbols");
        const countReq = countStore.count();
        countReq.onsuccess = () => {
            catchCount = countReq.result || 0;
            // Optional: expose in console for debugging
            console.log('catchCount initialized:', catchCount);
            try { updateCollectionButton(); } catch (e) {}
        };
        countReq.onerror = () => {
            console.warn('Failed to initialize catchCount');
        };
    } catch (err) {
        console.warn('Error counting foundSymbols on DB open', err);
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    
    // hide spinner on load
    const spinner = document.getElementById('gps-loader');
    if (spinner) spinner.style.display = 'none';

    const scanBtn = document.getElementById('scanBtn');
    const scanBtnManual = document.getElementById('scanBtnManual');
    if (scanBtn) scanBtn.addEventListener('click', startScan);
    if (scanBtnManual) scanBtnManual.addEventListener('click', manualScan);

    // Set collection button label on initial DOM ready
    try { updateCollectionButton(); } catch (e) {}

});



// 3. Funciones de la Aplicación
function saveSymbol(symbolId) {
    const transaction = db.transaction(["foundSymbols"], "readwrite");
    const store = transaction.objectStore("foundSymbols");
    const newSymbol = { id: symbolId, date: new Date().toLocaleString() };

    store.add(newSymbol);
    transaction.oncomplete = () => {
        // Increment the cached count and update UI
        catchCount = (typeof catchCount === 'number') ? catchCount + 1 : 1;
        console.log('catchCount incremented:', catchCount);
        try { updateCollectionButton(); } catch (e) {}
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
            if (card && card.classList.contains('locked')) {
                card.classList.replace('locked', 'found');
                // Use a safer innerHTML approach or build elements, but here is the cleaned template:
                card.innerHTML = `
                    <div style="flex: 1;">
                        <h3 style="margin-top:0;">${symbolData.name}</h3>
                        <p>${symbolData.description}</p>
                        <small style="color: #666;">Discovered: ${cursor.value.date}</small><br/>
                        <small style="color: #555;">Near by: ${symbolData.nearby}</small>
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
    
    // 1. Abrimos una transacción para ver qué hemos descubierto ya
    const transaction = db.transaction(["foundSymbols", "assets"], "readonly");
    const foundStore = transaction.objectStore("foundSymbols");
    const assetStore = transaction.objectStore("assets");

    symbols.forEach(symbol => {
        const card = document.createElement('div');
        card.className = 'symbol-card locked'; // Por defecto todos bloqueados
        card.dataset.id = symbol.id;
        
        // Estado inicial (Bloqueado)
        card.innerHTML = `
            <div style="flex: 1;">
                <h3>???</h3>
                <p>Status: <strong>Undiscovered</strong></p>
                <p class="distance-hint">Signal: Unknown</p>
            </div>
            <div class="img-container" style="display: flex; align-items: center; justify-content: center; background: var(--bg-main);">
                <span style="font-size: 24px;">🔒</span>
            </div>
        `;

        // 2. Comprobamos si este símbolo ya fue encontrado en sesiones anteriores
        const checkFound = foundStore.get(symbol.id);
        
        checkFound.onsuccess = () => {
            if (checkFound.result) {
                // Si existe en foundSymbols, actualizamos la tarjeta a estado "Encontrado"
                const discoveryDate = checkFound.result.date;
                
                // Usamos la función que ya tenemos para inyectar la imagen desde la DB
                updateSymbolCardToFound(card, symbol, discoveryDate);
            }
        };

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
        // Keep catchCount in sync with DB results
        try {
            catchCount = Array.isArray(foundItems) ? foundItems.length : 0;
        } catch (err) {
            catchCount = 0;
        }
        console.log('catchCount refreshed from DB:', catchCount);
        try { updateCollectionButton(); } catch (e) {}
        // Create a Set of IDs we already own
        const foundIds = new Set(foundItems.map(item => item.id));
        
        let foundCount = 0;
        let closestDistance = Infinity;
        let foundId = "";

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
                    foundCount ++;
                }
                return; 
            }

            // LOGIC B: If we don't have it, update the DISTANCE HINT
            if (card) {
                const hintEl = card.querySelector('.distance-hint');
                if (hintEl) {
                    let hintText = "";
                    if (distance < 10000) hintText = "🔥 BURNING HOT (< 10km)";
                    else if (distance < 20000) hintText = "☀️ Hot (< 20km)";
                    else if (distance < 30000) hintText = "☁️ Warm (< 30km)";
                    else hintText = "❄️ Cold (> 30km)";
                    
                    hintEl.textContent = `Signal: ${hintText}`;
                }
            }

            // LOGIC C: Check if we are close enough to catch it (5km)
            if (distance <= 5000) {
                foundId = symbol.id;
                date = new Date().toLocaleString();
                saveSymbol(symbol.id);
                foundCount++;
                // Update UI immediately
                if (card) updateSymbolCardToFound(card, symbol, new Date().toLocaleString());
            }
            
            // Track closest for status message
            if (distance < closestDistance) { 
                closestDistance = distance;
                closestHut = symbol.nearby;

            }
        });

        // Update Status Box message
        if (foundCount > 0) {
            statusEl.innerHTML = `
                <div style="flex: 1;">
                    <h3>🎉🎉 Kia Ora! 🎉🎉 <br/> You caught ${foundCount} symbol(s)!</h3>    
                    <h3>${symbols.find(s => s.id === foundId).name}</h3>
                </div>
                <div class="img-container found">
                    <img src="./img/${symbols.find(s => s.id === foundId).img}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <p>${symbols.find(s => s.id === foundId).description}</p>
                    <small style="color: #555;">Near by: ${symbols.find(s => s.id === foundId).nearby}</small><br/>
                    <small style="color: #555;">Discovered: ${date}</small>
                </div>
            `;
        } else {
            // Show helpful message about the closest item
            const distStr = closestDistance > 1000 
                ? (closestDistance/1000).toFixed(1) + "km" 
                : Math.round(closestDistance) + "m";

            statusEl.innerHTML = `Scanning complete. <br/> Closest symbol is ${distStr} away, near by:<span style="color: #ffbb00ff;"> ${closestHut}</span><br/> Keep going!<br/> 🏃‍♀️🏃‍♀️🏃‍♀️ <br/> (Check Collection tab for hints!)`;
            //statusEl.style.backgroundColor = "#fff3cd"; // Yellow warning color
        }
        
        hideSpinner();
    };

    getAllRequest.onerror = (e) => {
        console.error("DB Error", e);
        hideSpinner();
    };
}

// Helper to handle the UI switch from Locked -> Found
// Helper actualizado para manejar el cambio de Bloqueado -> Encontrado usando IndexedDB
function updateSymbolCardToFound(card, symbol, date) {
    card.classList.remove('locked');
    card.classList.add('found');
    
    // 1. Limpiamos el contenido previo y preparamos la estructura básica
    card.innerHTML = ''; 

    // 2. Creamos el contenedor de texto (lado izquierdo)
    const infoDiv = document.createElement('div');
    infoDiv.style.flex = "1";
    infoDiv.innerHTML = `
        <h3>${symbol.name}</h3>
        <p>${symbol.description}</p>
        <small style="display: block; color: var(--text-muted); margin-top: 5px;">Discovered: ${date}</small>
        <small style="display: block; color: var(--text-muted);">Near by: ${symbol.nearby || 'Unknown'}</small>
    `;

    // 3. Creamos el contenedor de imagen (lado derecho)
    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-container';
    
    const imgElement = document.createElement('img');
    imgElement.style.cssText = "width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.3s;";
    imgElement.alt = symbol.name;

    // 4. LÓGICA DE INDEXED DB: Buscamos el archivo binario
    if (db) {
        const transaction = db.transaction(["assets"], "readonly");
        const request = transaction.objectStore("assets").get(symbol.img);

        request.onsuccess = () => {
            if (request.result && request.result.data) {
                // Creamos una URL "virtual" para el archivo binario (Blob)
                const blobUrl = URL.createObjectURL(request.result.data);
                imgElement.src = blobUrl;
                imgElement.style.opacity = "1"; // Aparece suavemente al cargar
            } else {
                // Si no está en DB, intentamos carga normal como plan B
                imgElement.src = `./img/${symbol.img}`;
                imgElement.style.opacity = "1";
            }
        };

        request.onerror = () => {
            imgElement.src = `./img/${symbol.img}`;
            imgElement.style.opacity = "1";
        };
    }

    // 5. Ensamblamos todo en la tarjeta
    imgDiv.appendChild(imgElement);
    card.appendChild(infoDiv);
    card.appendChild(imgDiv);
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
// Enlarge image on click — use event delegation so dynamically created .img-container elements work
function openFullscreen(container) {
    // Close any other fullscreen container first
    document.querySelectorAll('.img-container.fullscreen').forEach(el => {
        if (el !== container) closeFullscreen(el);
    });

    if (container.classList.contains('fullscreen')) return; // already open
    // Lock page scroll
    try {
        _savedScrollY = window.scrollY || window.pageYOffset || 0;
        document.body.classList.add('no-scroll');
        // Prevent layout shift by setting top
        document.body.style.top = `-${_savedScrollY}px`;
    } catch (e) {}

    container.classList.add('fullscreen');

    // Add a close button for clearer affordance on touch devices
    if (!container.querySelector('.img-close-btn')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'img-close-btn';
        btn.setAttribute('aria-label', 'Close image');
        btn.innerHTML = '&times;';

        // Stop propagation so the delegated click handler doesn't re-toggle
        btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            closeFullscreen(container);
        });

        container.appendChild(btn);
        // Move focus to the close button for keyboard users
        btn.focus();
    }
}

function closeFullscreen(container) {
    if (!container.classList.contains('fullscreen')) return;
    container.classList.remove('fullscreen');
    const btn = container.querySelector('.img-close-btn');
    if (btn) {
        // Attempt to return focus to the container for accessibility
        try { container.focus(); } catch (e) {}
        btn.remove();
    }
    // Restore page scroll
    try {
        document.body.classList.remove('no-scroll');
        document.body.style.top = '';
        window.scrollTo(0, _savedScrollY || 0);
        _savedScrollY = 0;
    } catch (e) {}
}

// Close any open fullscreen images on ANY click (capture phase) so a single tap anywhere exits fullscreen.
document.addEventListener('click', (e) => {
    const open = document.querySelector('.img-container.fullscreen');
    if (!open) return; // nothing to do

    // Close all open fullscreen containers
    document.querySelectorAll('.img-container.fullscreen').forEach(c => closeFullscreen(c));

    // Prevent the regular delegated click handler from re-opening or toggling in the same event
    e.stopPropagation();
    // Also prevent default just in case
    e.preventDefault();
}, { capture: true });

document.addEventListener('click', (e) => {
    // Ignore clicks on the close button itself (it has its own handler and stops propagation)
    if (e.target.closest('.img-close-btn')) return;

    const container = e.target.closest('.img-container');
    if (!container) return;

    const doToggle = () => {
        if (container.classList.contains('fullscreen')) {
            closeFullscreen(container);
        } else {
            openFullscreen(container);
        }
    };

    // Use View Transitions API when available for a smoother effect
    if (!('startViewTransition' in document) || typeof document.startViewTransition !== 'function') {
        doToggle();
        return;
    }

    try {
        document.startViewTransition(() => {
            doToggle();
        });
    } catch (err) {
        // Fallback if the API call throws for any reason
        doToggle();
    }
});

// Allow closing fullscreen with the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.img-container.fullscreen').forEach(c => closeFullscreen(c));
    }
});

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
    //if (status) status.style.display = 'none';
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


//Funciones de DB
async function initAssets() {
    // Cachear el CSS
    await cacheAsset('styles.css', './styles.css');
    applyCachedStyles();

    // Cachear imágenes de los símbolos
    symbols.forEach(s => {
        if (s.img && s.img !== "") {
            // Pasamos el nombre del archivo y la ruta completa
            cacheAsset(s.img, `./img/${s.img}`);
        }
    });
}

async function cacheAsset(name, url) {
    if (!db) return;

    // 1. Verificación previa: ¿Ya tenemos este archivo en IndexedDB?
    const alreadyCached = await new Promise((resolve) => {
        const transaction = db.transaction(["assets"], "readonly");
        const request = transaction.objectStore("assets").get(name);
        request.onsuccess = () => resolve(!!request.result);
        request.onerror = () => resolve(false);
    });

    if (alreadyCached) {
        console.log(`ASSET: ${name} ya está en cache.`);
        return; 
    }

    // 2. Si no lo tenemos, intentamos descargarlo
    try {
        console.log(`ASSET: Descargando ${name} desde ${url}...`);
        const response = await fetch(url);
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const blob = await response.blob();

        // 3. Guardar el archivo binario en IndexedDB
        const transaction = db.transaction(["assets"], "readwrite");
        const store = transaction.objectStore("assets");
        
        // Guardamos un objeto con el nombre (llave) y el blob (datos)
        const putRequest = store.put({ name: name, data: blob });

        putRequest.onsuccess = () => {
            console.log(`ASSET: ${name} guardado con éxito para uso offline.`);
        };
    } catch (e) {
        console.warn(`ASSET: No se pudo cachear ${name}. Probablemente estés offline o la ruta sea incorrecta.`, e);
    }
}

function applyCachedStyles() {
    const transaction = db.transaction(["assets"], "readonly");
    const request = transaction.objectStore("assets").get("styles.css");

    request.onsuccess = () => {
        if (request.result) {
            const blob = request.result.data;
            const styleUrl = URL.createObjectURL(blob);
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = styleUrl;
            document.head.appendChild(link);
        }
    };
}