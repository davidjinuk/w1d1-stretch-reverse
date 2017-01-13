var userInput = process.argv.slice(2);

for (var i = 0; i < userInput.length; i++) {
  var word = userInput[i];

  var reverse = '';
  for (var j = word.length - 1; j >= 0; j--) {
    var letter = word[j];
    reverse += letter;
  }
  console.log(reverse);
}