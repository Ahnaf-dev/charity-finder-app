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

  describe("when given a resource with an id", () => {
    it('should return the correct format: "#/charity/5" to "/charity/:id"', () => {
      expect(utils.parseURLFromHash("#/charity/5")).toBe("/charity/:id");
    });
  });
});

describe("minString", () => {
  describe("when string with maxLength is given", () => {
    it('it should stop at max length and add ... ex: ("hollow", 5) -> "hollo..."', () => {
      expect(utils.minString("hollow", 5)).toBe("hollo...");
    });
  });
  describe("when string is shorter than maxLength", () => {
    it("should only return the string without adding ...", () => {
      expect(utils.minString("he", 5)).toBe("he");
    });
  });
});

describe("cloneArrayAndFilter", () => {
  describe("when an array argument is given", () => {
    it("should not equal to cloned array", () => {
      const arr = [1, 2, 5];
      expect(utils.cloneArrayAndFilter(arr)).not.toBe(arr);
    });

    it("should filter object by search term", () => {
      const filterOptions = {
        searchTerm: "he",
        countries: "",
        servedCountries: "",
      };
      const arr = [{ name: "he" }, { name: "canada" }, { name: "Hel" }];

      expect(utils.cloneArrayAndFilter(arr, filterOptions)).toEqual([
        { name: "he" },
        { name: "Hel" },
      ]);
    });

    it("should filter object by both search term and country", () => {
      const filterOptions = {
        searchTerm: "he",
        countries: "usa",
        servedCountries: "",
      };
      const arr = [
        { name: "he", country: "USA" },
        { name: "canada", country: "CA" },
        { name: "Hel", country: "RED" },
      ];

      expect(utils.cloneArrayAndFilter(arr, filterOptions)).toEqual([
        { name: "he", country: "USA" },
      ]);
    });
  });
});
