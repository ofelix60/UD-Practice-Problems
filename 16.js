// What is the longest palindrome?

const palindromeCheck = function (word) {
	let wordArr = word.split('');
	let wordArr2 = [...wordArr];

	if (JSON.stringify(wordArr) == JSON.stringify(wordArr2.reverse())) {
		palindromes.push(wordArr.join(''));
	}
};

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];
const palindromes = [];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data
		.toString()
		.split(/\n/)
		.forEach(word => {
			palindromeCheck(word);
		});
	// console.log(palindromes);
	var longest = palindromes.reduce(function (a, b) {
		return a.length > b.length ? a : b;
	});
	result.push(longest);
	console.log(result);
});
