const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const input = "Thinkful";
    const actual = substitution(input, "$wae&zrdxtfcygvuhbijnokmp");

    expect(actual).to.be.false;
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const input = "Thinkful";
    const actual = substitution(input, "$wae&zrdxtfcygvahbijnokmpl");

    expect(actual).to.be.false;
  });

  describe("Encoding", () => {
    it("should correctly trasnlate the given phrase, based on the alphabet given to the function", () => {
      const input = "thinkful";
      const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces before and after encoding", () => {
      const input = "hello world";
      const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev");
      const expected = "rmwwl ilhwq";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const input = "Hello World";
      const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev");
      const expected = "rmwwl ilhwq";

      expect(actual).to.equal(expected);
    });
  });

  describe("Decoding", () => {
    it("should correctly decode the given input, based on the alphabet given to the function", () => {
      const input = "jrufscpw";
      const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces before and after encoding", () => {
      const input = "rmwwl ilhwq";
      const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const input = "Rmwwl Ilhwq";
      const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });
  });
});
