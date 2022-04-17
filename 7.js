// What are all of the words that both start and end with a Y?
const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (word[0] === 'Y' && word[word.length - 1] === 'Y') {
				result.push(word);
			}
		});
	console.log(result);
});
