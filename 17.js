// What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

const fs = require('fs');

const sowpods = 'sowpods.txt';
const result = [];
const letters = [
	'AA',
	'BB',
	'CC',
	'DD',
	'EE',
	'FF',
	'GG',
	'HH',
	'II',
	'JJ',
	'KK',
	'LL',
	'MM',
	'NN',
	'OO',
	'PP',
	'QQ',
	'RR',
	'SS',
	'TT',
	'UU',
	'VV',
	'WW',
	'XX',
	'YY',
	'ZZ',
];

fs.readFile(sowpods, 'utf8', (err, data) => {
	if (err) console.log(err.message);

	const dataArr = data.toString().split(/\n/);
	const doubles = [];


	// A function to find all the doubles that DO appear consecutively and pushes those letters into an array. The function stops looking for doubles at the first instance, pushes, then moves on.
	const filterItems = (arr, query) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].indexOf(query) !== -1) {
				doubles.push(query);
				break;
			}
			if (arr[i].indexOf(query) == -1) {
				continue;
			}
		}
	};

	// this loops through the double letters reference array so the above function can use each pair as a query. The loop breaks if it does find an instance of doubles
	for (let i = 0; i < letters.length; i++) {
		if (filterItems(dataArr, letters[i])) {
			break;
		}
	}
	// This loops through the doubles reference array and looks for the missing letters and pushes them into the result array.
	for (let i = 0; i < letters.length; i++) {
		if (!doubles.includes(letters[i])) {
			result.push(letters[i]);
		}
	}
	console.log(result);
});
