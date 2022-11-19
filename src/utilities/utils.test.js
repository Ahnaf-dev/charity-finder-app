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
