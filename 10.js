// What are all of the words that have all 5 vowels, in alphabetical order?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];
const allVowelsUsed = [];
const vowels = ['A', 'E', 'I', 'O', 'U'];

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
				allVowelsUsed.push(word);
			}
		});
	console.log(result);
	console.log(allVowelsUsed);

	allVowelsUsed.forEach(word => {
		let vowel = [];

		// this loops through all words in array
		for (let i = 0; word.length > i; i++) {
			// this loops through letters in word
			for (let j = 0; vowels.length > j; j++) {
				// checks for vowels in words
				if (word[i].includes(vowels[j])) {
					// stores vowels in array
					vowel.push(word[i]);
				}
			}
		}
		// compares arrays
		if (JSON.stringify(vowels) === JSON.stringify(vowel)) result.push(word);
	});

	console.log(result);
});
