// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabeta = [
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
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    ",",
    ".",
    "/",
    "<",
    ">",
    "?",
    "-",
    "~",
  ];

  function substitution(input, alphabet, encode = true) {
    let alphaArray = [];
    if (!alphabet) return false;
    for (let x = 0; x < alphabet.length; x++) {
      if (!alphaArray.includes(alphabet[x])) alphaArray.push(alphabet[x]);
      else return false;
    }
    if (alphabet.length > 26 || alphabet.length < 26) return false;
    input = input.split(" ");
    alphaArray = alphabet.split("");
    const code = input.map((word) => {
      let coding = "";
      word = word.toLowerCase();
      if (encode) {
        for (let i = 0; i < word.length; i++) {
          let letter = word[i];
          let alphaBetaIndex = alphabeta.indexOf(letter);
          for (let j = 0; j < alphaArray.length; j++) {
            let codeLetter = alphaArray[j];
            let alphaArrayIndex = alphaArray.indexOf(codeLetter);
            if (alphaBetaIndex === alphaArrayIndex) coding += codeLetter;
          }
        }
      }
      if (!encode) {
        for (let i = 0; i < word.length; i++) {
          let codeLetter = word[i];
          let alphaArrayIndex = alphaArray.indexOf(codeLetter);
          for (let j = 0; j < alphabeta.length; j++) {
            let letter = alphabeta[j];
            let alphaBetaIndex = alphabeta.indexOf(letter);
            if (alphaBetaIndex === alphaArrayIndex) coding += letter;
          }
        }
      }
      return coding;
    });
    return code.join(" ");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
// console.log(substitutionModule.substitution("hello world", "xoyqmcgrukswaflnthdjpzibev", true))
