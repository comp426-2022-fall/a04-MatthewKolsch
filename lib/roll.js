// Main file with dice-rolling function(s)

export function roll(num_sides, num_dice, num_rolls) {
	let roll_totals = [];
	// For each roll...
	for (let i = 0; i < num_rolls; i++) {
		let roll_total = 0;
		// From https://rocambille.github.io/en/2019/07/30/how-to-roll-a-dice-in-javascript/
		// For each die...
		for (let j = 0; j < num_dice; j++) {
			roll_total += 1 + Math.floor(Math.random() * num_sides);
		}
		roll_totals.push(roll_total);	
	}
	return {
		"sides": num_sides,
		"dice": num_dice,
		"rolls": num_rolls,
		"results": roll_totals
	};
};
