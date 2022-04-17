// What are all of the words containing a Q but not a U?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			if (word.includes('Q') && !word.includes('U')) {
				result.push(word);
			}
		});
	console.log(result);
});
