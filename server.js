const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/info', (req, res) => {
	res.render('info');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log('Server Started !!');
});
