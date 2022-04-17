// What is the longest word that contains no vowels?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];
let longestNoVowel = '';

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
				!word.includes('U')
			) {
				result.push(word);
			}
		});

	longestNoVowel = result.reduce((a, b) => (a.length >= b.length ? a : b));
	console.log(longestNoVowel);
});
