interface component {
  generateHTML: () => string;
  afterRender: () => void;
}

const utils = {
  renderHTML: (targetSelector: string, component: component) => {
    $(targetSelector).html(component.generateHTML());
    component.afterRender();
  },
  parseURLFromHash: (hash: string) => {},
};

export default utils;

// {
//   generateHTML: () => string;
//   afterRender: () => void;
// }
