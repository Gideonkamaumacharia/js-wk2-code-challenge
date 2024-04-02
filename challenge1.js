function swapString(str) {
    let words = str.split(" ");
    let swappedWords = words.map((word) => {
      let swappedWord = "";
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (char === char.toLowerCase()) {
          swappedWord += char.toUpperCase();
        } else if (char === char.toUpperCase()) {
          swappedWord += char.toLowerCase();
        } else {
          swappedWord += char;
        }
      }
      return swappedWord;
    });
    return swappedWords.join(" ");
  }
  
  console.log(swapString('The Quick Brown Fox')); // the results are logged in the console

  //We define the swapString function that takes a string str as an argument.
  //We split the input string into an array of words by calling split(" ") on str
  //We use the map() method on the words array to iterate over each word and apply the case-swapping logic.
  //Within the map() callback function, we define a variable swappedWord to store the case-swapped version of the current word.
  //Here We use a for loop to iterate over each character of the word. 
  //If the character is lowercase, we append its uppercase version to swappedWord
  
  //If the character is uppercase, we append its lowercase version to swappedWord
  //After iterating through all the characters of the word, we return the swappedWord.
  //a a new array swappedWords that contains the case-swapped version of each word is returned