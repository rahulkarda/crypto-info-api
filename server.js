const express = require('express');
const app = express();
const cors = require('cors');
const { cryptocurrencies } = require("./cryptocurrencies");
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	if (cryptocurrencies) {
		res.render('index.ejs', { cryptocurrencies });
	} else {
		// respond with status 500 if the cryptocurrencies array could not be loaded from cryptocurrencies.js
		res.status(500).json({
			error: 'Cryptocurrencies were not able to be loaded from cryptocurrencies.js.'
		});
	}
});

app.get('/api', (req, res) => {
	res.json(cryptocurrencies);
});

app.get('/api/:keyword', (req, res) => {
	const keyword = req.params.keyword.toLowerCase();
	
	// filter cryptocurrencies array, return items that match query; tag.
	const matches = cryptocurrencies.filter((obj) => obj.keywords.some(str => str.toLowerCase().includes(keyword)));

	// if matches were found, respond with matches array in JSON format
	if (matches.length) {
		res.json(matches);
	} else {
		// respond with status 404, no matches were found
		res.status(404).json({
			error: `No cryptocurrencies were found with the ${keyword} keyword.`
		});
	}
});

app.listen(PORT, () => {
	console.log(`The server is running on port : ${PORT}, check it out at localhost:8000`);
});
