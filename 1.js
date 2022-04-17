// What are all of the words containing UU?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data.toString().split(/\n/);

	dataArr.forEach(word => {
		if (word.includes('UU')) result.push(word);
	});
	console.log(result);
});
