// What are all of the words containing an X and a Y and a Z?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (word.includes('X') && word.includes('Y') && word.includes('Z')) {
				result.push(word);
			}
		});
	console.log(result);
});
