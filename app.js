const express   = require('express');
const app       = express();
const port      = 8080;
const path      = require('path');

app.use(express.static('dist'));
app.use(express.static('src'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/content', (req, res) => {
    res.sendFile(path.join(__dirname, '/api/content.json'));
});

app.get('/api/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '/api/projects.json'));
});
// Middleware to load index.html on any request.
// This is in place to use HTML5 mode with Vue-router.
app.use((req, res, next) => {
    if (!req.originalUrl.includes('/dist/', 0)) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        next();
    }
});

app.listen(port, () => {
    console.log(`Portfolio running on port ${port}`);
});
