const searchBar = {
  generateHTML: () => {
    const html = `
    <label class="sr-only" for="search">Search by charity name</label>
    <span class="search__logo material-icons">
    search
    </span>
    <input class="search__bar" type="text" id="search" placeholder="Search by charity name" />
    `;
    return html;
  },
  afterRender: () => {},
};

export default searchBar;
