// Sample input sentence (including the period at the end)
const sentence = "This is an example sentence.";

// Counters
let length = 0; // to count the number of characters
let words = 1; // to count the number of words, starting with 1 (as there's at least one word)
let vowels = 0; // to count the number of vowels

// Loop through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];

  // Increment character count
  length++;

  // Check if the character is a space to count words
  if (char === ' ' && i < sentence.length - 1) {
    words++;
  }

  // Check if the character is a vowel (considering lowercase)
  if ('aeiouAEIOU'.includes(char)) {
    vowels++;
  }
}

console.log("Length of the sentence:", length);
console.log("Number of words:", words);
console.log("Number of vowels:", vowels);
