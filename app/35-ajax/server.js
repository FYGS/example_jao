const express = require('express');
const serveIndex = require('serve-index');

const app = express();
app.use((req, res, next) => {
	console.log('req.url', req.url);
	setTimeout(function () {
		next();
	}, 2000);
});

app.use(express.static('app/35-ajax'));
app.use(serveIndex('app/35-ajax', {icons: true}));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function () {
	console.log('server started on port 8000');
});
