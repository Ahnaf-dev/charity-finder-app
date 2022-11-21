import pray from "../assets/images/pray.svg";

const header = {
  generateHTML: () => {
    const html = `
    <div class="header">
      <div class="header__container container">
        <h1 class="text--md"><a href="/#/charity">Charity Finder</a></h1>
        <img src="${pray}" alt="icon with prayer hands"/>
      </div>
    </div>
    `;
    return html;
  },
  afterRender: () => {},
};

export default header;
