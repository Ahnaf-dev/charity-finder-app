// const utils = require("./utils");
import utils from "./utils";

describe("parseURLFromHash", () => {
  describe("when given a single resource", () => {
    it('should return the correct format: "#/charity" to "/charity"', () => {
      expect(utils.parseURLFromHash("#/charity")).toBe("/charity");
    });
  });

  describe("when not given a single resource", () => {
    it('should return the correct format: "#/" to "/"', () => {
      expect(utils.parseURLFromHash("#/")).toBe("/");
    });
  });
});

describe("minString", () => {
  describe("when string with maxLength is given", () => {
    it('it should stop at max length and add ... ex: ("hollow", 5) -> "hollo..."', () => {
      expect(utils.minString("hollow", 5)).toBe("hollo...");
    });
  });
});
