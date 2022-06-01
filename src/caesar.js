// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let code = [];
  // let newSentence = []
  function caesar(input, shift, encode = true) {
    input = input.toLowerCase()
    let sentence = input.split(" ");
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false
    const newSentence = sentence.map((word) => {
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
         letter = word[i];
        let alphaIndex = alpha.indexOf(letter);
        if (encode ) {
          if (alpha.includes(letter)) {
          if (alphaIndex + shift > 25) newWord += alpha[((alphaIndex + shift) % 25) - 1]
          else if (alphaIndex + shift < 0) newWord += alpha[(alphaIndex + shift) + 26]
          else newWord += alpha[alphaIndex + shift] 
          }
          else newWord += letter
        };
          if (!encode) {
            if (alpha.includes(letter)) {
            if (alphaIndex - shift < 0) newWord += alpha[(alphaIndex - shift) + 26]
            else if (alphaIndex - shift > 25) newWord += alpha[((alphaIndex - shift) % 25) - 1]
            else newWord += alpha[alphaIndex - shift]
            }
            else newWord += letter
          }
      }
      return newWord;
    });
    return newSentence.join(" ");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
// console.log(caesarModule.caesar("zig zag", 1));
