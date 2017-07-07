const express = require("express");

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
	//res.send('hello express!');	
	res.send({
		name: 'Andrew',
		likes: [
			'Biking',
			'Cities',
			'swimming'
		]
	});
});

app.listen(3000, () => {
	console.log('Server is up and running!');
});

