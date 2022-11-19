interface component {
  generateHTML: () => string;
  afterRender: () => void;
}

const utils = {
  renderHTML: (targetSelector: string, component: component) => {
    $(targetSelector).html(component.generateHTML());
    component.afterRender();
  },
  parseURLFromHash: (hash: string) => {
    let splitHash = hash.split("/");
    let resource = splitHash[1];
    let url = resource ? "/" + resource : "";

    return url;
  },
};

export default utils;
// {
//   generateHTML: () => string;
//   afterRender: () => void;
// }
