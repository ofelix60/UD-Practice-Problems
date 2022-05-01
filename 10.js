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

	allVowelsUsed.forEach(word => {
		let vowelsInWord = []
		for (let letter of word) {
			// if the letter is a vowel
			if (vowels.includes(letter)) {
				// append the vowel to the array
				vowelsInWord.push(letter);
			}
			if (JSON.stringify(vowels) === JSON.stringify(vowelsInWord)) result.push(word);
		}
	});
	console.log(result);
})

