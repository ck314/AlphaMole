// Global variable to store elements data
let elementsData = [];
let isDataLoaded = false;

// Function to load elements data from JSON
async function loadElementsData() {
    try {
        console.log('Attempting to load elements data...');
        // Use absolute path from root of server
        const response = await fetch('/data/elements.json');
        if (!response.ok) {
            throw new Error(`Failed to load elements data: ${response.status} ${response.statusText}`);
        }
        elementsData = await response.json();
        isDataLoaded = true;
        console.log('Elements data loaded successfully:', elementsData.length, 'elements found');
    } catch (error) {
        console.error('Error loading elements data:', error);
        // If we're running locally without a server, show a helpful message
        if (error.message.includes('Failed to fetch')) {
            console.error('This error typically occurs when running the file directly from the filesystem.');
            console.error('Please run the files through a local web server.');
            console.error('You can use Python\'s built-in server: python -m http.server');
            console.error('Or Node.js\'s http-server: npx http-server');
        }
        isDataLoaded = false;
    }
}

// Function to get random element from the array
function getRandomElement() {
    if (!isDataLoaded || elementsData.length === 0) {
        console.error('Elements data not loaded yet');
        return { symbol: '?', color: '#CCCCCC' }; // Fallback element
    }
    const randomIndex = Math.floor(Math.random() * elementsData.length);
    return elementsData[randomIndex];
}

// Function to get random evaluation symbol
function getRandomSymbol() {
    return Math.random() < 0.5 ? '✅' : '❌';
}

// Function to create molecule HTML
function createMoleculeHTML(elements) {
    let html = '';
    elements.forEach((element, index) => {
        html += `<div class="element" style="color: ${element.color}; background: none;">${element.symbol}</div>`;
        if (index < elements.length - 1) {
            html += '<div class="bond">—</div>';
        }
    });
    return html;
}

// Function to update the display
async function updateDisplay() {
    console.log('Updating display...');
    
    // Ensure elements data is loaded
    if (!isDataLoaded) {
        console.log('Data not loaded, attempting to load...');
        await loadElementsData();
        if (!isDataLoaded) {
            console.error('Failed to load data, cannot update display');
            return;
        }
    }

    const numElements = parseInt(document.getElementById('numberSelect').value);
    const selectedElements = [];
    
    // Get random elements based on selection
    for (let i = 0; i < numElements; i++) {
        selectedElements.push(getRandomElement());
    }
    
    // Get single random symbol
    const symbol = getRandomSymbol();
    
    // Update the DOM
    const moleculeElement = document.getElementById('molecule');
    const symbolElement = document.getElementById('symbol');
    const combinedWordElement = document.getElementById('combinedWord');

    if (!moleculeElement || !symbolElement || !combinedWordElement) {
        console.error('Required DOM elements not found');
        return;
    }

    moleculeElement.innerHTML = createMoleculeHTML(selectedElements);
    symbolElement.textContent = symbol;
    
    // Create combined word with colored symbols (no dashes)
    let combinedHTML = '';
    selectedElements.forEach((element) => {
        combinedHTML += `<span style=\"color: ${element.color}\">${element.symbol}</span>`;
    });
    combinedWordElement.innerHTML = combinedHTML;

    console.log('Display updated successfully');
}

// Add event listener to the button
document.getElementById('nextModule').addEventListener('click', updateDisplay);

// Add event listener to the number selector
document.getElementById('numberSelect').addEventListener('change', updateDisplay);

// Load elements data and initial display on page load
console.log('Initializing page...');
loadElementsData().then(() => {
    console.log('Initial data load complete, updating display...');
    updateDisplay();
}); 