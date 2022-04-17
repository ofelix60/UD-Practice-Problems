// What is the shortest word that contains all 5 vowels?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];
let shortest = '';

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (
				word.includes('A') &&
				word.includes('E') &&
				word.includes('I') &&
				word.includes('O') &&
				word.includes('U')
			) {
				result.push(word);
			}
		});

	shortest = result.reduce((a, b) => (a.length <= b.length ? a : b));
	console.log(shortest);
});
