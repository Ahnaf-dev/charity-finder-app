interface component {
  generateHTML: () => string;
  afterRender: () => void;
}

export interface filterOptions {
  searchTerm: string;
  countries: string;
  servedCountries: string;
}

const utils = {
  renderHTML: async (targetSelector: string, component: component) => {
    $(targetSelector).html(await component.generateHTML());
    await component.afterRender();
  },
  parseURLFromHash: (hash: string) => {
    let splitHash = hash.split("/");
    let resource = splitHash[1];
    let url = resource ? "/" + resource : "/";
    return url;
  },
  minString: (str: string, maxLength: number) => {
    const cantConcat = str.length < maxLength;

    if (cantConcat) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  },
  cloneArrayAndFilter: (
    array: any[],
    filterOptions: filterOptions = {
      searchTerm: "",
      countries: "",
      servedCountries: "",
    }
  ) => {
    let clonedArray = [...array];

    if (filterOptions) {
      if (filterOptions.searchTerm) {
        const regex = new RegExp(filterOptions.searchTerm, "gi");
        clonedArray = clonedArray.filter((obj) => obj.name.match(regex));
      }

      if (filterOptions.countries) {
        const regex = new RegExp(filterOptions.countries, "gi");
        clonedArray = clonedArray.filter((obj) => obj.country.match(regex));
      }

      return clonedArray;
    } else {
      return clonedArray;
    }
  },
};

export default utils;
// {
//   generateHTML: () => string;
//   afterRender: () => void;
// }
