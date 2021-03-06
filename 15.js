// Which of the letters Q, X, and Z is the least common?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];
let q = 0;
let x = 0;
let z = 0;

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			for (letter of word) {
				if (letter.includes('Q')) {
					q++;
				} else if (letter.includes('X')) {
					x++;
				} else if (letter.includes('Z')) {
					z++;
				}
			}
		});

	if (q < x && q < z) {
		console.log(`Q is the least common letter. It only appears ${q} times.`);
	} else if (x < q && x < z) {
		console.log(`X is the least common letter. It only appears ${x} times.`);
	} else if (z < q && z < x) {
		console.log(`Z is the least common letter. It only appears ${z} times.`);
	}
});
