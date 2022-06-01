// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const square = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    input = input.split(" ");
    if (!encode) {
      let newInput = input.join("");
      if (newInput.length % 2 > 0) return false;
    }
    const code = input.map((word) => {
      let coding = "";
      word = word.toLowerCase();
      if (encode) {
        for (let i = 0; i < word.length; i++) {
          let letter = word[i];
          for (alpha in square) {
            const number = square[alpha];
            if (letter === alpha) coding += number;
          }
        }
      }
      if (!encode) {
        let decode = [];
        for (let j = 0; j < word.length; j += 2) {
          decode.push(word.slice(j, j + 2));
        }
        for (let x = 0; x < decode.length; x++) {
          let numberCode = decode[x];
          for (alpha in square) {
            const numeral = square[alpha];
            if (numeral == numberCode) coding += alpha;
          }
        }
      }

      return coding;
    });
    return code.join(" ");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
// console.log(polybiusModule.polybius("hello world", true));
