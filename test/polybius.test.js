const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should ignore capital letters", () => {
    const message = "Thinkful";
    const actual = polybius(message);
    const expected = "4432423352125413";

    expect(actual).to.equal(expected);
  });
  describe("Encoding", () => {
    it("translates letters i and j to 42", () => {
      const message = "i and j";
      const actual = polybius(message);
      const expected = "42 113341 42";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces before and after encoding", () => {
      const message = "hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });
  });

  describe("Decoding", () => {
    it("should translate 42 to (i/j)", () => {
      const message = "42 113341 42";
      const actual = polybius(message, false);
      const expected = "ij and ij";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces before and after decoding", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });
  });
});
