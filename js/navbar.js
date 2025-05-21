// Load navbar immediately
const navbarDiv = document.getElementById('navbar');
console.log('Loading navbar...');

fetch('navbar.html')
    .then(response => {
        console.log('Navbar response:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Navbar content loaded');
        navbarDiv.innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading navbar:', error);
        navbarDiv.innerHTML = '<nav class="navbar"><div class="navbar-left"><a href="index.html" class="navbar-brand">AlphaMole</a></div><div class="navbar-right"><a href="blog/index.html">Blog</a><a href="changes/index.html">Changes</a><a href="checklist/index.html">Checklist</a></div></nav>';
    }); 