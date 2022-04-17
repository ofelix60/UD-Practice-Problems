// How many words contain the substring "TYPE”?
const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];
let count = 0;

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (word.includes('TYPE')) {
				result.push(word);
				count++;
			}
		});
	console.log(result, count);
});
