const express = require('express');
const app = express();
const cors = require('cors');
const { cryptocurrencies } = require("../cryptocurrencies"); // Adjusted path
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static(__dirname + '/../public')); // Adjusted path for public folder
app.use('/public', express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
    if (cryptocurrencies) {
        res.render(__dirname + '/../views/index.ejs', { cryptocurrencies }); // Adjusted path for EJS views
    } else {
        res.status(500).json({
            error: 'Cryptocurrencies were not able to load from cryptocurrencies.js.'
        });
    }
});

app.get('/api', (req, res) => {
    res.json(cryptocurrencies);
});

app.get('/api/:keyword', (req, res) => {
    const keyword = req.params.keyword.toLowerCase();

    const matches = cryptocurrencies.filter((obj) => obj.keywords.some(str => str.toLowerCase().includes(keyword)));

    if (matches.length) {
        res.json(matches);
    } else {
        res.status(404).json({
            error: `No cryptocurrencies were found with the ${keyword} keyword.`
        });
    }
});


module.exports = app;
