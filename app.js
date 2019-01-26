const express = require('express');
const path = require('path');
const Mailgun = require('mailgun-js');
const bodyParser = require('body-parser');

const {
    mailGunAPIKey,
    port,
    mailGunDomain
} = require('./config/env');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
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

app.post('/sendmail', async (req, res) => {
    try {
        const {
            name,
            email,
            number,
            message
        } = req.body;
        const mailgun = new Mailgun({ apiKey: mailGunAPIKey, domain: mailGunDomain });
        const data = {
            from: 'Portfolio <contact@aaron-welsh.co.uk>',
            to: 'contact@aaron-welsh.co.uk',
            subject: `New portfolio email from ${name} - ${email}`,
            html: `
                Name: ${name} <br />
                Email: ${email} <br />
                Number: ${number} <br />
                Message: ${message} 
            `
        };
        const sendMail = await mailgun.messages().send(data);
        console.log(sendMail);
        res.json({
            success: true,
            message: 'Email sent. I will try and get back to you as soon as I can.'
        });
    } catch (err) {
        res.json({
            success: false,
            message: err
        });
    }
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
