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
