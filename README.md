-- Project Underdog Practice Problems --

This is my attempt at the Project Underdog program readiness problems. 

The main thing I learned while solving these problems is fully understanding what each line of code is doing. 

Before joining UnderdogDevs, I was learning to code alone without any feedback. My main goal was getting things to work. Once I would get the code to do what I needed, I usually moved on without going back and really understanding why things work. After working through these problems and meeting with my mentor, I realized that it’s worth stepping back to consider why I’m taking each step. My mentor suggested explaining the steps out loud to someone (or something). If the explanation sounds confusing, I probably don’t fully understand what I’m doing. 

Another thing that I learned is that I need to move away from using traditional for-loops. The code ends up looking cluttered and there are cleaner alternatives. 

Finally, I learned that I need to take breaks. Hitting a mental wall definitely happens and it shows in my work. 

These challenges were really fun to work on. I’m reminded that I have a lot more to learn. I see the value of being able to access or manipulate data on this level. I have begun to study common algorithm patterns and I am solving problems like this on a daily basis so that I can become a more competent programmer.  


-- Summaries --

Problems 1-6, 8, 9, 11, 12 are approached in a similar fashion. I loop through the Scrabble words using the forEach method and use a conditional to check if the current word meets the prompts conditions. If the word passes the test, I push it into a storage array, then I log the array.

I use a mixture of the Logical And & Not operators as well as the length property and the includes method to find the answer to these problems.

7
For problem seven I checked the first and last index of each string using the index brackets. Zero for the first character and length minus one for the last character. The words that start and end with ‘Y’ are pushed into an array, then logged once every word has been checked.

10
I set up an array of all five vowels in alphabetical order for later use. The first step I take is to separate the Scrabble words that contain all five vowels. I use the forEach method to loop through the words and the includes method to check the word, then push the words that use all five vowels into a storage array.

Once I’ve done that, I loop through the words that contain all the vowels that are stored in the storage array. In this loop I set up another storage array inside the loop’s code block where I’ll store the current word’s vowels. To check if each letter is a vowel, I loop through the letters in the word and check if they’re in the array of vowels I set up at the beginning.

Once I’ve checked each letter in the word, I have an array of all the vowels in the word. I use the JSON.stringify method to convert the array of vowels in the array to strings and compare it to the also stringified array of vowels that I set up at the beginning. If they match I append the word to a results storage array, then I log the string once every word has been evaluated.

13/14 
I loop through the Scrabble words using the forEach method and use a conditional and the includes method to check if the current word has all five vowels. If the word passes the test, I push it into a storage array.

After I separated the words, I used the reduce method to compare the lengths of each word in the storage array to find the shortest/longest length. I saved the result in a variable and logged it to the console.



15
I set up three variables with values set to zero. I looped over all of the Scrabble words using the forEach method, and inside that code block I used a for-of loop to check the letters in each word. I set up an if-else statement block to check for each targeted letter using the includes method. If it found an instance, it would add one to the counter-variables.

After checking every word, I used an if/else statement to compare the counter variables and print the lowest number to the console.


16
I iterate over all the Scrabble words using the forEach method. Then I pass each word into a function that takes a string as a parameter. The function will create two arrays of the letters in the word. I call the reverse method on one of the arrays and compare them to the other. If they are the same, I push the word into a storage array. I use the reduce method to find the longest word in the storage array, then log the result to the console.

17
I set up an array with all the letter pairs. I set up a function called filterItems that looks for the first instance of doubles and pushes those letters into a storage array. This function accepts an array and a query as parameters. At the first instance, the function stops looking for doubles, pushes the letter pair that DOES appear consecutively, and moves on to the next item in the array.

I use a for loop to iterate over the letter pairs array. I pass the above function into an if statement that breaks if the function finds a double at the current letter pair.

The filterItems function takes the array of scrabble words and compares them to the letter pair at the current index. This will push all the letter pairs (a-z) that do appear consecutively.

After every letter pair is evaluated, I loop through the letter pair array again and compare it to the storage array that holds all of the letter pairs that do appear consecutively and pushes the letters that are missing into a results array. I log that array to display the answer.
