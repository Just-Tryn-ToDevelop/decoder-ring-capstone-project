const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  describe("Error Handling", () => {
    it("should return false if the shift value is equal to 0", () => {
      const message = "thinkful";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift value is less than -25", () => {
      const message = "thinkful";
      const shift = -27;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift value is greater than 25", () => {
      const message = "thinkful";
      const shift = 27;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift value is not present", () => {
      const message = "thinkful";
      const actual = caesar(message);

      expect(actual).to.be.false;
    });
  });

  describe("Encoding", () => {
    it("should ignore capital letters", () => {
      const message = "UIjolgvm";
      const shift = -1;
      const actual = caesar(message, shift);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should wrap around when at the end of the alphabet", () => {
      const message = "zigzag";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "ajhabh";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other characters before and after encoding", () => {
      const message = "zig. zag!";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "ajh. abh!";

      expect(actual).to.equal(expected);
    });
  });

  describe("Decoding", () => {
    it("should ignore capital letters", () => {
      const message = "UIjolgvm";
      const shift = 1;
      const actual = caesar(message, shift, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should wrap around when at the end of the alphabet", () => {
      const message = "ajhabh";
      const shift = 1;
      const actual = caesar(message, shift, false);
      const expected = "zigzag";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other characters before and after decoding", () => {
      const message = "ajh. abh!";
      const shift = 1;
      const actual = caesar(message, shift, false);
      const expected = "zig. zag!";

      expect(actual).to.equal(expected);
    });
  });
});
