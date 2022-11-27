import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js";

const app = express();

const argument = minimist(process.argv.slice(2));

// The port should default to 5000 if no argument is given
const port = (() => {
	if (argument.port != null) {
		return argument.port;
	}
	else {
		return 5000;
	}
})();

// Test
//app.listen(port, () => {
//	console.log("Server listening on port " + port);
//})

app.get('/app/', (req, res, next) => {
	res.send('200 OK');
});

// Endpoint /app/roll/ should ALSO accept either JSON or URLEncoded data body...
app.use(express.urlencoded({extended: true}));

// Endpoint /app/roll/ that returns JSON for a default roll
app.get('/app/roll/', (req, res, next) => {
	// Default roll = 6 sides, 2 die, and 1 roll
	res.send(JSON.stringify(roll()));
});

// THIS ONE DOESN'T SEEM RIGHT?
// Endpoint /app/roll/ that returns JSON for non-default roll
app.get('/app/roll/', (req, res, next) => {
	res.send(JSON.stringify(roll(req.body.sides, req.body.dice, req.body.rolls)));
});

// Endpoint /app/roll/:sides/ that returns JSON for almost-default rolls (sides must be specified)
app.get('/app/roll/:sides/', (req, res, next) => {
	res.send(JSON.stringify(roll(req.body.sides, 2, 1)));
});

// Endpoint where sides and dice must be specified, and rolls = default
app.get('/app/roll/:sides/:dice/', (req, res, next) => {
	res.send(JSON.stringify(roll(req.body.sides, req.body.dice, 1)));
});

//Endpoint that returns JSOn for specified num of rolls with whatever num sides and dice specified
app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	res.send(JSON.stringify(roll(req.body.sides, req.body.dice, req.body.rolls)));
});