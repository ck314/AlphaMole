// Array of periodic table elements
const elements = [
    'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne',
    'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca',
    'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
    'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr',
    'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn',
    'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd',
    'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb',
    'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg',
    'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th',
    'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm'
];

// Function to get random element from the array
function getRandomElement() {
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex];
}

// Function to get random evaluation symbol
function getRandomSymbol() {
    return Math.random() < 0.5 ? '✅' : '❌';
}

// Function to create molecule HTML
function createMoleculeHTML(elements) {
    let html = '';
    elements.forEach((element, index) => {
        html += `<div class="element">${element}</div>`;
        if (index < elements.length - 1) {
            html += '<div class="bond">—</div>';
        }
    });
    return html;
}

// Function to update element colors
function updateElementColors(colorMap) {
    // Update individual element colors
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        const symbol = element.textContent.trim();
        if (colorMap[symbol]) {
            element.style.color = colorMap[symbol];
        }
    });

    // Update combined word colors
    const combinedWord = document.getElementById('combinedWord');
    if (combinedWord) {
        const text = combinedWord.textContent;
        let coloredText = '';
        let currentIndex = 0;

        while (currentIndex < text.length) {
            let found = false;
            // Try to match two-letter symbols first
            if (currentIndex < text.length - 1) {
                const twoLetterSymbol = text.slice(currentIndex, currentIndex + 2);
                if (colorMap[twoLetterSymbol]) {
                    coloredText += `<span style="color: ${colorMap[twoLetterSymbol]}">${twoLetterSymbol}</span>`;
                    currentIndex += 2;
                    found = true;
                }
            }
            // If no two-letter match, try single letter
            if (!found) {
                const oneLetterSymbol = text[currentIndex];
                if (colorMap[oneLetterSymbol]) {
                    coloredText += `<span style="color: ${colorMap[oneLetterSymbol]}">${oneLetterSymbol}</span>`;
                } else {
                    coloredText += oneLetterSymbol;
                }
                currentIndex++;
            }
        }
        combinedWord.innerHTML = coloredText;
    }
}

// Function to update the display
async function updateDisplay() {
    try {
        const numberSelect = document.getElementById('numberSelect');
        const molecule = document.getElementById('molecule');
        const symbol = document.getElementById('symbol');
        const combinedWord = document.getElementById('combinedWord');

        // Check if all required elements exist
        if (!numberSelect || !molecule || !symbol || !combinedWord) {
            throw new Error('Required DOM elements not found');
        }

        const numElements = parseInt(numberSelect.value);
        const selectedElements = [];
        
        // Get random elements based on selection
        for (let i = 0; i < numElements; i++) {
            selectedElements.push(getRandomElement());
        }
        
        // Get single random symbol
        const randomSymbol = getRandomSymbol();
        
        // Update the DOM
        molecule.innerHTML = createMoleculeHTML(selectedElements);
        symbol.textContent = randomSymbol;
        combinedWord.textContent = selectedElements.join('');

        // Apply colors after updating the content
        const response = await fetch('data/elements.json');
        const elementsData = await response.json();
        const colorMap = {};
        elementsData.forEach(element => {
            colorMap[element.symbol] = element.color;
        });
        updateElementColors(colorMap);
    } catch (error) {
        console.error('Error updating display:', error);
        // Optionally show error to user
        const errorMessage = document.createElement('div');
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Error updating display. Please refresh the page.';
        document.querySelector('.elements-container').appendChild(errorMessage);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the button
    document.getElementById('nextMolecule').addEventListener('click', updateDisplay);

    // Add event listener to the number selector
    document.getElementById('numberSelect').addEventListener('change', updateDisplay);

    // Set up a MutationObserver to watch for changes in the molecule div
    const moleculeDiv = document.getElementById('molecule');
    const observer = new MutationObserver(async () => {
        const response = await fetch('data/elements.json');
        const elementsData = await response.json();
        const colorMap = {};
        elementsData.forEach(element => {
            colorMap[element.symbol] = element.color;
        });
        updateElementColors(colorMap);
    });
    //observer.observe(moleculeDiv, { childList: true, subtree: true });

    // Also observe the combined word for changes
    const combinedWord = document.getElementById('combinedWord');
    if (combinedWord) {
    //    observer.observe(combinedWord, { childList: true, characterData: true });
    }

    // Initial display on page load
    updateDisplay();
}); 