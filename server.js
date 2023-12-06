const express = require('express');
const app = express();
const port = 3000;

const magicOfball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];



app.get('/greeting', (req, res) => {
	console.log(req.params);
	res.send('hello, stanger ' );
});

app.get('/greeting/:name', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.name + ' ' + 'Its so great to see you!');
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
	console.log(req.params);
	res.send(req.params.tipPercentage);
});
app.get('/magic', (req, res) => {
	console.log(req.params);
	res.send('What is your wish');
});

app.get('/magic/:question', (req, res) => {
	console.log(req.params);
	res.send(` ${req.params.question}  ${magicOfball[Math.floor(Math.random()*magicOfball.length)]}`);
});

app.listen(port, () => {
    console.log('listening on port', port);
})