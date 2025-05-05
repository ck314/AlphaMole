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

// Function to update the display
function updateDisplay() {
    const numElements = parseInt(document.getElementById('numberSelect').value);
    const selectedElements = [];
    
    // Get random elements based on selection
    for (let i = 0; i < numElements; i++) {
        selectedElements.push(getRandomElement());
    }
    
    // Get single random symbol
    const symbol = getRandomSymbol();
    
    // Update the DOM
    document.getElementById('molecule').innerHTML = createMoleculeHTML(selectedElements);
    document.getElementById('symbol').textContent = symbol;
    document.getElementById('combinedWord').textContent = selectedElements.join('');
}

// Add event listener to the button
document.getElementById('nextModule').addEventListener('click', updateDisplay);

// Add event listener to the number selector
document.getElementById('numberSelect').addEventListener('change', updateDisplay);

// Initial display on page load
updateDisplay(); 