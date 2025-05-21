// Function to load the navbar
function loadNavbar() {
    const navbarDiv = document.getElementById('navbar');
    fetch('../navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            navbarDiv.innerHTML = data;
        })
        .catch(error => {
            navbarDiv.innerHTML = '<nav class="navbar"><div class="navbar-left"><a href="../index.html" class="navbar-brand">AlphaMole</a></div><div class="navbar-right"><a href="index.html">Blog</a><a href="../changes/index.html">Changes</a><a href="../checklist/index.html">Checklist</a></div></nav>';
        });
}

// Load navbar when the DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar); 