interface component {
  generateHTML: () => string;
  afterRender: () => void;
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
    return str.substring(0, maxLength) + "...";
  },
};

export default utils;
// {
//   generateHTML: () => string;
//   afterRender: () => void;
// }
