// What are all of the words with no vowel and not even a Y?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (
				!word.includes('A') &&
				!word.includes('E') &&
				!word.includes('I') &&
				!word.includes('O') &&
				!word.includes('U') &&
				!word.includes('Y')
			) {
				result.push(word);
			}
		});
	console.log(result);
});
