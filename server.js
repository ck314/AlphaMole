const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle all routes
app.get('*', (req, res, next) => {
    // Remove query parameters and trailing slashes
    let requestedPath = req.path.replace(/\?.*$/, '').replace(/\/$/, '');
    
    // If the path ends with .html, serve it directly
    if (requestedPath.endsWith('.html')) {
        res.sendFile(path.join(__dirname, requestedPath), (err) => {
            if (err) {
                next(err);
            }
        });
        return;
    }
    
    // If the path is a directory, try to serve index.html from that directory
    if (!requestedPath.includes('.')) {
        res.sendFile(path.join(__dirname, requestedPath, 'index.html'), (err) => {
            if (err) {
                // If index.html doesn't exist, try the path as is
                res.sendFile(path.join(__dirname, requestedPath), (err) => {
                    if (err) {
                        next(err);
                    }
                });
            }
        });
        return;
    }
    
    // For all other files, serve them directly
    res.sendFile(path.join(__dirname, requestedPath), (err) => {
        if (err) {
            next(err);
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`Error serving ${req.path}:`, err);
    res.status(404).send('File not found');
});

// Listen on both localhost and 127.0.0.1
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at:`);
    console.log(`- http://localhost:${port}`);
    console.log(`- http://127.0.0.1:${port}`);
}); 