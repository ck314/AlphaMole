// Function to fetch and apply element colors
async function applyElementColors() {
    try {
        const response = await fetch('data/elements.json');
        const elements = await response.json();
        
        // Create a map of element symbols to colors
        const colorMap = {};
        elements.forEach(element => {
            colorMap[element.symbol] = element.color;
        });

        // Function to update element colors
        function updateElementColors() {
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

        // Initial color update
        updateElementColors();

        // Set up a MutationObserver to watch for changes in the molecule div
        const moleculeDiv = document.getElementById('molecule');
        const observer = new MutationObserver(updateElementColors);
        observer.observe(moleculeDiv, { childList: true, subtree: true });

        // Also observe the combined word for changes
        const combinedWord = document.getElementById('combinedWord');
        if (combinedWord) {
            observer.observe(combinedWord, { childList: true, characterData: true });
        }
    } catch (error) {
        console.error('Error loading element colors:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', applyElementColors); 